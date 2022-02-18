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

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.addGlobalSecondaryIndex">addGlobalSecondaryIndex</a></code> | Add a global secondary index of table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.addLocalSecondaryIndex">addLocalSecondaryIndex</a></code> | Add a local secondary index of table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.autoScaleGlobalSecondaryIndexReadCapacity">autoScaleGlobalSecondaryIndexReadCapacity</a></code> | Enable read capacity scaling for the given GSI. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.autoScaleGlobalSecondaryIndexWriteCapacity">autoScaleGlobalSecondaryIndexWriteCapacity</a></code> | Enable write capacity scaling for the given GSI. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.autoScaleReadCapacity">autoScaleReadCapacity</a></code> | Enable read capacity scaling for this table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.autoScaleWriteCapacity">autoScaleWriteCapacity</a></code> | Enable write capacity scaling for this table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.grant">grant</a></code> | Adds an IAM policy statement associated with this table to an IAM principal's policy. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.grantFullAccess">grantFullAccess</a></code> | Permits all DynamoDB operations ("dynamodb:*") to an IAM principal. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.grantReadData">grantReadData</a></code> | Permits an IAM principal all data read operations from this table: BatchGetItem, GetRecords, GetShardIterator, Query, GetItem, Scan. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.grantReadWriteData">grantReadWriteData</a></code> | Permits an IAM principal to all data read/write operations to this table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.grantStream">grantStream</a></code> | Adds an IAM policy statement associated with this table's stream to an IAM principal's policy. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.grantStreamRead">grantStreamRead</a></code> | Permits an IAM principal all stream data read operations for this table's stream: DescribeStream, GetRecords, GetShardIterator, ListStreams. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.grantTableListStreams">grantTableListStreams</a></code> | Permits an IAM Principal to list streams attached to current dynamodb table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.grantWriteData">grantWriteData</a></code> | Permits an IAM principal all data write operations to this table: BatchWriteItem, PutItem, UpdateItem, DeleteItem. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.metric">metric</a></code> | Return the given named metric for this Table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.metricConditionalCheckFailedRequests">metricConditionalCheckFailedRequests</a></code> | Metric for the conditional check failed requests this table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.metricConsumedReadCapacityUnits">metricConsumedReadCapacityUnits</a></code> | Metric for the consumed read capacity units this table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.metricConsumedWriteCapacityUnits">metricConsumedWriteCapacityUnits</a></code> | Metric for the consumed write capacity units this table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.metricSuccessfulRequestLatency">metricSuccessfulRequestLatency</a></code> | Metric for the successful request latency this table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.metricSystemErrorsForOperations">metricSystemErrorsForOperations</a></code> | Metric for the system errors this table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.metricThrottledRequests">metricThrottledRequests</a></code> | How many requests are throttled on this table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.metricUserErrors">metricUserErrors</a></code> | Metric for the user errors. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.schema">schema</a></code> | Get schema attributes of table or index. |

---

##### `toString` <a name="toString" id="cdk-compliant-dynamodb.CompliantDynamoDb.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-compliant-dynamodb.CompliantDynamoDb.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops being managed by CloudFormation, either because you've removed it from the CDK application or because you've made a change that requires the resource to be replaced.  The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-compliant-dynamodb.CompliantDynamoDb.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addGlobalSecondaryIndex` <a name="addGlobalSecondaryIndex" id="cdk-compliant-dynamodb.CompliantDynamoDb.addGlobalSecondaryIndex"></a>

```typescript
public addGlobalSecondaryIndex(props: GlobalSecondaryIndexProps): void
```

Add a global secondary index of table.

###### `props`<sup>Required</sup> <a name="props" id="cdk-compliant-dynamodb.CompliantDynamoDb.addGlobalSecondaryIndex.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.GlobalSecondaryIndexProps

the property of global secondary index.

---

##### `addLocalSecondaryIndex` <a name="addLocalSecondaryIndex" id="cdk-compliant-dynamodb.CompliantDynamoDb.addLocalSecondaryIndex"></a>

```typescript
public addLocalSecondaryIndex(props: LocalSecondaryIndexProps): void
```

Add a local secondary index of table.

