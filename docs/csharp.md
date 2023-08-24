# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProviderRequirement <a name="ProviderRequirement" id="@cdktf/tf-module-stack.ProviderRequirement"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.TfModuleStack;

new ProviderRequirement(Construct Scope, string ProviderName, string ProviderVersionConstraint = null, string TerraformProviderSource = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.providerVersionConstraint">ProviderVersionConstraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.providerName"></a>

- *Type:* string

---

##### `ProviderVersionConstraint`<sup>Optional</sup> <a name="ProviderVersionConstraint" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.providerVersionConstraint"></a>

- *Type:* string

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.terraformProviderSource"></a>

- *Type:* string

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/tf-module-stack.ProviderRequirement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/tf-module-stack.ProviderRequirement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/tf-module-stack.ProviderRequirement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/tf-module-stack.ProviderRequirement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/tf-module-stack.ProviderRequirement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/tf-module-stack.ProviderRequirement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/tf-module-stack.ProviderRequirement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/tf-module-stack.ProviderRequirement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### ~~`IsConstruct`~~ <a name="IsConstruct" id="@cdktf/tf-module-stack.ProviderRequirement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.TfModuleStack;

ProviderRequirement.IsConstruct(object X);
```

Checks if `x` is a construct.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/tf-module-stack.ProviderRequirement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/tf-module-stack.ProviderRequirement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.TfModuleStack;

ProviderRequirement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/tf-module-stack.ProviderRequirement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/tf-module-stack.ProviderRequirement.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.TfModuleStack;

ProviderRequirement.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/tf-module-stack.ProviderRequirement.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.alias">Alias</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/tf-module-stack.ProviderRequirement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/tf-module-stack.ProviderRequirement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/tf-module-stack.ProviderRequirement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/tf-module-stack.ProviderRequirement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/tf-module-stack.ProviderRequirement.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/tf-module-stack.ProviderRequirement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/tf-module-stack.ProviderRequirement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/tf-module-stack.ProviderRequirement.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/tf-module-stack.ProviderRequirement.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---


### TFModuleApp <a name="TFModuleApp" id="@cdktf/tf-module-stack.TFModuleApp"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.TFModuleApp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.TfModuleStack;

new TFModuleApp(AppConfig Options = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.options">Options</a></code> | <code>HashiCorp.Cdktf.AppConfig</code> | *No description.* |

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.options"></a>

- *Type:* HashiCorp.Cdktf.AppConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.crossStackReference">CrossStackReference</a></code> | Creates a reference from one stack to another, invoked on prepareStack since it creates extra resources. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.synth">Synth</a></code> | Synthesizes all resources to the output directory. |

---

##### `ToString` <a name="ToString" id="@cdktf/tf-module-stack.TFModuleApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `CrossStackReference` <a name="CrossStackReference" id="@cdktf/tf-module-stack.TFModuleApp.crossStackReference"></a>

```csharp
private string CrossStackReference(TerraformStack FromStack, TerraformStack ToStack, string Identifier)
```

Creates a reference from one stack to another, invoked on prepareStack since it creates extra resources.

###### `FromStack`<sup>Required</sup> <a name="FromStack" id="@cdktf/tf-module-stack.TFModuleApp.crossStackReference.parameter.fromStack"></a>

- *Type:* HashiCorp.Cdktf.TerraformStack

---

###### `ToStack`<sup>Required</sup> <a name="ToStack" id="@cdktf/tf-module-stack.TFModuleApp.crossStackReference.parameter.toStack"></a>

- *Type:* HashiCorp.Cdktf.TerraformStack

---

###### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/tf-module-stack.TFModuleApp.crossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `Synth` <a name="Synth" id="@cdktf/tf-module-stack.TFModuleApp.synth"></a>

```csharp
private void Synth()
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

```csharp
using HashiCorp.Cdktf.TfModuleStack;

TFModuleApp.IsConstruct(object X);
```

Checks if `x` is a construct.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/tf-module-stack.TFModuleApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsApp` <a name="IsApp" id="@cdktf/tf-module-stack.TFModuleApp.isApp"></a>

```csharp
using HashiCorp.Cdktf.TfModuleStack;

TFModuleApp.IsApp(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/tf-module-stack.TFModuleApp.isApp.parameter.x"></a>

- *Type:* object

---

##### `Of` <a name="Of" id="@cdktf/tf-module-stack.TFModuleApp.of"></a>

```csharp
using HashiCorp.Cdktf.TfModuleStack;

TFModuleApp.Of(IConstruct Construct);
```

###### `Construct`<sup>Required</sup> <a name="Construct" id="@cdktf/tf-module-stack.TFModuleApp.of.parameter.construct"></a>

- *Type:* Constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.manifest">Manifest</a></code> | <code>HashiCorp.Cdktf.Manifest</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.outdir">Outdir</a></code> | <code>string</code> | The output directory into which resources will be synthesized. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.skipBackendValidation">SkipBackendValidation</a></code> | <code>bool</code> | Whether to skip backend validation during synthesis of the app. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.skipValidation">SkipValidation</a></code> | <code>bool</code> | Whether to skip all validations during synthesis of the app. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.targetStackId">TargetStackId</a></code> | <code>string</code> | The stack which will be synthesized. |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/tf-module-stack.TFModuleApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/tf-module-stack.TFModuleApp.property.manifest"></a>

```csharp
public Manifest Manifest { get; }
```

- *Type:* HashiCorp.Cdktf.Manifest

---

##### `Outdir`<sup>Required</sup> <a name="Outdir" id="@cdktf/tf-module-stack.TFModuleApp.property.outdir"></a>

```csharp
public string Outdir { get; }
```

- *Type:* string

The output directory into which resources will be synthesized.

---

##### `SkipBackendValidation`<sup>Required</sup> <a name="SkipBackendValidation" id="@cdktf/tf-module-stack.TFModuleApp.property.skipBackendValidation"></a>

```csharp
public bool SkipBackendValidation { get; }
```

- *Type:* bool

Whether to skip backend validation during synthesis of the app.

---

##### `SkipValidation`<sup>Required</sup> <a name="SkipValidation" id="@cdktf/tf-module-stack.TFModuleApp.property.skipValidation"></a>

```csharp
public bool SkipValidation { get; }
```

- *Type:* bool

Whether to skip all validations during synthesis of the app.

---

##### `TargetStackId`<sup>Optional</sup> <a name="TargetStackId" id="@cdktf/tf-module-stack.TFModuleApp.property.targetStackId"></a>

```csharp
public string TargetStackId { get; }
```

- *Type:* string

The stack which will be synthesized.

If not set, all stacks will be synthesized.

---


### TFModuleOutput <a name="TFModuleOutput" id="@cdktf/tf-module-stack.TFModuleOutput"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.TfModuleStack;

new TFModuleOutput(Construct Scope, string Name, TerraformOutputConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.config">Config</a></code> | <code>HashiCorp.Cdktf.TerraformOutputConfig</code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.name"></a>

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.config"></a>

- *Type:* HashiCorp.Cdktf.TerraformOutputConfig

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/tf-module-stack.TFModuleOutput.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/tf-module-stack.TFModuleOutput.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/tf-module-stack.TFModuleOutput.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/tf-module-stack.TFModuleOutput.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/tf-module-stack.TFModuleOutput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/tf-module-stack.TFModuleOutput.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/tf-module-stack.TFModuleOutput.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/tf-module-stack.TFModuleOutput.toTerraform"></a>

```csharp
private object ToTerraform()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.isTerraformOutput">IsTerraformOutput</a></code> | *No description.* |

---

##### ~~`IsConstruct`~~ <a name="IsConstruct" id="@cdktf/tf-module-stack.TFModuleOutput.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.TfModuleStack;

TFModuleOutput.IsConstruct(object X);
```

Checks if `x` is a construct.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/tf-module-stack.TFModuleOutput.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/tf-module-stack.TFModuleOutput.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.TfModuleStack;

TFModuleOutput.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/tf-module-stack.TFModuleOutput.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformOutput` <a name="IsTerraformOutput" id="@cdktf/tf-module-stack.TFModuleOutput.isTerraformOutput"></a>

```csharp
using HashiCorp.Cdktf.TfModuleStack;

TFModuleOutput.IsTerraformOutput(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/tf-module-stack.TFModuleOutput.isTerraformOutput.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.staticId">StaticId</a></code> | <code>bool</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.value">Value</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.precondition">Precondition</a></code> | <code>HashiCorp.Cdktf.Precondition</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.sensitive">Sensitive</a></code> | <code>bool</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/tf-module-stack.TFModuleOutput.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/tf-module-stack.TFModuleOutput.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/tf-module-stack.TFModuleOutput.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/tf-module-stack.TFModuleOutput.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `StaticId`<sup>Required</sup> <a name="StaticId" id="@cdktf/tf-module-stack.TFModuleOutput.property.staticId"></a>

```csharp
public bool StaticId { get; }
```

- *Type:* bool

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/tf-module-stack.TFModuleOutput.property.value"></a>

```csharp
public object Value { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/tf-module-stack.TFModuleOutput.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/tf-module-stack.TFModuleOutput.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Precondition`<sup>Optional</sup> <a name="Precondition" id="@cdktf/tf-module-stack.TFModuleOutput.property.precondition"></a>

```csharp
public Precondition Precondition { get; }
```

- *Type:* HashiCorp.Cdktf.Precondition

---

##### `Sensitive`<sup>Optional</sup> <a name="Sensitive" id="@cdktf/tf-module-stack.TFModuleOutput.property.sensitive"></a>

```csharp
public bool Sensitive { get; }
```

- *Type:* bool

---


### TFModuleStack <a name="TFModuleStack" id="@cdktf/tf-module-stack.TFModuleStack"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.TFModuleStack.Initializer"></a>

```csharp
using HashiCorp.Cdktf.TfModuleStack;

new TFModuleStack(Construct Scope, string Id);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.Initializer.parameter.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/tf-module-stack.TFModuleStack.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/tf-module-stack.TFModuleStack.Initializer.parameter.id"></a>

- *Type:* string

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddDependency` <a name="AddDependency" id="@cdktf/tf-module-stack.TFModuleStack.addDependency"></a>

```csharp
private void AddDependency(TerraformStack Dependency)
```

###### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktf/tf-module-stack.TFModuleStack.addDependency.parameter.dependency"></a>

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `AddOverride` <a name="AddOverride" id="@cdktf/tf-module-stack.TFModuleStack.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/tf-module-stack.TFModuleStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/tf-module-stack.TFModuleStack.addOverride.parameter.value"></a>

- *Type:* object

---

##### `AllProviders` <a name="AllProviders" id="@cdktf/tf-module-stack.TFModuleStack.allProviders"></a>

```csharp
private TerraformProvider[] AllProviders()
```

##### `DependsOn` <a name="DependsOn" id="@cdktf/tf-module-stack.TFModuleStack.dependsOn"></a>

```csharp
private bool DependsOn(TerraformStack Stack)
```

###### `Stack`<sup>Required</sup> <a name="Stack" id="@cdktf/tf-module-stack.TFModuleStack.dependsOn.parameter.stack"></a>

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `EnsureBackendExists` <a name="EnsureBackendExists" id="@cdktf/tf-module-stack.TFModuleStack.ensureBackendExists"></a>

```csharp
private TerraformBackend EnsureBackendExists()
```

##### `GetLogicalId` <a name="GetLogicalId" id="@cdktf/tf-module-stack.TFModuleStack.getLogicalId"></a>

```csharp
private string GetLogicalId(object TfElement)
```

###### `TfElement`<sup>Required</sup> <a name="TfElement" id="@cdktf/tf-module-stack.TFModuleStack.getLogicalId.parameter.tfElement"></a>

- *Type:* object

---

##### `PrepareStack` <a name="PrepareStack" id="@cdktf/tf-module-stack.TFModuleStack.prepareStack"></a>

```csharp
private void PrepareStack()
```

##### `RegisterIncomingCrossStackReference` <a name="RegisterIncomingCrossStackReference" id="@cdktf/tf-module-stack.TFModuleStack.registerIncomingCrossStackReference"></a>

```csharp
private TerraformRemoteState RegisterIncomingCrossStackReference(TerraformStack FromStack)
```

###### `FromStack`<sup>Required</sup> <a name="FromStack" id="@cdktf/tf-module-stack.TFModuleStack.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `RegisterOutgoingCrossStackReference` <a name="RegisterOutgoingCrossStackReference" id="@cdktf/tf-module-stack.TFModuleStack.registerOutgoingCrossStackReference"></a>

```csharp
private TerraformOutput RegisterOutgoingCrossStackReference(string Identifier)
```

###### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/tf-module-stack.TFModuleStack.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `RunAllValidations` <a name="RunAllValidations" id="@cdktf/tf-module-stack.TFModuleStack.runAllValidations"></a>

```csharp
private void RunAllValidations()
```

Run all validations on the stack.

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/tf-module-stack.TFModuleStack.toTerraform"></a>

```csharp
private object ToTerraform()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.isStack">IsStack</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.of">Of</a></code> | *No description.* |

---

##### ~~`IsConstruct`~~ <a name="IsConstruct" id="@cdktf/tf-module-stack.TFModuleStack.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.TfModuleStack;

TFModuleStack.IsConstruct(object X);
```

Checks if `x` is a construct.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/tf-module-stack.TFModuleStack.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsStack` <a name="IsStack" id="@cdktf/tf-module-stack.TFModuleStack.isStack"></a>

```csharp
using HashiCorp.Cdktf.TfModuleStack;

TFModuleStack.IsStack(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/tf-module-stack.TFModuleStack.isStack.parameter.x"></a>

- *Type:* object

---

##### `Of` <a name="Of" id="@cdktf/tf-module-stack.TFModuleStack.of"></a>

```csharp
using HashiCorp.Cdktf.TfModuleStack;

TFModuleStack.Of(IConstruct Construct);
```

###### `Construct`<sup>Required</sup> <a name="Construct" id="@cdktf/tf-module-stack.TFModuleStack.of.parameter.construct"></a>

- *Type:* Constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.property.dependencies">Dependencies</a></code> | <code>HashiCorp.Cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.property.synthesizer">Synthesizer</a></code> | <code>HashiCorp.Cdktf.IStackSynthesizer</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/tf-module-stack.TFModuleStack.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktf/tf-module-stack.TFModuleStack.property.dependencies"></a>

```csharp
public TerraformStack[] Dependencies { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack[]

---

##### `Synthesizer`<sup>Required</sup> <a name="Synthesizer" id="@cdktf/tf-module-stack.TFModuleStack.property.synthesizer"></a>

```csharp
public IStackSynthesizer Synthesizer { get; }
```

- *Type:* HashiCorp.Cdktf.IStackSynthesizer

---


### TFModuleVariable <a name="TFModuleVariable" id="@cdktf/tf-module-stack.TFModuleVariable"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.TfModuleStack;

new TFModuleVariable(Construct Scope, string Name, TerraformVariableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.config">Config</a></code> | <code>HashiCorp.Cdktf.TerraformVariableConfig</code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.name"></a>

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.config"></a>

- *Type:* HashiCorp.Cdktf.TerraformVariableConfig

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/tf-module-stack.TFModuleVariable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/tf-module-stack.TFModuleVariable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/tf-module-stack.TFModuleVariable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/tf-module-stack.TFModuleVariable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/tf-module-stack.TFModuleVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/tf-module-stack.TFModuleVariable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/tf-module-stack.TFModuleVariable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/tf-module-stack.TFModuleVariable.toTerraform"></a>

```csharp
private object ToTerraform()
```

##### `AddValidation` <a name="AddValidation" id="@cdktf/tf-module-stack.TFModuleVariable.addValidation"></a>

```csharp
private void AddValidation(TerraformVariableValidationConfig Validation)
```

###### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktf/tf-module-stack.TFModuleVariable.addValidation.parameter.validation"></a>

- *Type:* HashiCorp.Cdktf.TerraformVariableValidationConfig

---

##### `SynthesizeAttributes` <a name="SynthesizeAttributes" id="@cdktf/tf-module-stack.TFModuleVariable.synthesizeAttributes"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> SynthesizeAttributes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |

---

##### ~~`IsConstruct`~~ <a name="IsConstruct" id="@cdktf/tf-module-stack.TFModuleVariable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.TfModuleStack;

TFModuleVariable.IsConstruct(object X);
```

Checks if `x` is a construct.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/tf-module-stack.TFModuleVariable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/tf-module-stack.TFModuleVariable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.TfModuleStack;

TFModuleVariable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/tf-module-stack.TFModuleVariable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.booleanValue">BooleanValue</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.listValue">ListValue</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.numberValue">NumberValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.value">Value</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.default">Default</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.nullable">Nullable</a></code> | <code>bool</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.sensitive">Sensitive</a></code> | <code>bool</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.validation">Validation</a></code> | <code>HashiCorp.Cdktf.TerraformVariableValidationConfig[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/tf-module-stack.TFModuleVariable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/tf-module-stack.TFModuleVariable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/tf-module-stack.TFModuleVariable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/tf-module-stack.TFModuleVariable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktf/tf-module-stack.TFModuleVariable.property.booleanValue"></a>

```csharp
public IResolvable BooleanValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ListValue`<sup>Required</sup> <a name="ListValue" id="@cdktf/tf-module-stack.TFModuleVariable.property.listValue"></a>

```csharp
public string[] ListValue { get; }
```

- *Type:* string[]

---

##### `NumberValue`<sup>Required</sup> <a name="NumberValue" id="@cdktf/tf-module-stack.TFModuleVariable.property.numberValue"></a>

```csharp
public double NumberValue { get; }
```

- *Type:* double

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/tf-module-stack.TFModuleVariable.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/tf-module-stack.TFModuleVariable.property.value"></a>

```csharp
public object Value { get; }
```

- *Type:* object

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/tf-module-stack.TFModuleVariable.property.default"></a>

```csharp
public object Default { get; }
```

- *Type:* object

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/tf-module-stack.TFModuleVariable.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktf/tf-module-stack.TFModuleVariable.property.nullable"></a>

```csharp
public bool Nullable { get; }
```

- *Type:* bool

---

##### `Sensitive`<sup>Optional</sup> <a name="Sensitive" id="@cdktf/tf-module-stack.TFModuleVariable.property.sensitive"></a>

```csharp
public bool Sensitive { get; }
```

- *Type:* bool

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/tf-module-stack.TFModuleVariable.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Validation`<sup>Optional</sup> <a name="Validation" id="@cdktf/tf-module-stack.TFModuleVariable.property.validation"></a>

```csharp
public TerraformVariableValidationConfig[] Validation { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformVariableValidationConfig[]

---





