import { aws_dynamodb, App, Stack } from 'aws-cdk-lib';
import {
  getEncrytion,
  getBillingMode,
  getPitr,
  createBackupPlan,
} from '../src/services';

// GIVEN
const props = {
  partitionKey: { name: 'id', type: aws_dynamodb.AttributeType.STRING },
};

test('test createBackupPlan function', () => {
  // GIVEN
  const app = new App();
  const stack = new Stack(app, 'testing-stack');
  // WHEN
  const backup = createBackupPlan(
    new aws_dynamodb.Table(stack, 'TestTable', props),
    {
      ...props,
      disabledRules: ['DYNAMODB_IN_BACKUP_PLAN'],
    },
  );
  // THEN
  expect(backup).toBeUndefined;
});

test('test createBackupPlan function empty props', () => {
  // GIVEN
  const app = new App();
  const stack = new Stack(app, 'testing-stack');
  // WHEN
  const backup = createBackupPlan(
    new aws_dynamodb.Table(stack, 'TestTable', props),
    props,
  );
  // THEN
  expect(backup).toBeInstanceOf(Object);
});

test('test getPitr function if "pointInTimeRecovery" is set by user', () => {
  // WHEN
  const pitr = getPitr({ ...props, pointInTimeRecovery: true });
  // THEN
  expect(pitr).toBe(true);
});

test('test getPitr function opt out PITR', () => {
  // WHEN
  const pitr = getPitr({ ...props, disabledRules: ['DYNAMODB_PITR_ENABLED'] });
  // THEN
  expect(pitr).toBe(false);
});

test('test getPitr function empty props', () => {
  // WHEN
  const pitr = getPitr(props);
  // THEN
  expect(pitr).toBe(true);
});

test('test getEncryption function if "encryption" is set by user', () => {
  // WHEN
  const encryption = getEncrytion({
    ...props,
    encryption: aws_dynamodb.TableEncryption.CUSTOMER_MANAGED,
  });
  // THEN
  expect(encryption).toBe(aws_dynamodb.TableEncryption.CUSTOMER_MANAGED);
});

test('test getEncryption function empty props', () => {
  // WHEN
  const encryption = getEncrytion(props);
  // THEN
  expect(encryption).toBe(aws_dynamodb.TableEncryption.CUSTOMER_MANAGED);
});

test('test getEncryption function opt out encryption', () => {
  // WHEN
  const encryption = getEncrytion({
    ...props,
    disabledRules: [
      'DYNAMODB_TABLE_ENCRYPTION_ENABLED',
      'DYNAMODB_TABLE_ENCRYPTED_KMS',
    ],
  });
  // THEN
  expect(encryption).toBe(aws_dynamodb.TableEncryption.DEFAULT);
});

test('test getEncryption function opt out KMS', () => {
  // WHEN
  const encryption = getEncrytion({
    ...props,
    disabledRules: ['DYNAMODB_TABLE_ENCRYPTED_KMS'],
  });
  // THEN
  expect(encryption).toBe(aws_dynamodb.TableEncryption.AWS_MANAGED);
});

test('test getBillingMode function opt out auto scaling', () => {
  // WHEN
  const billingMode = getBillingMode({
    ...props,
    disabledRules: ['DYNAMODB_AUTOSCALING_ENABLED'],
  });
  // THEN
  expect(billingMode).toBe(aws_dynamodb.BillingMode.PROVISIONED);
});

test('test getBillingMode function empty props', () => {
  // WHEN
  const billingMode = getBillingMode(props);
  // THEN
  expect(billingMode).toBe(aws_dynamodb.BillingMode.PAY_PER_REQUEST);
});

test('test getBillingMode function if "billingMode" is set by user', () => {
  // WHEN
  const billingModePayPerRequest = getBillingMode({
    ...props,
    billingMode: aws_dynamodb.BillingMode.PAY_PER_REQUEST,
  });
  const billingModeProvisioned = getBillingMode({
    ...props,
    billingMode: aws_dynamodb.BillingMode.PROVISIONED,
  });
  // THEN
  expect(billingModePayPerRequest).toBe(
    aws_dynamodb.BillingMode.PAY_PER_REQUEST,
  );
  expect(billingModeProvisioned).toBe(aws_dynamodb.BillingMode.PROVISIONED);
});