###### `props`<sup>Required</sup> <a name="props" id="cdk-compliant-dynamodb.CompliantDynamoDb.addLocalSecondaryIndex.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.LocalSecondaryIndexProps

the property of local secondary index.

---

##### `autoScaleGlobalSecondaryIndexReadCapacity` <a name="autoScaleGlobalSecondaryIndexReadCapacity" id="cdk-compliant-dynamodb.CompliantDynamoDb.autoScaleGlobalSecondaryIndexReadCapacity"></a>

```typescript
public autoScaleGlobalSecondaryIndexReadCapacity(indexName: string, props: EnableScalingProps): IScalableTableAttribute
```

Enable read capacity scaling for the given GSI.

###### `indexName`<sup>Required</sup> <a name="indexName" id="cdk-compliant-dynamodb.CompliantDynamoDb.autoScaleGlobalSecondaryIndexReadCapacity.parameter.indexName"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="cdk-compliant-dynamodb.CompliantDynamoDb.autoScaleGlobalSecondaryIndexReadCapacity.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.EnableScalingProps

---

##### `autoScaleGlobalSecondaryIndexWriteCapacity` <a name="autoScaleGlobalSecondaryIndexWriteCapacity" id="cdk-compliant-dynamodb.CompliantDynamoDb.autoScaleGlobalSecondaryIndexWriteCapacity"></a>

```typescript
public autoScaleGlobalSecondaryIndexWriteCapacity(indexName: string, props: EnableScalingProps): IScalableTableAttribute
```

Enable write capacity scaling for the given GSI.

###### `indexName`<sup>Required</sup> <a name="indexName" id="cdk-compliant-dynamodb.CompliantDynamoDb.autoScaleGlobalSecondaryIndexWriteCapacity.parameter.indexName"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="cdk-compliant-dynamodb.CompliantDynamoDb.autoScaleGlobalSecondaryIndexWriteCapacity.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.EnableScalingProps

---

##### `autoScaleReadCapacity` <a name="autoScaleReadCapacity" id="cdk-compliant-dynamodb.CompliantDynamoDb.autoScaleReadCapacity"></a>

```typescript
public autoScaleReadCapacity(props: EnableScalingProps): IScalableTableAttribute
```

Enable read capacity scaling for this table.

###### `props`<sup>Required</sup> <a name="props" id="cdk-compliant-dynamodb.CompliantDynamoDb.autoScaleReadCapacity.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.EnableScalingProps

---

##### `autoScaleWriteCapacity` <a name="autoScaleWriteCapacity" id="cdk-compliant-dynamodb.CompliantDynamoDb.autoScaleWriteCapacity"></a>

```typescript
public autoScaleWriteCapacity(props: EnableScalingProps): IScalableTableAttribute
```

Enable write capacity scaling for this table.

###### `props`<sup>Required</sup> <a name="props" id="cdk-compliant-dynamodb.CompliantDynamoDb.autoScaleWriteCapacity.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.EnableScalingProps

---

