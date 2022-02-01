const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Janek',
  authorAddress: 'jhornung@oev.de',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-compliant-dynamodb',
  repositoryUrl: 'https://github.com/jhornung/cdk-compliant-dynamodb.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
const common_exclude = [
  'cdk.out',
  'cdk.context.json',
  'images',
  'yarn-error.log',
];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);
project.synth();
