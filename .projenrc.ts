import { CDKTFConstruct } from "@dschmidt/cdktf-construct-base";
const project = new CDKTFConstruct({
  author: "Daniel Schmidt",
  authorAddress: "danielmschmidt92@gmail.com",
  defaultReleaseBranch: "main",
  name: "@cdktf/tf-module-stack",
  repositoryUrl: "https://github.com/DanielMSchmidt/cdktf-tf-module-stack.git",

  deps: [],
  minMajorVersion: 1,
  peerDeps: ["cdktf@>=0.13.0"],
  devDeps: [
    "@cdktf/provider-null@>=3.0.11",
    "@cdktf/provider-random@>=3.0.11",
    "@dschmidt/cdktf-construct-base",
  ],
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
project.synth();
