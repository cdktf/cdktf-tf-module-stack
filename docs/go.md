# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProviderRequirement <a name="ProviderRequirement" id="@cdktf/tf-module-stack.ProviderRequirement"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-tf-module-stack-go/tfmodulestack"

tfmodulestack.NewProviderRequirement(scope Construct, providerName *string, providerVersionConstraint *string, terraformProviderSource *string) ProviderRequirement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.providerName">providerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.providerVersionConstraint">providerVersionConstraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.terraformProviderSource">terraformProviderSource</a></code> | <code>*string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.providerName"></a>

- *Type:* *string

---

##### `providerVersionConstraint`<sup>Optional</sup> <a name="providerVersionConstraint" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.providerVersionConstraint"></a>

- *Type:* *string

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.terraformProviderSource"></a>

- *Type:* *string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |

---

##### `ToString` <a name="ToString" id="@cdktf/tf-module-stack.ProviderRequirement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/tf-module-stack.ProviderRequirement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/tf-module-stack.ProviderRequirement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/tf-module-stack.ProviderRequirement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/tf-module-stack.ProviderRequirement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/tf-module-stack.ProviderRequirement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/tf-module-stack.ProviderRequirement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/tf-module-stack.ProviderRequirement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/tf-module-stack.ProviderRequirement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`IsConstruct`~~ <a name="IsConstruct" id="@cdktf/tf-module-stack.ProviderRequirement.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-tf-module-stack-go/tfmodulestack"

tfmodulestack.ProviderRequirement_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.ProviderRequirement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/tf-module-stack.ProviderRequirement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/tf-module-stack.ProviderRequirement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/tf-module-stack.ProviderRequirement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/tf-module-stack.ProviderRequirement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/tf-module-stack.ProviderRequirement.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/tf-module-stack.ProviderRequirement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/tf-module-stack.ProviderRequirement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/tf-module-stack.ProviderRequirement.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/tf-module-stack.ProviderRequirement.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---


### TFModuleApp <a name="TFModuleApp" id="@cdktf/tf-module-stack.TFModuleApp"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.TFModuleApp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-tf-module-stack-go/tfmodulestack"

tfmodulestack.NewTFModuleApp(options AppOptions) TFModuleApp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.options">options</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.AppOptions</code> | *No description.* |

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.options"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.AppOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.crossStackReference">CrossStackReference</a></code> | Creates a reference from one stack to another, invoked on prepareStack since it creates extra resources. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.synth">Synth</a></code> | Synthesizes all resources to the output directory. |

---

##### `ToString` <a name="ToString" id="@cdktf/tf-module-stack.TFModuleApp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `CrossStackReference` <a name="CrossStackReference" id="@cdktf/tf-module-stack.TFModuleApp.crossStackReference"></a>

```go
func CrossStackReference(fromStack TerraformStack, toStack TerraformStack, identifier *string) *string
```

Creates a reference from one stack to another, invoked on prepareStack since it creates extra resources.

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="@cdktf/tf-module-stack.TFModuleApp.crossStackReference.parameter.fromStack"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

###### `toStack`<sup>Required</sup> <a name="toStack" id="@cdktf/tf-module-stack.TFModuleApp.crossStackReference.parameter.toStack"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/tf-module-stack.TFModuleApp.crossStackReference.parameter.identifier"></a>

- *Type:* *string

---

##### `Synth` <a name="Synth" id="@cdktf/tf-module-stack.TFModuleApp.synth"></a>

```go
func Synth()
```

Synthesizes all resources to the output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.isApp">IsApp</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.of">Of</a></code> | *No description.* |

---

##### ~~`IsConstruct`~~ <a name="IsConstruct" id="@cdktf/tf-module-stack.TFModuleApp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-tf-module-stack-go/tfmodulestack"

tfmodulestack.TFModuleApp_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleApp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsApp` <a name="IsApp" id="@cdktf/tf-module-stack.TFModuleApp.isApp"></a>

```go
import "github.com/cdktf/cdktf-tf-module-stack-go/tfmodulestack"

