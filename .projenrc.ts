/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { ConstructLibraryCdktf } from "projen/lib/cdktf";
import { NpmAccess, UpgradeDependenciesSchedule } from "projen/lib/javascript";
import { AutoApprove } from "./projenrc/auto-approve";
import { Automerge } from "./projenrc/automerge";
import { JsiiDocgen } from "./projenrc/custom-docgen";
import { CustomizedLicense } from "./projenrc/customized-license";
import { UpgradeCDKTF } from "./projenrc/upgrade-cdktf";

const githubActionPinnedVersions = {
  "actions/checkout": "b4ffde65f46336ab88eb53be808477a3936bae11", // v4.1.1
  "actions/download-artifact": "9bc31d5ccc31df68ecc42ccf4149144866c47d8a", // v3.0.2
  "actions/github-script": "60a0d83039c74a4aee543508d2ffcb1c3799cdea", // v7.0.1
  "actions/setup-node": "8f152de45cc393bb48ce5d89d36b731f54556e65", // v4.0.0
  "actions/upload-artifact": "a8a3f3ad30e3422c9c7b888a15615d19a852ae32", // v3.1.3
  "amannn/action-semantic-pull-request":
    "e9fabac35e210fea40ca5b14c0da95a099eff26f", // v5.4.0
  "peter-evans/create-pull-request": "153407881ec5c347639a548ade7d8ad1d6740e38", // v5.0.2
};

const project = new ConstructLibraryCdktf({
  author: "HashiCorp",
  authorAddress: "https://hashicorp.com",
  authorOrganization: true,
  defaultReleaseBranch: "main",
  name: "@cdktf/tf-module-stack",
  repositoryUrl: "https://github.com/cdktf/cdktf-tf-module-stack.git",
  prettier: true,
  projenrcTs: true,
  licensed: false,
  pullRequestTemplate: false,
  npmAccess: NpmAccess.PUBLIC,
  mergify: false,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ["auto-approve", "automerge", "dependencies"],
      schedule: UpgradeDependenciesSchedule.WEEKLY,
    },
  },
  minMajorVersion: 1,
  cdktfVersion: "0.20.0",
  description:
    "A drop-in replacement for cdktf.TerraformStack that lets you define Terraform modules as constructs" /* The description is just a string that helps people understand the purpose of the package. */,
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
  docgen: false,
  jsiiVersion: "~5.2.0",
  typescriptVersion: "~5.2.0", // should always be the same major/minor as JSII
});

new CustomizedLicense(project);
new AutoApprove(project);
new Automerge(project);
new UpgradeCDKTF(project);

project.addPeerDeps("cdktf@>=0.20.0", "constructs@^10.0.25");
project.addDevDeps(
  "@cdktf/provider-null@>=9.0.0",
  "@cdktf/provider-random@>=10.0.0"
);

new JsiiDocgen(project, {
  // We don't have docs for go because major changes lead to documentaiton changes
  // This bloks the release process
  languages: ["typescript", "python", "java", "csharp"],
});

project.jest?.addIgnorePattern("dist");
project.addKeywords("cdktf", "terraform");

project.addPackageIgnore("scripts");
project.addPackageIgnore("projenrc");
project.addPackageIgnore("/.projenrc.ts");

project.addPackageIgnore(".copywrite.hcl");
// Run copywrite tool to add copyright headers to all files
project.buildWorkflow?.addPostBuildSteps(
  {
    name: "Setup Copywrite tool",
    uses: "hashicorp/setup-copywrite@867a1a2a064a0626db322392806428f7dc59cb3e", // v1.1.2
  },
  { name: "Add headers using Copywrite tool", run: "copywrite headers" }
);

// Use pinned versions of github actions
Object.entries(githubActionPinnedVersions).forEach(([action, sha]) => {
  project.github?.actions.set(action, `${action}@${sha}`);
});

const releaseWorkflow = project.tryFindObjectFile(
  ".github/workflows/release.yml"
);
releaseWorkflow?.addOverride("on.push", {
  branches: ["main"],
  "paths-ignore": [
    // don't do a release if the change was only to these files/directories
    "examples/**",
    ".github/ISSUE_TEMPLATE/**",
    ".github/CODEOWNERS",
    ".github/dependabot.yml",
    ".github/**/*.md",
  ],
});

project.synth();
