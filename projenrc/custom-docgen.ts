/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { FileBase } from "projen";
import { JsiiProject } from "projen/lib/cdk";

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

export class JsiiDocgen {
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