##### `grant` <a name="grant" id="cdk-compliant-dynamodb.CompliantDynamoDb.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string): Grant
```

Adds an IAM policy statement associated with this table to an IAM principal's policy.

If `encryptionKey` is present, appropriate grants to the key needs to be added separately using the `table.encryptionKey.grant*` methods.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-compliant-dynamodb.CompliantDynamoDb.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal (no-op if undefined).

---

###### `actions`<sup>Required</sup> <a name="actions" id="cdk-compliant-dynamodb.CompliantDynamoDb.grant.parameter.actions"></a>

- *Type:* string

The set of actions to allow (i.e. "dynamodb:PutItem", "dynamodb:GetItem", ...).

---

##### `grantFullAccess` <a name="grantFullAccess" id="cdk-compliant-dynamodb.CompliantDynamoDb.grantFullAccess"></a>

```typescript
public grantFullAccess(grantee: IGrantable): Grant
```

Permits all DynamoDB operations ("dynamodb:*") to an IAM principal.

Appropriate grants will also be added to the customer-managed KMS key if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-compliant-dynamodb.CompliantDynamoDb.grantFullAccess.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal to grant access to.

---

##### `grantReadData` <a name="grantReadData" id="cdk-compliant-dynamodb.CompliantDynamoDb.grantReadData"></a>

```typescript
public grantReadData(grantee: IGrantable): Grant
```

Permits an IAM principal all data read operations from this table: BatchGetItem, GetRecords, GetShardIterator, Query, GetItem, Scan.

Appropriate grants will also be added to the customer-managed KMS key if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-compliant-dynamodb.CompliantDynamoDb.grantReadData.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal to grant access to.

---

##### `grantReadWriteData` <a name="grantReadWriteData" id="cdk-compliant-dynamodb.CompliantDynamoDb.grantReadWriteData"></a>

```typescript
public grantReadWriteData(grantee: IGrantable): Grant
```

Permits an IAM principal to all data read/write operations to this table.

BatchGetItem, GetRecords, GetShardIterator, Query, GetItem, Scan, BatchWriteItem, PutItem, UpdateItem, DeleteItem  Appropriate grants will also be added to the customer-managed KMS key if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-compliant-dynamodb.CompliantDynamoDb.grantReadWriteData.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal to grant access to.

---

##### `grantStream` <a name="grantStream" id="cdk-compliant-dynamodb.CompliantDynamoDb.grantStream"></a>

```typescript
public grantStream(grantee: IGrantable, actions: string): Grant
```

Adds an IAM policy statement associated with this table's stream to an IAM principal's policy.

If `encryptionKey` is present, appropriate grants to the key needs to be added separately using the `table.encryptionKey.grant*` methods.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-compliant-dynamodb.CompliantDynamoDb.grantStream.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal (no-op if undefined).

---

###### `actions`<sup>Required</sup> <a name="actions" id="cdk-compliant-dynamodb.CompliantDynamoDb.grantStream.parameter.actions"></a>

- *Type:* string

The set of actions to allow (i.e. "dynamodb:DescribeStream", "dynamodb:GetRecords", ...).

---

##### `grantStreamRead` <a name="grantStreamRead" id="cdk-compliant-dynamodb.CompliantDynamoDb.grantStreamRead"></a>

```typescript
public grantStreamRead(grantee: IGrantable): Grant
```

Permits an IAM principal all stream data read operations for this table's stream: DescribeStream, GetRecords, GetShardIterator, ListStreams.

Appropriate grants will also be added to the customer-managed KMS key if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-compliant-dynamodb.CompliantDynamoDb.grantStreamRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal to grant access to.

---

##### `grantTableListStreams` <a name="grantTableListStreams" id="cdk-compliant-dynamodb.CompliantDynamoDb.grantTableListStreams"></a>

```typescript
public grantTableListStreams(grantee: IGrantable): Grant
```

Permits an IAM Principal to list streams attached to current dynamodb table.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-compliant-dynamodb.CompliantDynamoDb.grantTableListStreams.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal (no-op if undefined).

---

##### `grantWriteData` <a name="grantWriteData" id="cdk-compliant-dynamodb.CompliantDynamoDb.grantWriteData"></a>

```typescript
public grantWriteData(grantee: IGrantable): Grant
```

Permits an IAM principal all data write operations to this table: BatchWriteItem, PutItem, UpdateItem, DeleteItem.

Appropriate grants will also be added to the customer-managed KMS key if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-compliant-dynamodb.CompliantDynamoDb.grantWriteData.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal to grant access to.

---

##### `metric` <a name="metric" id="cdk-compliant-dynamodb.CompliantDynamoDb.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Table.

By default, the metric will be calculated as a sum over a period of 5 minutes. You can customize this by using the `statistic` and `period` properties.

###### `metricName`<sup>Required</sup> <a name="metricName" id="cdk-compliant-dynamodb.CompliantDynamoDb.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="cdk-compliant-dynamodb.CompliantDynamoDb.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConditionalCheckFailedRequests` <a name="metricConditionalCheckFailedRequests" id="cdk-compliant-dynamodb.CompliantDynamoDb.metricConditionalCheckFailedRequests"></a>

```typescript
public metricConditionalCheckFailedRequests(props?: MetricOptions): Metric
```

Metric for the conditional check failed requests this table.

