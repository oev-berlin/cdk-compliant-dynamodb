import { aws_backup, aws_dynamodb, aws_events } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  getEncrytion,
  getPitr,
  getBillingMode,
  createBackupPlan,
} from './services';
export interface CompliantDynamoDbProps extends aws_dynamodb.TableProps {
  /**
   * Use an existing BackupVault and import it by name
   * @default - create a new BackupVault
   */
  readonly backupVaultName?: string;
  /**
   * Days until the backup is deleted from the vault
   * @default - 35 days
   */
  readonly deleteBackupAfterDays?: number;
  /**
   * AWS Config rules that I want to opt out
   * @default - table is compliant against all rules
   *
   * List of rules to opt out:
   *  'BACKUP_RECOVERY_POINT_MANUAL_DELETION_DISABLED',
      'DYNAMODB_IN_BACKUP_PLAN',
      'DYNAMODB_PITR_ENABLED',
      'DYNAMODB_AUTOSCALING_ENABLED',
      'DYNAMODB_THROUGHPUT_LIMIT_CHECK',
      'DYNAMODB_TABLE_ENCRYPTED_KMS',
   */
  readonly disabledRules?: string[];
  /**
   * Time to start the backup
   * @default - 9pm
   */
  readonly backupPlanStartTime?: aws_events.Schedule;
}

/**
 * Creates a DynamoDB table that is secured by an AWS backup plan und with point in time recovery
 * enabled by default.
 */
export class CompliantDynamoDb extends aws_dynamodb.Table {
  readonly backupPlan!: aws_backup.BackupPlan;
  readonly backupVault!: aws_backup.BackupVault;
  constructor(scope: Construct, id: string, props: CompliantDynamoDbProps) {
    super(scope, id, {
      ...props,
      encryption: getEncrytion(props),
      pointInTimeRecovery: getPitr(props),
      billingMode: getBillingMode(props),
    });

    createBackupPlan(this, props);
  }
}
