import {
  aws_backup,
  aws_dynamodb,
  aws_events,
  aws_iam,
  Duration,
} from 'aws-cdk-lib';
import { CompliantDynamoDbProps } from '.';

const KMS_RULE = 'DYNAMODB_TABLE_ENCRYPTED_KMS';
const ENCRYPTION_RULE = 'DYNAMODB_TABLE_ENCRYPTION_ENABLED';
const PITR_RULE = 'DYNAMODB_PITR_ENABLED';
const ASG_RULE = 'DYNAMODB_AUTOSCALING_ENABLED';
const BACKUP_RULE = 'DYNAMODB_IN_BACKUP_PLAN';
const MANUAL_DELETION_RULE = 'BACKUP_RECOVERY_POINT_MANUAL_DELETION_DISABLED';

function getEncrytion(props: CompliantDynamoDbProps) {
  if (props.encryption != undefined) {
    return props.encryption;
  }

  if (
    props.disabledRules?.includes(ENCRYPTION_RULE) &&
    props.disabledRules?.includes(KMS_RULE)
  ) {
    return aws_dynamodb.TableEncryption.DEFAULT;
  }

  if (props.disabledRules?.includes(KMS_RULE)) {
    return aws_dynamodb.TableEncryption.AWS_MANAGED;
  }
  return aws_dynamodb.TableEncryption.CUSTOMER_MANAGED;
}

function getPitr(props: CompliantDynamoDbProps) {
  if (props.pointInTimeRecovery != undefined) {
    return props.pointInTimeRecovery;
  }

  return !props.disabledRules?.includes(PITR_RULE);
}

function getBillingMode(props: CompliantDynamoDbProps) {
  if (props.billingMode != undefined) {
    return props.billingMode;
  }

  if (props.disabledRules?.includes(ASG_RULE)) {
    return aws_dynamodb.BillingMode.PROVISIONED;
  }
  return aws_dynamodb.BillingMode.PAY_PER_REQUEST;
}

function createBackupPlan(
  table: aws_dynamodb.Table,
  props: CompliantDynamoDbProps,
) {
  if (props.disabledRules?.includes(BACKUP_RULE)) {
    return undefined;
  }

  const backupPlan = new aws_backup.BackupPlan(table, 'DynamoDbBackupPlan', {
    backupVault: createBackupVault(table, props),
    backupPlanRules: [
      new aws_backup.BackupPlanRule({
        ruleName: 'daily-aws_dynamodb-aws_backup',
        scheduleExpression:
          props.backupPlanStartTime ??
          aws_events.Schedule.cron({
            hour: '21',
            minute: '0',
          }),
        deleteAfter: Duration.days(props.deleteBackupAfterDays ?? 35),
      }),
    ],
  });
  backupPlan.addSelection('DynamoDb', {
    resources: [aws_backup.BackupResource.fromArn(table.tableArn)],
  });
  return backupPlan;
}

function createBackupVault(
  table: aws_dynamodb.Table,
  props: CompliantDynamoDbProps,
) {
  if (props.disabledRules?.includes(MANUAL_DELETION_RULE)) {
    const backupVault = new aws_backup.BackupVault(
      table,
      'DynamoDbBackupVault',
    );
    return backupVault;
  }

  if (props.backupVaultName) {
    return aws_backup.BackupVault.fromBackupVaultName(
      table,
      'ImportedBackupVault',
      props.backupVaultName,
    );
  }

  return new aws_backup.BackupVault(table, 'DynamoDbBackupVault', {
    accessPolicy: new aws_iam.PolicyDocument({
      statements: [
        new aws_iam.PolicyStatement({
          sid: 'backup-recovery-point-manual-deletion-disabled',
          effect: aws_iam.Effect.DENY,
          principals: [new aws_iam.AnyPrincipal()],
          actions: [
            'backup:DeleteRecoveryPoint',
            'backup:PutBackupVaultAccessPolicy',
            'backup:UpdateRecoveryPointLifecycle',
          ],
          resources: ['*'],
        }),
      ],
    }),
  });
}

export { getEncrytion, getPitr, getBillingMode, createBackupPlan };