By default, the metric will be calculated as a sum over a period of 5 minutes. You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-compliant-dynamodb.CompliantDynamoDb.metricConditionalCheckFailedRequests.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConsumedReadCapacityUnits` <a name="metricConsumedReadCapacityUnits" id="cdk-compliant-dynamodb.CompliantDynamoDb.metricConsumedReadCapacityUnits"></a>

```typescript
public metricConsumedReadCapacityUnits(props?: MetricOptions): Metric
```

Metric for the consumed read capacity units this table.

By default, the metric will be calculated as a sum over a period of 5 minutes. You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-compliant-dynamodb.CompliantDynamoDb.metricConsumedReadCapacityUnits.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConsumedWriteCapacityUnits` <a name="metricConsumedWriteCapacityUnits" id="cdk-compliant-dynamodb.CompliantDynamoDb.metricConsumedWriteCapacityUnits"></a>

```typescript
public metricConsumedWriteCapacityUnits(props?: MetricOptions): Metric
```

Metric for the consumed write capacity units this table.

By default, the metric will be calculated as a sum over a period of 5 minutes. You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-compliant-dynamodb.CompliantDynamoDb.metricConsumedWriteCapacityUnits.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricSuccessfulRequestLatency` <a name="metricSuccessfulRequestLatency" id="cdk-compliant-dynamodb.CompliantDynamoDb.metricSuccessfulRequestLatency"></a>

```typescript
public metricSuccessfulRequestLatency(props?: MetricOptions): Metric
```

Metric for the successful request latency this table.

By default, the metric will be calculated as an average over a period of 5 minutes. You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-compliant-dynamodb.CompliantDynamoDb.metricSuccessfulRequestLatency.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricSystemErrorsForOperations` <a name="metricSystemErrorsForOperations" id="cdk-compliant-dynamodb.CompliantDynamoDb.metricSystemErrorsForOperations"></a>

```typescript
public metricSystemErrorsForOperations(props?: SystemErrorsForOperationsMetricOptions): IMetric
```

Metric for the system errors this table.

This will sum errors across all possible operations. Note that by default, each individual metric will be calculated as a sum over a period of 5 minutes. You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-compliant-dynamodb.CompliantDynamoDb.metricSystemErrorsForOperations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.SystemErrorsForOperationsMetricOptions

---

##### `metricThrottledRequests` <a name="metricThrottledRequests" id="cdk-compliant-dynamodb.CompliantDynamoDb.metricThrottledRequests"></a>

```typescript
public metricThrottledRequests(props?: MetricOptions): Metric
```

How many requests are throttled on this table.

Default: sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="cdk-compliant-dynamodb.CompliantDynamoDb.metricThrottledRequests.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricUserErrors` <a name="metricUserErrors" id="cdk-compliant-dynamodb.CompliantDynamoDb.metricUserErrors"></a>

```typescript
public metricUserErrors(props?: MetricOptions): Metric
```

Metric for the user errors.

Note that this metric reports user errors across all the tables in the account and region the table resides in.  By default, the metric will be calculated as a sum over a period of 5 minutes. You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-compliant-dynamodb.CompliantDynamoDb.metricUserErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `schema` <a name="schema" id="cdk-compliant-dynamodb.CompliantDynamoDb.schema"></a>

```typescript
public schema(indexName?: string): SchemaOptions
```

Get schema attributes of table or index.

###### `indexName`<sup>Optional</sup> <a name="indexName" id="cdk-compliant-dynamodb.CompliantDynamoDb.schema.parameter.indexName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.fromTableArn">fromTableArn</a></code> | Creates a Table construct that represents an external table via table arn. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.fromTableAttributes">fromTableAttributes</a></code> | Creates a Table construct that represents an external table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.fromTableName">fromTableName</a></code> | Creates a Table construct that represents an external table via table name. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-compliant-dynamodb.CompliantDynamoDb.isConstruct"></a>

```typescript
import { CompliantDynamoDb } from 'cdk-compliant-dynamodb'

CompliantDynamoDb.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-compliant-dynamodb.CompliantDynamoDb.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="cdk-compliant-dynamodb.CompliantDynamoDb.isResource"></a>

```typescript
import { CompliantDynamoDb } from 'cdk-compliant-dynamodb'

