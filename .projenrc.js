const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'digitalcampus360 Berlin',
  authorAddress: 'dc360@oev.de',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-compliant-dynamodb',
  repositoryUrl: 'https://github.com/oev-berlin/cdk-compliant-dynamodb.git',

  description: 'DynamoDb table that is compliant against most AWS Config rules',
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
