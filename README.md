[![NPM version](https://badge.fury.io/js/cdk-compliant-dynamodb.svg)](https://badge.fury.io/js/cdk-compliant-dynamodb)
[![PyPI version](https://badge.fury.io/py/cdk-compliant-dynamodb.svg)](https://badge.fury.io/py/cdk-compliant-dynamodb)
![Release](https://github.com/neilkuan/cdk-compliant-dynamodb/workflows/release/badge.svg)

# cdk-compliant-dynamodb

`cdk-compliant-dynamodb` is an AWS CK construct that allows you to easily create an AWS DynamoDB that is fully compliant against the following AWS Config rules:

- [BACKUP_RECOVERY_POINT_MANUAL_DELETION_DISABLED](https://docs.aws.amazon.com/config/latest/developerguide/backup-recovery-point-manual-deletion-disabled.html)
- [DYNAMODB_IN_BACKUP_PLAN](https://docs.aws.amazon.com/config/latest/developerguide/dynamodb-in-backup-plan.html)
- [DYNAMODB_PITR_ENABLED](https://docs.aws.amazon.com/config/latest/developerguide/dynamodb-pitr-enabled.html)
- [DYNAMODB_AUTOSCALING_ENABLED](https://docs.aws.amazon.com/config/latest/developerguide/dynamodb-autoscaling-enabled.html)
- [DYNAMODB_THROUGHPUT_LIMIT_CHECK](https://docs.aws.amazon.com/config/latest/developerguide/dynamodb-throughput-limit-check.html)
- [DYNAMODB_TABLE_ENCRYPTED_KMS](https://docs.aws.amazon.com/config/latest/developerguide/dynamodb-table-encrypted-kms.html)

## Why

Use this construct to be compliant against the most common AWS Config rules without the need to even know them. Opt-out of rules for non production environments.

## Sample

create a fully compliant DynamoDb table with imported AWS Backup vault

```typescript
new CompliantDynamoDb(stack, 'MyCompliantDynamoDB', {
  partitionKey: {
    name: 'id',
    type: dynamodb.AttributeType.STRING,
  },
  backupVaultName: 'my-dynamodb-backup-vault',
  deleteBackupAfterDays: 90,
  backupPlanStartTime: 6,
});
```

Opt out of all rules (create a non compliant table)

```typescript
new CompliantDynamoDb(stack, 'MyCompliantDynamoDB', {
  partitionKey: {
    name: 'id',
    type: dynamodb.AttributeType.STRING,
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
```