CompliantDynamoDb.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-compliant-dynamodb.CompliantDynamoDb.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromTableArn` <a name="fromTableArn" id="cdk-compliant-dynamodb.CompliantDynamoDb.fromTableArn"></a>

```typescript
import { CompliantDynamoDb } from 'cdk-compliant-dynamodb'

CompliantDynamoDb.fromTableArn(scope: Construct, id: string, tableArn: string)
```

Creates a Table construct that represents an external table via table arn.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-compliant-dynamodb.CompliantDynamoDb.fromTableArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-compliant-dynamodb.CompliantDynamoDb.fromTableArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `tableArn`<sup>Required</sup> <a name="tableArn" id="cdk-compliant-dynamodb.CompliantDynamoDb.fromTableArn.parameter.tableArn"></a>

- *Type:* string

The table's ARN.

---

##### `fromTableAttributes` <a name="fromTableAttributes" id="cdk-compliant-dynamodb.CompliantDynamoDb.fromTableAttributes"></a>

```typescript
import { CompliantDynamoDb } from 'cdk-compliant-dynamodb'

CompliantDynamoDb.fromTableAttributes(scope: Construct, id: string, attrs: TableAttributes)
```

Creates a Table construct that represents an external table.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-compliant-dynamodb.CompliantDynamoDb.fromTableAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-compliant-dynamodb.CompliantDynamoDb.fromTableAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="cdk-compliant-dynamodb.CompliantDynamoDb.fromTableAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.TableAttributes

A `TableAttributes` object.

---

##### `fromTableName` <a name="fromTableName" id="cdk-compliant-dynamodb.CompliantDynamoDb.fromTableName"></a>

```typescript
import { CompliantDynamoDb } from 'cdk-compliant-dynamodb'

CompliantDynamoDb.fromTableName(scope: Construct, id: string, tableName: string)
```

Creates a Table construct that represents an external table via table name.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-compliant-dynamodb.CompliantDynamoDb.fromTableName.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-compliant-dynamodb.CompliantDynamoDb.fromTableName.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `tableName`<sup>Required</sup> <a name="tableName" id="cdk-compliant-dynamodb.CompliantDynamoDb.fromTableName.parameter.tableName"></a>

- *Type:* string

The table's name.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.property.tableArn">tableArn</a></code> | <code>string</code> | Arn of the dynamodb table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.property.tableName">tableName</a></code> | <code>string</code> | Table name of the dynamodb table. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | KMS encryption key, if this table uses a customer-managed encryption key. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.property.tableStreamArn">tableStreamArn</a></code> | <code>string</code> | ARN of the table's stream, if there is one. |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.property.backupPlan">backupPlan</a></code> | <code>aws-cdk-lib.aws_backup.BackupPlan</code> | *No description.* |
| <code><a href="#cdk-compliant-dynamodb.CompliantDynamoDb.property.backupVault">backupVault</a></code> | <code>aws-cdk-lib.aws_backup.BackupVault</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-compliant-dynamodb.CompliantDynamoDb.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-compliant-dynamodb.CompliantDynamoDb.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK (generally, those created by creating new class instances like Role, Bucket, etc.), this is always the same as the environment of the stack they belong to; however, for imported resources (those obtained from static methods like fromRoleArn, fromBucketName, etc.), that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-compliant-dynamodb.CompliantDynamoDb.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `tableArn`<sup>Required</sup> <a name="tableArn" id="cdk-compliant-dynamodb.CompliantDynamoDb.property.tableArn"></a>

```typescript
public readonly tableArn: string;
```

- *Type:* string

Arn of the dynamodb table.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="cdk-compliant-dynamodb.CompliantDynamoDb.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Table name of the dynamodb table.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="cdk-compliant-dynamodb.CompliantDynamoDb.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

KMS encryption key, if this table uses a customer-managed encryption key.

---

##### `tableStreamArn`<sup>Optional</sup> <a name="tableStreamArn" id="cdk-compliant-dynamodb.CompliantDynamoDb.property.tableStreamArn"></a>

```typescript
public readonly tableStreamArn: string;
```

- *Type:* string

ARN of the table's stream, if there is one.

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



