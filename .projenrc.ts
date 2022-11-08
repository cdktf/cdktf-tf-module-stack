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
  publishToPypi: {
    distName: "cdktf-tf-module-stack",
    module: "cdktf_tf_module_stack",
  },
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.addPeerDeps("cdktf@>=0.13.0", "constructs@^10.0.25");
project.addDevDeps(
  "@cdktf/provider-null@>=3.0.11",
  "@cdktf/provider-random@>=3.0.11"
);
project.jest?.addIgnorePattern("dist");
project.addKeywords("cdktf", "terraform");
project.synth();
