const { cdktf } = require('projen');
const project = new cdktf.ConstructLibraryCdktf({
  author: 'Daniel Schmidt',
  authorAddress: 'danielmschmidt92@gmail.com',
  cdktfVersion: '0.4.0',
  defaultReleaseBranch: 'main',
  name: 'cdktf-tf-module-stack',
  repositoryUrl: 'https://github.com/danielmschmidt92/cdktf-tf-module-stack.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();