import { FileBase } from "projen";
import { JsiiProject } from "projen/lib/cdk";
import { ConstructLibraryCdktf } from "projen/lib/cdktf";
import { NpmAccess } from "projen/lib/javascript";

const project = new ConstructLibraryCdktf({
  author: "Daniel Schmidt",
  authorAddress: "danielmschmidt92@gmail.com",
  defaultReleaseBranch: "main",
  name: "@cdktf/tf-module-stack",
  repositoryUrl: "https://github.com/DanielMSchmidt/cdktf-tf-module-stack.git",
  prettier: true,
  projenrcTs: true,
  githubOptions: {
    mergify: true,
  },
  npmAccess: NpmAccess.PUBLIC,
  autoApproveUpgrades: true,
  autoApproveOptions: {
    label: "auto-approve",
  },
  minMajorVersion: 1,
  cdktfVersion: "0.13.0",
  description:
    "A drop-in replacement for cdktf.TerraformStack that let's you define Terraform modules as construct" /* The description is just a string that helps people understand the purpose of the package. */,
  workflowGitIdentity: {
    name: "team-tf-cdk",
    email: "github-team-tf-cdk@hashicorp.com",
  },
  publishToPypi: {
    distName: "cdktf-tf-module-stack",
    module: "cdktf_tf_module_stack",
  },
  publishToNuget: {
    dotNetNamespace: "HashiCorp.Cdktf.TfModuleStack",
    packageId: "HashiCorp.Cdktf.TfModuleStack",
  },
  publishToMaven: {
    javaPackage: "com.hashicorp.cdktf.tf_module_stack",
    mavenGroupId: "com.hashicorp",
    mavenArtifactId: "cdktf-tf-module-stack",
    mavenEndpoint: "https://hashicorp.oss.sonatype.org",
  },
  publishToGo: {
    gitUserEmail: "github-team-tf-cdk@hashicorp.com",
    gitUserName: "CDK for Terraform Team",
    moduleName: `github.com/cdktf/cdktf-tf-module-stack-go`,
    packageName: "tfmodulestack",
  },
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
  docgen: false,
});
project.addPeerDeps("cdktf@>=0.13.0", "constructs@^10.0.25");
project.addDevDeps(
  "@cdktf/provider-null@>=3.0.11",
  "@cdktf/provider-random@>=3.0.11"
);

interface JsiiDocgenOptions {
  /**
   * File path for generated docs.
   * @default "API.md"
   */
  readonly filePath?: string;

  readonly languages: ("typescript" | "python" | "java" | "csharp" | "go")[];
  readonly documentationDirectory?: string;
}

class DocumentationEntryPoint extends FileBase {
  constructor(node: JsiiProject, private readonly options: JsiiDocgenOptions) {
    super(node, options.filePath ?? "API.md");
  }
  protected synthesizeContent(): string | undefined {
    const documentationDir = this.options.documentationDirectory ?? "docs";
    return `# API Documentation

    You can find the documentation for the supported languages here:
    ${this.options.languages.forEach(
      (language) => `- [${language}](${documentationDir}/${language}`
    )}
    `;
  }
}

class JsiiDocgen {
  constructor(
    node: JsiiProject,
    options: JsiiDocgenOptions = {
      languages: ["typescript"],
    }
  ) {
    node.addDevDeps("jsii-docgen");

    const filePath = options.filePath ?? "API.md";

    if (options.languages.length === 0) {
      throw new Error("No languages specified");
    } else if (options.languages.length === 1) {
      const docgen = node.addTask("docgen", {
        description: "Generate API.md from .jsii manifest",
        exec: `jsii-docgen -o ${filePath} -l ${options.languages[0]}`,
      });

      // spawn docgen after compilation (requires the .jsii manifest).
      node.postCompileTask.spawn(docgen);
      node.gitignore.include(`/${filePath}`);
      node.annotateGenerated(`/${filePath}`);
    } else {
      const documentationDir = options.documentationDirectory ?? "docs";
      options.languages.forEach((language) => {
        const languageDocsPath = `${documentationDir}/${language}.md`;
        const docgen = node.addTask(`docgen-${language}`, {
          description: `Generate API.md from .jsii manifest for ${language}`,
          exec: `jsii-docgen -o ${languageDocsPath} -l ${language}`,
        });

        // spawn docgen after compilation (requires the .jsii manifest).
        node.postCompileTask.spawn(docgen);
        node.gitignore.include(languageDocsPath);
        node.annotateGenerated(languageDocsPath);
      });

      new DocumentationEntryPoint(node, options);
    }
  }
}

new JsiiDocgen(project, {
  languages: ["typescript", "python", "java", "csharp", "go"],
});

project.jest?.addIgnorePattern("dist");
project.addKeywords("cdktf", "terraform");
project.synth();
