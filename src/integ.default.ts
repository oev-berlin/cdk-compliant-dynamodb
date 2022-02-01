import { aws_dynamodb, App, Stack } from 'aws-cdk-lib';
import { CompliantDynamoDb } from '.';

const disabledRules: string[] = [
  // 'BACKUP_RECOVERY_POINT_ENCRYPTED',
  // 'BACKUP_RECOVERY_POINT_MANUAL_DELETION_DISABLED',
  // 'DYNAMODB_IN_BACKUP_PLAN',
  // 'DYNAMODB_PITR_ENABLED',
  // 'DYNAMODB_AUTOSCALING_ENABLED',
  'DYNAMODB_TABLE_ENCRYPTION_ENABLED',
  // 'DYNAMODB_THROUGHPUT_LIMIT_CHECK',
  // 'DYNAMODB_TABLE_ENCRYPTED_KMS',
];

const tableProps = {
  partitionKey: {
    name: 'id',
    type: aws_dynamodb.AttributeType.STRING,
  },
  disabledRules: disabledRules,
  // encryption: dynamodb.TableEncryption.DEFAULT
};

export class IntegTest {
  readonly stack: Stack[];
  constructor() {
    const app = new App();
    const env = {
      region: process.env.CDK_DEFAULT_REGION,
      account: process.env.CDK_DEFAULT_ACCOUNT,
    };
    const stack = new Stack(app, 'testing-stack', { env });

    new CompliantDynamoDb(stack, 'DynamoDB', tableProps);

    this.stack = [stack];
  }
}

new IntegTest();
