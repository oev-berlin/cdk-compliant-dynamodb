# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CompliantDynamoDb <a name="CompliantDynamoDb" id="cdk-compliant-dynamodb.CompliantDynamoDb"></a>

Creates a DynamoDB table that is secured by an AWS backup plan und with point in time recovery enabled by default.

#### Initializers <a name="Initializers" id="cdk-compliant-dynamodb.CompliantDynamoDb.Initializer"></a>

```typescript
import { CompliantDynamoDb } from 'cdk-compliant-dynamodb'

new CompliantDynamoDb(scope: Construct, id: string, props: CompliantDynamoDbProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps">CompliantDynamoDbProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-compliant-dynamodb.CompliantDynamoDb.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-compliant-dynamodb.CompliantDynamoDb.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-compliant-dynamodb.CompliantDynamoDb.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps">CompliantDynamoDbProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.property.backupPlan">backupPlan</a></code> | <code>aws-cdk-lib.aws_backup.BackupPlan</code> | *No description.* |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.property.backupVault">backupVault</a></code> | <code>aws-cdk-lib.aws_backup.BackupVault</code> | *No description.* |

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="cdk-compliant-dynamodb.CompliantDynamoDb.property.backupPlan"></a>

```typescript
public readonly backupPlan: BackupPlan;
```

- *Type:* aws-cdk-lib.aws_backup.BackupPlan

---

##### `backupVault`<sup>Required</sup> <a name="backupVault" id="cdk-compliant-dynamodb.CompliantDynamoDb.property.backupVault"></a>

```typescript
public readonly backupVault: BackupVault;
```

- *Type:* aws-cdk-lib.aws_backup.BackupVault

---


## Structs <a name="Structs" id="Structs"></a>

### CompliantDynamoDbProps <a name="CompliantDynamoDbProps" id="cdk-compliant-dynamodb.CompliantDynamoDbProps"></a>

#### Initializer <a name="Initializer" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.Initializer"></a>

```typescript
import { CompliantDynamoDbProps } from 'cdk-compliant-dynamodb'

const compliantDynamoDbProps: CompliantDynamoDbProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.partitionKey">partitionKey</a></code> | <code>aws-cdk-lib.aws_dynamodb.Attribute</code> | Partition key attribute definition. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.sortKey">sortKey</a></code> | <code>aws-cdk-lib.aws_dynamodb.Attribute</code> | Sort key attribute definition. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.billingMode">billingMode</a></code> | <code>aws-cdk-lib.aws_dynamodb.BillingMode</code> | Specify how you are charged for read and write throughput and how you manage capacity. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.contributorInsightsEnabled">contributorInsightsEnabled</a></code> | <code>boolean</code> | Whether CloudWatch contributor insights is enabled. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.encryption">encryption</a></code> | <code>aws-cdk-lib.aws_dynamodb.TableEncryption</code> | Whether server-side encryption with an AWS managed customer master key is enabled. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | External KMS key to use for table encryption. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.pointInTimeRecovery">pointInTimeRecovery</a></code> | <code>boolean</code> | Whether point-in-time recovery is enabled. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.readCapacity">readCapacity</a></code> | <code>number</code> | The read capacity for the table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy to apply to the DynamoDB Table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.replicationRegions">replicationRegions</a></code> | <code>string[]</code> | Regions where replica tables will be created. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.replicationTimeout">replicationTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout for a table replication operation in a single region. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.stream">stream</a></code> | <code>aws-cdk-lib.aws_dynamodb.StreamViewType</code> | When an item in the table is modified, StreamViewType determines what information is written to the stream for this table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.timeToLiveAttribute">timeToLiveAttribute</a></code> | <code>string</code> | The name of TTL attribute. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.waitForReplicationToFinish">waitForReplicationToFinish</a></code> | <code>boolean</code> | Indicates whether CloudFormation stack waits for replication to finish. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.writeCapacity">writeCapacity</a></code> | <code>number</code> | The write capacity for the table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.kinesisStream">kinesisStream</a></code> | <code>aws-cdk-lib.aws_kinesis.IStream</code> | Kinesis Data Stream to capture item-level changes for the table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.tableName">tableName</a></code> | <code>string</code> | Enforces a particular physical table name. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.backupPlanStartTime">backupPlanStartTime</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | Time to start the backup. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.backupVaultName">backupVaultName</a></code> | <code>string</code> | Use an existing BackupVault and import it by name. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.deleteBackupAfterDays">deleteBackupAfterDays</a></code> | <code>number</code> | Days until the backup is deleted from the vault. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDbProps.property.disabledRules">disabledRules</a></code> | <code>string[]</code> | AWS Config rules that I want to opt out. |

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.partitionKey"></a>

```typescript
public readonly partitionKey: Attribute;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Attribute

Partition key attribute definition.

---

##### `sortKey`<sup>Optional</sup> <a name="sortKey" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.sortKey"></a>

```typescript
public readonly sortKey: Attribute;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Attribute
- *Default:* no sort key

Sort key attribute definition.

---

##### `billingMode`<sup>Optional</sup> <a name="billingMode" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.billingMode"></a>

```typescript
public readonly billingMode: BillingMode;
```

- *Type:* aws-cdk-lib.aws_dynamodb.BillingMode
- *Default:* PROVISIONED if `replicationRegions` is not specified, PAY_PER_REQUEST otherwise

Specify how you are charged for read and write throughput and how you manage capacity.

---

##### `contributorInsightsEnabled`<sup>Optional</sup> <a name="contributorInsightsEnabled" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.contributorInsightsEnabled"></a>

