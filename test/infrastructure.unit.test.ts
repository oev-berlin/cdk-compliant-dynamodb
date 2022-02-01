import { aws_dynamodb, App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { CompliantDynamoDb } from '../src';

test('test no opt out list provided', () => {
  // GIVEN
  const app = new App();
  const stack = new Stack(app, 'testing-stack');
  //WHEN
  new CompliantDynamoDb(stack, 'DynamoDB', {
    partitionKey: { name: 'id', type: aws_dynamodb.AttributeType.STRING },
    disabledRules: [],
  });
  const template = Template.fromStack(stack);
  //THEN
  template.hasResourceProperties('AWS::DynamoDB::Table', {
    PointInTimeRecoverySpecification: {
      PointInTimeRecoveryEnabled: true,
    },
    BillingMode: 'PAY_PER_REQUEST',
    SSESpecification: {
      KMSMasterKeyId: {
        'Fn::GetAtt': ['DynamoDBKey4C4C6A3D', 'Arn'],
      },
      SSEEnabled: true,
      SSEType: 'KMS',
    },
  });
  template.hasResourceProperties('AWS::Backup::BackupVault', {
    AccessPolicy: {
      Statement: [
        {
          Action: [
            'backup:DeleteRecoveryPoint',
            'backup:PutBackupVaultAccessPolicy',
            'backup:UpdateRecoveryPointLifecycle',
          ],
          Effect: 'Deny',
          Principal: {
            AWS: '*',
          },
          Resource: '*',
          Sid: 'backup-recovery-point-manual-deletion-disabled',
        },
      ],
      Version: '2012-10-17',
    },
  });
  template.resourceCountIs('AWS::Backup::BackupPlan', 1);
});

test('test opt out of no rule', () => {
  // GIVEN
  const app = new App();
  const stack = new Stack(app, 'testing-stack');
  //WHEN
  new CompliantDynamoDb(stack, 'DynamoDB', {
    partitionKey: { name: 'id', type: aws_dynamodb.AttributeType.STRING },
  });
  const template = Template.fromStack(stack);
  //THEN
  template.hasResourceProperties('AWS::DynamoDB::Table', {
    PointInTimeRecoverySpecification: {
      PointInTimeRecoveryEnabled: true,
    },
    BillingMode: 'PAY_PER_REQUEST',
    SSESpecification: {
      KMSMasterKeyId: {
        'Fn::GetAtt': ['DynamoDBKey4C4C6A3D', 'Arn'],
      },
      SSEEnabled: true,
      SSEType: 'KMS',
    },
  });
  template.hasResourceProperties('AWS::Backup::BackupVault', {
    AccessPolicy: {
      Statement: [
        {
          Action: [
            'backup:DeleteRecoveryPoint',
            'backup:PutBackupVaultAccessPolicy',
            'backup:UpdateRecoveryPointLifecycle',
          ],
          Effect: 'Deny',
          Principal: {
            AWS: '*',
          },
          Resource: '*',
          Sid: 'backup-recovery-point-manual-deletion-disabled',
        },
      ],
      Version: '2012-10-17',
    },
  });
  template.resourceCountIs('AWS::Backup::BackupPlan', 1);
});

test('test opt out of all rules', () => {
  // GIVEN
  const app = new App();
  const stack = new Stack(app, 'testing-stack');
  //WHEN
  new CompliantDynamoDb(stack, 'DynamoDB', {
    partitionKey: {
      name: 'id',
      type: aws_dynamodb.AttributeType.STRING,
    },
    disabledRules: [
      'BACKUP_RECOVERY_POINT_MANUAL_DELETION_DISABLED',
      'DYNAMODB_IN_BACKUP_PLAN',
      'DYNAMODB_PITR_ENABLED',
      'DYNAMODB_AUTOSCALING_ENABLED',
      'DYNAMODB_THROUGHPUT_LIMIT_CHECK',
      'DYNAMODB_TABLE_ENCRYPTED_KMS',
    ],
  });
  const template = Template.fromStack(stack);
  //THEN
  template.hasResourceProperties('AWS::DynamoDB::Table', {
    KeySchema: [
      {
        AttributeName: 'id',
        KeyType: 'HASH',
      },
    ],
    AttributeDefinitions: [
      {
        AttributeName: 'id',
        AttributeType: 'S',
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
    SSESpecification: {
      SSEEnabled: true,
    },
  });
});

test('test opt out of DYNAMODB_PITR_ENABLED', () => {
  // GIVEN
  const app = new App();
  const stack = new Stack(app, 'testing-stack');
  //WHEN
  new CompliantDynamoDb(stack, 'DynamoDB', {
    partitionKey: {
      name: 'id',
      type: aws_dynamodb.AttributeType.STRING,
    },
    disabledRules: ['DYNAMODB_PITR_ENABLED'],
  });
  const template = Template.fromStack(stack);
  //THEN
  template.hasResourceProperties('AWS::DynamoDB::Table', {
    KeySchema: [
      {
        AttributeName: 'id',
        KeyType: 'HASH',
      },
    ],
    AttributeDefinitions: [
      {
        AttributeName: 'id',
        AttributeType: 'S',
      },
    ],
    BillingMode: 'PAY_PER_REQUEST',
    SSESpecification: {
      KMSMasterKeyId: {
        'Fn::GetAtt': ['DynamoDBKey4C4C6A3D', 'Arn'],
      },
      SSEEnabled: true,
      SSEType: 'KMS',
    },
  });
});

test('test opt out of DYNAMODB_AUTOSCALING_ENABLED', () => {
  // GIVEN
  const app = new App();
  const stack = new Stack(app, 'testing-stack');
  //WHEN
  new CompliantDynamoDb(stack, 'DynamoDB', {
    partitionKey: {
      name: 'id',
      type: aws_dynamodb.AttributeType.STRING,
    },
    disabledRules: ['DYNAMODB_AUTOSCALING_ENABLED'],
  });
  const template = Template.fromStack(stack);
  //THEN
  template.hasResourceProperties('AWS::DynamoDB::Table', {
    KeySchema: [
      {
        AttributeName: 'id',
        KeyType: 'HASH',
      },
    ],
    AttributeDefinitions: [
      {
        AttributeName: 'id',
        AttributeType: 'S',
      },
    ],
    PointInTimeRecoverySpecification: {
      PointInTimeRecoveryEnabled: true,
    },
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
    SSESpecification: {
      KMSMasterKeyId: {
        'Fn::GetAtt': ['DynamoDBKey4C4C6A3D', 'Arn'],
      },
      SSEEnabled: true,
      SSEType: 'KMS',
    },
  });
});

test('test opt out of DYNAMODB_IN_BACKUP_PLAN', () => {
  // GIVEN
  const app = new App();
  const stack = new Stack(app, 'testing-stack');
  //WHEN
  new CompliantDynamoDb(stack, 'DynamoDB', {
    partitionKey: {
      name: 'id',
      type: aws_dynamodb.AttributeType.STRING,
    },
    disabledRules: ['DYNAMODB_IN_BACKUP_PLAN'],
  });
  const template = Template.fromStack(stack);
  //THEN
  template.resourceCountIs('AWS::Backup::BackupPlan', 0);
});

test('test opt out of DYNAMODB_TABLE_ENCRYPTED_KMS', () => {
  // GIVEN
  const app = new App();
  const stack = new Stack(app, 'testing-stack');
  //WHEN
  new CompliantDynamoDb(stack, 'DynamoDB', {
    partitionKey: {
      name: 'id',
      type: aws_dynamodb.AttributeType.STRING,
    },
    disabledRules: ['DYNAMODB_TABLE_ENCRYPTED_KMS'],
  });
  const template = Template.fromStack(stack);
  //THEN
  template.hasResourceProperties('AWS::DynamoDB::Table', {
    SSESpecification: {
      KMSMasterKeyId: Match.absent(),
      SSEEnabled: true,
      SSEType: Match.absent(),
    },
  });
});

test('test opt out of DYNAMODB_RESOURCES_PROTECTED_BY_BACKUP_PLAN', () => {
  // GIVEN
  const app = new App();
  const stack = new Stack(app, 'testing-stack');
  //WHEN
  new CompliantDynamoDb(stack, 'DynamoDB', {
    partitionKey: {
      name: 'id',
      type: aws_dynamodb.AttributeType.STRING,
    },
    disabledRules: ['DYNAMODB_IN_BACKUP_PLAN'],
  });
  const template = Template.fromStack(stack);
  //THEN
  template.resourceCountIs('AWS::Backup::BackupVault', 0);
});

test('test opt out of BACKUP_RECOVERY_POINT_MANUAL_DELETION_DISABLED', () => {
  // GIVEN
  const app = new App();
  const stack = new Stack(app, 'testing-stack');
  //WHEN
  new CompliantDynamoDb(stack, 'DynamoDB', {
    partitionKey: {
      name: 'id',
      type: aws_dynamodb.AttributeType.STRING,
    },
    disabledRules: ['BACKUP_RECOVERY_POINT_MANUAL_DELETION_DISABLED'],
  });
  const template = Template.fromStack(stack);
  //THEN
  template.hasResourceProperties('AWS::Backup::BackupVault', {
    AccessPolicy: Match.absent(),
  });
});
