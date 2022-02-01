import * as backup from '@aws-cdk/aws-backup';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import { Schedule } from '@aws-cdk/aws-events';
import * as iam from '@aws-cdk/aws-iam';
import * as cdk from '@aws-cdk/core';
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
    return dynamodb.TableEncryption.DEFAULT;
  }

  if (props.disabledRules?.includes(KMS_RULE)) {
    return dynamodb.TableEncryption.AWS_MANAGED;
  }
  return dynamodb.TableEncryption.CUSTOMER_MANAGED;
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
    return dynamodb.BillingMode.PROVISIONED;
  }
  return dynamodb.BillingMode.PAY_PER_REQUEST;
}

function createBackupPlan(
  table: dynamodb.Table,
  props: CompliantDynamoDbProps,
) {
  if (props.disabledRules?.includes(BACKUP_RULE)) {
    return undefined;
  }

  const backupPlan = new backup.BackupPlan(table, 'DynamoDbBackupPlan', {
    backupVault: createBackupVault(table, props),
    backupPlanRules: [
      new backup.BackupPlanRule({
        ruleName: 'daily-dynamodb-backup',
        scheduleExpression:
          props.backupPlanStartTime ??
          Schedule.cron({
            hour: '21',
            minute: '0',
          }),
        deleteAfter: cdk.Duration.days(props.deleteBackupAfterDays ?? 35),
      }),
    ],
  });
  backupPlan.addSelection('DynamoDb', {
    resources: [backup.BackupResource.fromArn(table.tableArn)],
  });
  return backupPlan;
}

function createBackupVault(
  table: dynamodb.Table,
  props: CompliantDynamoDbProps,
) {
  if (props.disabledRules?.includes(MANUAL_DELETION_RULE)) {
    const backupVault = new backup.BackupVault(table, 'DynamoDbBackupVault');
    return backupVault;
  }

  if (props.backupVaultName) {
    return backup.BackupVault.fromBackupVaultName(
      table,
      'ImportedBackupVault',
      props.backupVaultName,
    );
  }

  return new backup.BackupVault(table, 'DynamoDbBackupVault', {
    accessPolicy: new iam.PolicyDocument({
      statements: [
        new iam.PolicyStatement({
          sid: 'backup-recovery-point-manual-deletion-disabled',
          effect: iam.Effect.DENY,
          principals: [new iam.AnyPrincipal()],
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