```typescript
public readonly contributorInsightsEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether CloudWatch contributor insights is enabled.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.encryption"></a>

```typescript
public readonly encryption: TableEncryption;
```

- *Type:* aws-cdk-lib.aws_dynamodb.TableEncryption
- *Default:* server-side encryption is enabled with an AWS owned customer master key

Whether server-side encryption with an AWS managed customer master key is enabled.

This property cannot be set if `serverSideEncryption` is set.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* If `encryption` is set to `TableEncryption.CUSTOMER_MANAGED` and this property is undefined, a new KMS key will be created and associated with this table.

External KMS key to use for table encryption.

This property can only be set if `encryption` is set to `TableEncryption.CUSTOMER_MANAGED`.

---

##### `pointInTimeRecovery`<sup>Optional</sup> <a name="pointInTimeRecovery" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.pointInTimeRecovery"></a>

```typescript
public readonly pointInTimeRecovery: boolean;
```

- *Type:* boolean
- *Default:* point-in-time recovery is disabled

Whether point-in-time recovery is enabled.

---

##### `readCapacity`<sup>Optional</sup> <a name="readCapacity" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.readCapacity"></a>

```typescript
public readonly readCapacity: number;
```

- *Type:* number
- *Default:* 5

The read capacity for the table.

Careful if you add Global Secondary Indexes, as those will share the table's provisioned throughput.  Can only be provided if billingMode is Provisioned.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

The removal policy to apply to the DynamoDB Table.

---

##### `replicationRegions`<sup>Optional</sup> <a name="replicationRegions" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.replicationRegions"></a>

```typescript
public readonly replicationRegions: string[];
```

- *Type:* string[]
- *Default:* no replica tables are created

Regions where replica tables will be created.

---

##### `replicationTimeout`<sup>Optional</sup> <a name="replicationTimeout" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.replicationTimeout"></a>

```typescript
public readonly replicationTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.minutes(30)

The timeout for a table replication operation in a single region.

---

##### `stream`<sup>Optional</sup> <a name="stream" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.stream"></a>

```typescript
public readonly stream: StreamViewType;
```

- *Type:* aws-cdk-lib.aws_dynamodb.StreamViewType
- *Default:* streams are disabled unless `replicationRegions` is specified

When an item in the table is modified, StreamViewType determines what information is written to the stream for this table.

---

##### `timeToLiveAttribute`<sup>Optional</sup> <a name="timeToLiveAttribute" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.timeToLiveAttribute"></a>

```typescript
public readonly timeToLiveAttribute: string;
```

- *Type:* string
- *Default:* TTL is disabled

The name of TTL attribute.

---

##### `waitForReplicationToFinish`<sup>Optional</sup> <a name="waitForReplicationToFinish" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.waitForReplicationToFinish"></a>

```typescript
public readonly waitForReplicationToFinish: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether CloudFormation stack waits for replication to finish.

If set to false, the CloudFormation resource will mark the resource as created and replication will be completed asynchronously. This property is ignored if replicationRegions property is not set.  DO NOT UNSET this property if adding/removing multiple replicationRegions in one deployment, as CloudFormation only supports one region replication at a time. CDK overcomes this limitation by waiting for replication to finish before starting new replicationRegion.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicas](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicas)

---

##### `writeCapacity`<sup>Optional</sup> <a name="writeCapacity" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.writeCapacity"></a>

```typescript
public readonly writeCapacity: number;
```

- *Type:* number
- *Default:* 5

The write capacity for the table.

Careful if you add Global Secondary Indexes, as those will share the table's provisioned throughput.  Can only be provided if billingMode is Provisioned.

---

##### `kinesisStream`<sup>Optional</sup> <a name="kinesisStream" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.kinesisStream"></a>

```typescript
public readonly kinesisStream: IStream;
```

- *Type:* aws-cdk-lib.aws_kinesis.IStream
- *Default:* no Kinesis Data Stream

Kinesis Data Stream to capture item-level changes for the table.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string
- *Default:* <generated>

Enforces a particular physical table name.

---

##### `backupPlanStartTime`<sup>Optional</sup> <a name="backupPlanStartTime" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.backupPlanStartTime"></a>

```typescript
public readonly backupPlanStartTime: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule
- *Default:* 9pm

Time to start the backup.

---

##### `backupVaultName`<sup>Optional</sup> <a name="backupVaultName" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.backupVaultName"></a>

```typescript
public readonly backupVaultName: string;
```

- *Type:* string
- *Default:* create a new BackupVault

Use an existing BackupVault and import it by name.

---

##### `deleteBackupAfterDays`<sup>Optional</sup> <a name="deleteBackupAfterDays" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.deleteBackupAfterDays"></a>

```typescript
public readonly deleteBackupAfterDays: number;
```

- *Type:* number
- *Default:* 35 days

Days until the backup is deleted from the vault.

---

##### `disabledRules`<sup>Optional</sup> <a name="disabledRules" id="cdk-compliant-dynamodb.CompliantDynamoDbProps.property.disabledRules"></a>

```typescript
public readonly disabledRules: string[];
```

- *Type:* string[]
- *Default:* table is compliant against all rules  List of rules to opt out: 'BACKUP_RECOVERY_POINT_MANUAL_DELETION_DISABLED', 'DYNAMODB_IN_BACKUP_PLAN', 'DYNAMODB_PITR_ENABLED', 'DYNAMODB_AUTOSCALING_ENABLED', 'DYNAMODB_THROUGHPUT_LIMIT_CHECK', 'DYNAMODB_TABLE_ENCRYPTED_KMS',

AWS Config rules that I want to opt out.

---