tfmodulestack.TFModuleApp_IsApp(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleApp.isApp.parameter.x"></a>

- *Type:* interface{}

---

##### `Of` <a name="Of" id="@cdktf/tf-module-stack.TFModuleApp.of"></a>

```go
import "github.com/cdktf/cdktf-tf-module-stack-go/tfmodulestack"

tfmodulestack.TFModuleApp_Of(construct IConstruct) App
```

###### `construct`<sup>Required</sup> <a name="construct" id="@cdktf/tf-module-stack.TFModuleApp.of.parameter.construct"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.manifest">Manifest</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.Manifest</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.outdir">Outdir</a></code> | <code>*string</code> | The output directory into which resources will be synthesized. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.skipValidation">SkipValidation</a></code> | <code>*bool</code> | Whether to skip the validation during synthesis of the app. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.targetStackId">TargetStackId</a></code> | <code>*string</code> | The stack which will be synthesized. |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/tf-module-stack.TFModuleApp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/tf-module-stack.TFModuleApp.property.manifest"></a>

```go
func Manifest() Manifest
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.Manifest

---

##### `Outdir`<sup>Required</sup> <a name="Outdir" id="@cdktf/tf-module-stack.TFModuleApp.property.outdir"></a>

```go
func Outdir() *string
```

- *Type:* *string

The output directory into which resources will be synthesized.

---

##### `SkipValidation`<sup>Optional</sup> <a name="SkipValidation" id="@cdktf/tf-module-stack.TFModuleApp.property.skipValidation"></a>

```go
func SkipValidation() *bool
```

- *Type:* *bool

Whether to skip the validation during synthesis of the app.

---

##### `TargetStackId`<sup>Optional</sup> <a name="TargetStackId" id="@cdktf/tf-module-stack.TFModuleApp.property.targetStackId"></a>

```go
func TargetStackId() *string
```

- *Type:* *string

The stack which will be synthesized.

If not set, all stacks will be synthesized.

---


### TFModuleOutput <a name="TFModuleOutput" id="@cdktf/tf-module-stack.TFModuleOutput"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-tf-module-stack-go/tfmodulestack"

tfmodulestack.NewTFModuleOutput(scope Construct, name *string, config TerraformOutputConfig) TFModuleOutput
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.name">name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.config">config</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformOutputConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.name"></a>

- *Type:* *string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.config"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformOutputConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.toTerraform">ToTerraform</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/tf-module-stack.TFModuleOutput.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/tf-module-stack.TFModuleOutput.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/tf-module-stack.TFModuleOutput.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/tf-module-stack.TFModuleOutput.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/tf-module-stack.TFModuleOutput.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/tf-module-stack.TFModuleOutput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/tf-module-stack.TFModuleOutput.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/tf-module-stack.TFModuleOutput.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/tf-module-stack.TFModuleOutput.toTerraform"></a>

```go
func ToTerraform() interface{}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.isTerrafromOutput">IsTerrafromOutput</a></code> | *No description.* |

---

##### ~~`IsConstruct`~~ <a name="IsConstruct" id="@cdktf/tf-module-stack.TFModuleOutput.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-tf-module-stack-go/tfmodulestack"

tfmodulestack.TFModuleOutput_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleOutput.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerrafromOutput` <a name="IsTerrafromOutput" id="@cdktf/tf-module-stack.TFModuleOutput.isTerrafromOutput"></a>

```go
import "github.com/cdktf/cdktf-tf-module-stack-go/tfmodulestack"

tfmodulestack.TFModuleOutput_IsTerrafromOutput(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleOutput.isTerrafromOutput.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.staticId">StaticId</a></code> | <code>*bool</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.value">Value</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.sensitive">Sensitive</a></code> | <code>*bool</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/tf-module-stack.TFModuleOutput.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/tf-module-stack.TFModuleOutput.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/tf-module-stack.TFModuleOutput.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/tf-module-stack.TFModuleOutput.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `StaticId`<sup>Required</sup> <a name="StaticId" id="@cdktf/tf-module-stack.TFModuleOutput.property.staticId"></a>

```go
func StaticId() *bool
```

- *Type:* *bool

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/tf-module-stack.TFModuleOutput.property.value"></a>

```go
func Value() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/tf-module-stack.TFModuleOutput.property.dependsOn"></a>

```go
func DependsOn() *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/tf-module-stack.TFModuleOutput.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Sensitive`<sup>Optional</sup> <a name="Sensitive" id="@cdktf/tf-module-stack.TFModuleOutput.property.sensitive"></a>

```go
func Sensitive() *bool
```

- *Type:* *bool

---


### TFModuleStack <a name="TFModuleStack" id="@cdktf/tf-module-stack.TFModuleStack"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.TFModuleStack.Initializer"></a>

```go
import "github.com/cdktf/cdktf-tf-module-stack-go/tfmodulestack"

tfmodulestack.NewTFModuleStack(scope Construct, id *string) TFModuleStack
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.Initializer.parameter.id">id</a></code> | <code>*string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/tf-module-stack.TFModuleStack.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/tf-module-stack.TFModuleStack.Initializer.parameter.id"></a>

- *Type:* *string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.addDependency">AddDependency</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.allProviders">AllProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.dependsOn">DependsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.ensureBackendExists">EnsureBackendExists</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.getLogicalId">GetLogicalId</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.prepareStack">PrepareStack</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.registerIncomingCrossStackReference">RegisterIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.registerOutgoingCrossStackReference">RegisterOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.runAllValidations">RunAllValidations</a></code> | Run all validations on the stack. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.toTerraform">ToTerraform</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/tf-module-stack.TFModuleStack.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddDependency` <a name="AddDependency" id="@cdktf/tf-module-stack.TFModuleStack.addDependency"></a>

```go
func AddDependency(dependency TerraformStack)
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktf/tf-module-stack.TFModuleStack.addDependency.parameter.dependency"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `AddOverride` <a name="AddOverride" id="@cdktf/tf-module-stack.TFModuleStack.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/tf-module-stack.TFModuleStack.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/tf-module-stack.TFModuleStack.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `AllProviders` <a name="AllProviders" id="@cdktf/tf-module-stack.TFModuleStack.allProviders"></a>

```go
func AllProviders() *[]TerraformProvider
```

##### `DependsOn` <a name="DependsOn" id="@cdktf/tf-module-stack.TFModuleStack.dependsOn"></a>

```go
func DependsOn(stack TerraformStack) *bool
```

###### `stack`<sup>Required</sup> <a name="stack" id="@cdktf/tf-module-stack.TFModuleStack.dependsOn.parameter.stack"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `EnsureBackendExists` <a name="EnsureBackendExists" id="@cdktf/tf-module-stack.TFModuleStack.ensureBackendExists"></a>

```go
func EnsureBackendExists() TerraformBackend
```

##### `GetLogicalId` <a name="GetLogicalId" id="@cdktf/tf-module-stack.TFModuleStack.getLogicalId"></a>

```go
func GetLogicalId(tfElement interface{}) *string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="@cdktf/tf-module-stack.TFModuleStack.getLogicalId.parameter.tfElement"></a>

- *Type:* interface{}

---

##### `PrepareStack` <a name="PrepareStack" id="@cdktf/tf-module-stack.TFModuleStack.prepareStack"></a>

```go
func PrepareStack()
```

##### `RegisterIncomingCrossStackReference` <a name="RegisterIncomingCrossStackReference" id="@cdktf/tf-module-stack.TFModuleStack.registerIncomingCrossStackReference"></a>

```go
func RegisterIncomingCrossStackReference(fromStack TerraformStack) TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="@cdktf/tf-module-stack.TFModuleStack.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `RegisterOutgoingCrossStackReference` <a name="RegisterOutgoingCrossStackReference" id="@cdktf/tf-module-stack.TFModuleStack.registerOutgoingCrossStackReference"></a>

```go
func RegisterOutgoingCrossStackReference(identifier *string) TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/tf-module-stack.TFModuleStack.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* *string

---

##### `RunAllValidations` <a name="RunAllValidations" id="@cdktf/tf-module-stack.TFModuleStack.runAllValidations"></a>

```go
func RunAllValidations()
```

Run all validations on the stack.

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/tf-module-stack.TFModuleStack.toTerraform"></a>

```go
func ToTerraform() interface{}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.isStack">IsStack</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.of">Of</a></code> | *No description.* |

---

##### ~~`IsConstruct`~~ <a name="IsConstruct" id="@cdktf/tf-module-stack.TFModuleStack.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-tf-module-stack-go/tfmodulestack"

tfmodulestack.TFModuleStack_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleStack.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsStack` <a name="IsStack" id="@cdktf/tf-module-stack.TFModuleStack.isStack"></a>

```go
import "github.com/cdktf/cdktf-tf-module-stack-go/tfmodulestack"

tfmodulestack.TFModuleStack_IsStack(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleStack.isStack.parameter.x"></a>

- *Type:* interface{}

---

##### `Of` <a name="Of" id="@cdktf/tf-module-stack.TFModuleStack.of"></a>

```go
import "github.com/cdktf/cdktf-tf-module-stack-go/tfmodulestack"

tfmodulestack.TFModuleStack_Of(construct IConstruct) TerraformStack
```

###### `construct`<sup>Required</sup> <a name="construct" id="@cdktf/tf-module-stack.TFModuleStack.of.parameter.construct"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.property.dependencies">Dependencies</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.property.synthesizer">Synthesizer</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IStackSynthesizer</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/tf-module-stack.TFModuleStack.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktf/tf-module-stack.TFModuleStack.property.dependencies"></a>

```go
func Dependencies() *[]TerraformStack
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Synthesizer`<sup>Required</sup> <a name="Synthesizer" id="@cdktf/tf-module-stack.TFModuleStack.property.synthesizer"></a>

```go
func Synthesizer() IStackSynthesizer
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IStackSynthesizer

---


### TFModuleVariable <a name="TFModuleVariable" id="@cdktf/tf-module-stack.TFModuleVariable"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-tf-module-stack-go/tfmodulestack"

tfmodulestack.NewTFModuleVariable(scope Construct, name *string, config TerraformVariableConfig) TFModuleVariable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.name">name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.config">config</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformVariableConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.name"></a>

- *Type:* *string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.config"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformVariableConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.toTerraform">ToTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.addValidation">AddValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.synthesizeAttributes">SynthesizeAttributes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/tf-module-stack.TFModuleVariable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/tf-module-stack.TFModuleVariable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/tf-module-stack.TFModuleVariable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/tf-module-stack.TFModuleVariable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/tf-module-stack.TFModuleVariable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/tf-module-stack.TFModuleVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/tf-module-stack.TFModuleVariable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/tf-module-stack.TFModuleVariable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/tf-module-stack.TFModuleVariable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

##### `AddValidation` <a name="AddValidation" id="@cdktf/tf-module-stack.TFModuleVariable.addValidation"></a>

```go
func AddValidation(validation TerraformVariableValidationConfig)
```

###### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/tf-module-stack.TFModuleVariable.addValidation.parameter.validation"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformVariableValidationConfig

---

##### `SynthesizeAttributes` <a name="SynthesizeAttributes" id="@cdktf/tf-module-stack.TFModuleVariable.synthesizeAttributes"></a>

```go
func SynthesizeAttributes() *map[string]interface{}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`IsConstruct`~~ <a name="IsConstruct" id="@cdktf/tf-module-stack.TFModuleVariable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-tf-module-stack-go/tfmodulestack"

tfmodulestack.TFModuleVariable_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleVariable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.booleanValue">BooleanValue</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.listValue">ListValue</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.numberValue">NumberValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.value">Value</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.default">Default</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.nullable">Nullable</a></code> | <code>*bool</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.sensitive">Sensitive</a></code> | <code>*bool</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.validation">Validation</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.TerraformVariableValidationConfig</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/tf-module-stack.TFModuleVariable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/tf-module-stack.TFModuleVariable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/tf-module-stack.TFModuleVariable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/tf-module-stack.TFModuleVariable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktf/tf-module-stack.TFModuleVariable.property.booleanValue"></a>

```go
func BooleanValue() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ListValue`<sup>Required</sup> <a name="ListValue" id="@cdktf/tf-module-stack.TFModuleVariable.property.listValue"></a>

```go
func ListValue() *[]*string
```

- *Type:* *[]*string

---

##### `NumberValue`<sup>Required</sup> <a name="NumberValue" id="@cdktf/tf-module-stack.TFModuleVariable.property.numberValue"></a>

```go
func NumberValue() *f64
```

- *Type:* *f64

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/tf-module-stack.TFModuleVariable.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/tf-module-stack.TFModuleVariable.property.value"></a>

```go
func Value() interface{}
```

- *Type:* interface{}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/tf-module-stack.TFModuleVariable.property.default"></a>

```go
func Default() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/tf-module-stack.TFModuleVariable.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktf/tf-module-stack.TFModuleVariable.property.nullable"></a>

```go
func Nullable() *bool
```

- *Type:* *bool

---

##### `Sensitive`<sup>Optional</sup> <a name="Sensitive" id="@cdktf/tf-module-stack.TFModuleVariable.property.sensitive"></a>

```go
func Sensitive() *bool
```

- *Type:* *bool

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/tf-module-stack.TFModuleVariable.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Validation`<sup>Optional</sup> <a name="Validation" id="@cdktf/tf-module-stack.TFModuleVariable.property.validation"></a>

```go
func Validation() *[]TerraformVariableValidationConfig
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.TerraformVariableValidationConfig

---





