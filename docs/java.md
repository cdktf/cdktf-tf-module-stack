# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProviderRequirement <a name="ProviderRequirement" id="@cdktf/tf-module-stack.ProviderRequirement"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.ProviderRequirement;

new ProviderRequirement(Construct scope, java.lang.String providerName);,new ProviderRequirement(Construct scope, java.lang.String providerName, java.lang.String providerVersionConstraint);,new ProviderRequirement(Construct scope, java.lang.String providerName, java.lang.String providerVersionConstraint, java.lang.String terraformProviderSource);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.providerVersionConstraint">providerVersionConstraint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.providerName"></a>

- *Type:* java.lang.String

---

##### `providerVersionConstraint`<sup>Optional</sup> <a name="providerVersionConstraint" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.providerVersionConstraint"></a>

- *Type:* java.lang.String

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.terraformProviderSource"></a>

- *Type:* java.lang.String

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |

---

##### `toString` <a name="toString" id="@cdktf/tf-module-stack.ProviderRequirement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/tf-module-stack.ProviderRequirement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/tf-module-stack.ProviderRequirement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/tf-module-stack.ProviderRequirement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/tf-module-stack.ProviderRequirement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/tf-module-stack.ProviderRequirement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/tf-module-stack.ProviderRequirement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/tf-module-stack.ProviderRequirement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/tf-module-stack.ProviderRequirement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/tf-module-stack.ProviderRequirement.isConstruct"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.ProviderRequirement;

ProviderRequirement.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.ProviderRequirement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/tf-module-stack.ProviderRequirement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.ProviderRequirement;

ProviderRequirement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.ProviderRequirement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/tf-module-stack.ProviderRequirement.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.ProviderRequirement;

ProviderRequirement.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.ProviderRequirement.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/tf-module-stack.ProviderRequirement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/tf-module-stack.ProviderRequirement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/tf-module-stack.ProviderRequirement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/tf-module-stack.ProviderRequirement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/tf-module-stack.ProviderRequirement.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/tf-module-stack.ProviderRequirement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/tf-module-stack.ProviderRequirement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/tf-module-stack.ProviderRequirement.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/tf-module-stack.ProviderRequirement.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---


### TFModuleApp <a name="TFModuleApp" id="@cdktf/tf-module-stack.TFModuleApp"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.TFModuleApp.Initializer"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.TFModuleApp;

TFModuleApp.Builder.create()
//  .context(java.util.Map<java.lang.String, java.lang.Object>)
//  .outdir(java.lang.String)
//  .skipBackendValidation(java.lang.Boolean)
//  .skipValidation(java.lang.Boolean)
//  .stackTraces(java.lang.Boolean)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.context">context</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | Additional context values for the application. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.outdir">outdir</a></code> | <code>java.lang.String</code> | The directory to output Terraform resources. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.skipBackendValidation">skipBackendValidation</a></code> | <code>java.lang.Boolean</code> | Whether to skip backend validation during synthesis of the app. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.skipValidation">skipValidation</a></code> | <code>java.lang.Boolean</code> | Whether to skip all validations during synthesis of the app. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.stackTraces">stackTraces</a></code> | <code>java.lang.Boolean</code> | *No description.* |

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.context"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>
- *Default:* no additional context

Additional context values for the application.

Context set by the CLI or the `context` key in `cdktf.json` has precedence.

Context can be read from any construct using `node.getContext(key)`.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.outdir"></a>

- *Type:* java.lang.String
- *Default:* CDKTF_OUTDIR if defined, otherwise "cdktf.out"

The directory to output Terraform resources.

---

##### `skipBackendValidation`<sup>Optional</sup> <a name="skipBackendValidation" id="@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.skipBackendValidation"></a>

- *Type:* java.lang.Boolean
- *Default:* false

Whether to skip backend validation during synthesis of the app.

---

##### `skipValidation`<sup>Optional</sup> <a name="skipValidation" id="@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.skipValidation"></a>

- *Type:* java.lang.Boolean
- *Default:* false

Whether to skip all validations during synthesis of the app.

---

##### `stackTraces`<sup>Optional</sup> <a name="stackTraces" id="@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.stackTraces"></a>

- *Type:* java.lang.Boolean

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.crossStackReference">crossStackReference</a></code> | Creates a reference from one stack to another, invoked on prepareStack since it creates extra resources. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.synth">synth</a></code> | Synthesizes all resources to the output directory. |

---

##### `toString` <a name="toString" id="@cdktf/tf-module-stack.TFModuleApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `crossStackReference` <a name="crossStackReference" id="@cdktf/tf-module-stack.TFModuleApp.crossStackReference"></a>

```java
public java.lang.String crossStackReference(TerraformStack fromStack, TerraformStack toStack, java.lang.String identifier)
```

Creates a reference from one stack to another, invoked on prepareStack since it creates extra resources.

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="@cdktf/tf-module-stack.TFModuleApp.crossStackReference.parameter.fromStack"></a>

- *Type:* com.hashicorp.cdktf.TerraformStack

---

###### `toStack`<sup>Required</sup> <a name="toStack" id="@cdktf/tf-module-stack.TFModuleApp.crossStackReference.parameter.toStack"></a>

- *Type:* com.hashicorp.cdktf.TerraformStack

---

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/tf-module-stack.TFModuleApp.crossStackReference.parameter.identifier"></a>

- *Type:* java.lang.String

---

##### `synth` <a name="synth" id="@cdktf/tf-module-stack.TFModuleApp.synth"></a>

```java
public void synth()
```

Synthesizes all resources to the output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.isApp">isApp</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.of">of</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/tf-module-stack.TFModuleApp.isConstruct"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.TFModuleApp;

TFModuleApp.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleApp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isApp` <a name="isApp" id="@cdktf/tf-module-stack.TFModuleApp.isApp"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.TFModuleApp;

TFModuleApp.isApp(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleApp.isApp.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `of` <a name="of" id="@cdktf/tf-module-stack.TFModuleApp.of"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.TFModuleApp;

TFModuleApp.of(IConstruct construct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="@cdktf/tf-module-stack.TFModuleApp.of.parameter.construct"></a>

- *Type:* software.constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.manifest">manifest</a></code> | <code>com.hashicorp.cdktf.Manifest</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.outdir">outdir</a></code> | <code>java.lang.String</code> | The output directory into which resources will be synthesized. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.skipBackendValidation">skipBackendValidation</a></code> | <code>java.lang.Boolean</code> | Whether to skip backend validation during synthesis of the app. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.skipValidation">skipValidation</a></code> | <code>java.lang.Boolean</code> | Whether to skip all validations during synthesis of the app. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.targetStackId">targetStackId</a></code> | <code>java.lang.String</code> | The stack which will be synthesized. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/tf-module-stack.TFModuleApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/tf-module-stack.TFModuleApp.property.manifest"></a>

```java
public Manifest getManifest();
```

- *Type:* com.hashicorp.cdktf.Manifest

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@cdktf/tf-module-stack.TFModuleApp.property.outdir"></a>

```java
public java.lang.String getOutdir();
```

- *Type:* java.lang.String

The output directory into which resources will be synthesized.

---

##### `skipBackendValidation`<sup>Required</sup> <a name="skipBackendValidation" id="@cdktf/tf-module-stack.TFModuleApp.property.skipBackendValidation"></a>

```java
public java.lang.Boolean getSkipBackendValidation();
```

- *Type:* java.lang.Boolean

Whether to skip backend validation during synthesis of the app.

---

##### `skipValidation`<sup>Required</sup> <a name="skipValidation" id="@cdktf/tf-module-stack.TFModuleApp.property.skipValidation"></a>

```java
public java.lang.Boolean getSkipValidation();
```

- *Type:* java.lang.Boolean

Whether to skip all validations during synthesis of the app.

---

##### `targetStackId`<sup>Optional</sup> <a name="targetStackId" id="@cdktf/tf-module-stack.TFModuleApp.property.targetStackId"></a>

```java
public java.lang.String getTargetStackId();
```

- *Type:* java.lang.String

The stack which will be synthesized.

If not set, all stacks will be synthesized.

---


### TFModuleOutput <a name="TFModuleOutput" id="@cdktf/tf-module-stack.TFModuleOutput"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.TFModuleOutput;

TFModuleOutput.Builder.create(Construct scope, java.lang.String name)
    .value(java.lang.Object)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .description(java.lang.String)
//  .precondition(Precondition)
//  .sensitive(java.lang.Boolean)
//  .staticId(java.lang.Boolean)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.value">value</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.precondition">precondition</a></code> | <code>com.hashicorp.cdktf.Precondition</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.sensitive">sensitive</a></code> | <code>java.lang.Boolean</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.staticId">staticId</a></code> | <code>java.lang.Boolean</code> | If set to true the synthesized Terraform Output will be named after the `id` passed to the constructor instead of the default (TerraformOutput.friendlyUniqueId). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.name"></a>

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.description"></a>

- *Type:* java.lang.String

---

##### `precondition`<sup>Optional</sup> <a name="precondition" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.precondition"></a>

- *Type:* com.hashicorp.cdktf.Precondition

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.sensitive"></a>

- *Type:* java.lang.Boolean

---

##### `staticId`<sup>Optional</sup> <a name="staticId" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.staticId"></a>

- *Type:* java.lang.Boolean
- *Default:* false

If set to true the synthesized Terraform Output will be named after the `id` passed to the constructor instead of the default (TerraformOutput.friendlyUniqueId).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.toTerraform">toTerraform</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/tf-module-stack.TFModuleOutput.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/tf-module-stack.TFModuleOutput.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/tf-module-stack.TFModuleOutput.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/tf-module-stack.TFModuleOutput.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/tf-module-stack.TFModuleOutput.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/tf-module-stack.TFModuleOutput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/tf-module-stack.TFModuleOutput.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/tf-module-stack.TFModuleOutput.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/tf-module-stack.TFModuleOutput.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.isTerraformOutput">isTerraformOutput</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/tf-module-stack.TFModuleOutput.isConstruct"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.TFModuleOutput;

TFModuleOutput.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleOutput.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/tf-module-stack.TFModuleOutput.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.TFModuleOutput;

TFModuleOutput.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleOutput.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformOutput` <a name="isTerraformOutput" id="@cdktf/tf-module-stack.TFModuleOutput.isTerraformOutput"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.TFModuleOutput;

TFModuleOutput.isTerraformOutput(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleOutput.isTerraformOutput.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.staticId">staticId</a></code> | <code>java.lang.Boolean</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.value">value</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.precondition">precondition</a></code> | <code>com.hashicorp.cdktf.Precondition</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.sensitive">sensitive</a></code> | <code>java.lang.Boolean</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/tf-module-stack.TFModuleOutput.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/tf-module-stack.TFModuleOutput.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/tf-module-stack.TFModuleOutput.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/tf-module-stack.TFModuleOutput.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `staticId`<sup>Required</sup> <a name="staticId" id="@cdktf/tf-module-stack.TFModuleOutput.property.staticId"></a>

```java
public java.lang.Boolean getStaticId();
```

- *Type:* java.lang.Boolean

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/tf-module-stack.TFModuleOutput.property.value"></a>

```java
public java.lang.Object getValue();
```

- *Type:* java.lang.Object

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/tf-module-stack.TFModuleOutput.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/tf-module-stack.TFModuleOutput.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `precondition`<sup>Optional</sup> <a name="precondition" id="@cdktf/tf-module-stack.TFModuleOutput.property.precondition"></a>

```java
public Precondition getPrecondition();
```

- *Type:* com.hashicorp.cdktf.Precondition

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="@cdktf/tf-module-stack.TFModuleOutput.property.sensitive"></a>

```java
public java.lang.Boolean getSensitive();
```

- *Type:* java.lang.Boolean

---


### TFModuleStack <a name="TFModuleStack" id="@cdktf/tf-module-stack.TFModuleStack"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.TFModuleStack.Initializer"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.TFModuleStack;

new TFModuleStack(Construct scope, java.lang.String id);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/tf-module-stack.TFModuleStack.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/tf-module-stack.TFModuleStack.Initializer.parameter.id"></a>

- *Type:* java.lang.String

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.runAllValidations">runAllValidations</a></code> | Run all validations on the stack. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.toTerraform">toTerraform</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/tf-module-stack.TFModuleStack.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@cdktf/tf-module-stack.TFModuleStack.addDependency"></a>

```java
public void addDependency(TerraformStack dependency)
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktf/tf-module-stack.TFModuleStack.addDependency.parameter.dependency"></a>

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="@cdktf/tf-module-stack.TFModuleStack.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/tf-module-stack.TFModuleStack.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/tf-module-stack.TFModuleStack.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `allProviders` <a name="allProviders" id="@cdktf/tf-module-stack.TFModuleStack.allProviders"></a>

```java
public java.util.List<TerraformProvider> allProviders()
```

##### `dependsOn` <a name="dependsOn" id="@cdktf/tf-module-stack.TFModuleStack.dependsOn"></a>

```java
public java.lang.Boolean dependsOn(TerraformStack stack)
```

###### `stack`<sup>Required</sup> <a name="stack" id="@cdktf/tf-module-stack.TFModuleStack.dependsOn.parameter.stack"></a>

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="@cdktf/tf-module-stack.TFModuleStack.ensureBackendExists"></a>

```java
public TerraformBackend ensureBackendExists()
```

##### `getLogicalId` <a name="getLogicalId" id="@cdktf/tf-module-stack.TFModuleStack.getLogicalId"></a>

```java
public java.lang.String getLogicalId(Node OR TerraformElement tfElement)
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="@cdktf/tf-module-stack.TFModuleStack.getLogicalId.parameter.tfElement"></a>

- *Type:* software.constructs.Node OR com.hashicorp.cdktf.TerraformElement

---

##### `prepareStack` <a name="prepareStack" id="@cdktf/tf-module-stack.TFModuleStack.prepareStack"></a>

```java
public void prepareStack()
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="@cdktf/tf-module-stack.TFModuleStack.registerIncomingCrossStackReference"></a>

```java
public TerraformRemoteState registerIncomingCrossStackReference(TerraformStack fromStack)
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="@cdktf/tf-module-stack.TFModuleStack.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="@cdktf/tf-module-stack.TFModuleStack.registerOutgoingCrossStackReference"></a>

```java
public TerraformOutput registerOutgoingCrossStackReference(java.lang.String identifier)
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/tf-module-stack.TFModuleStack.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* java.lang.String

---

##### `runAllValidations` <a name="runAllValidations" id="@cdktf/tf-module-stack.TFModuleStack.runAllValidations"></a>

```java
public void runAllValidations()
```

Run all validations on the stack.

##### `toTerraform` <a name="toTerraform" id="@cdktf/tf-module-stack.TFModuleStack.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.isStack">isStack</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.of">of</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/tf-module-stack.TFModuleStack.isConstruct"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.TFModuleStack;

TFModuleStack.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleStack.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isStack` <a name="isStack" id="@cdktf/tf-module-stack.TFModuleStack.isStack"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.TFModuleStack;

TFModuleStack.isStack(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleStack.isStack.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `of` <a name="of" id="@cdktf/tf-module-stack.TFModuleStack.of"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.TFModuleStack;

TFModuleStack.of(IConstruct construct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="@cdktf/tf-module-stack.TFModuleStack.of.parameter.construct"></a>

- *Type:* software.constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.property.dependencies">dependencies</a></code> | <code>java.util.List<com.hashicorp.cdktf.TerraformStack></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.property.moveTargets">moveTargets</a></code> | <code>com.hashicorp.cdktf.TerraformResourceTargets</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.property.synthesizer">synthesizer</a></code> | <code>com.hashicorp.cdktf.IStackSynthesizer</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/tf-module-stack.TFModuleStack.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktf/tf-module-stack.TFModuleStack.property.dependencies"></a>

```java
public java.util.List<TerraformStack> getDependencies();
```

- *Type:* java.util.List<com.hashicorp.cdktf.TerraformStack>

---

##### `moveTargets`<sup>Required</sup> <a name="moveTargets" id="@cdktf/tf-module-stack.TFModuleStack.property.moveTargets"></a>

```java
public TerraformResourceTargets getMoveTargets();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceTargets

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@cdktf/tf-module-stack.TFModuleStack.property.synthesizer"></a>

```java
public IStackSynthesizer getSynthesizer();
```

- *Type:* com.hashicorp.cdktf.IStackSynthesizer

---


### TFModuleVariable <a name="TFModuleVariable" id="@cdktf/tf-module-stack.TFModuleVariable"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.TFModuleVariable;

TFModuleVariable.Builder.create(Construct scope, java.lang.String name)
//  .default(java.lang.Object)
//  .description(java.lang.String)
//  .nullable(java.lang.Boolean)
//  .sensitive(java.lang.Boolean)
//  .type(java.lang.String)
//  .validation(java.util.List<TerraformVariableValidationConfig>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.default">default</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.nullable">nullable</a></code> | <code>java.lang.Boolean</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.sensitive">sensitive</a></code> | <code>java.lang.Boolean</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type argument in a variable block allows you to restrict the type of value that will be accepted as the value for a variable. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.validation">validation</a></code> | <code>java.util.List<com.hashicorp.cdktf.TerraformVariableValidationConfig></code> | Specify arbitrary custom validation rules for a particular variable using a validation block nested within the corresponding variable block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.name"></a>

- *Type:* java.lang.String

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.default"></a>

- *Type:* java.lang.Object

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.description"></a>

- *Type:* java.lang.String

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.nullable"></a>

- *Type:* java.lang.Boolean

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.sensitive"></a>

- *Type:* java.lang.Boolean

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type argument in a variable block allows you to restrict the type of value that will be accepted as the value for a variable.

If no type constraint is set then a value of any type is accepted.

While type constraints are optional, we recommend specifying them; they serve as easy reminders for users of the module, and allow Terraform to return a helpful error message if the wrong type is used.

Type constraints are created from a mixture of type keywords and type constructors. The supported type keywords are:

- string
- number
- bool

The type constructors allow you to specify complex types such as collections:

- list(\<TYPE\>)
- set(\<TYPE\>)
- map(\<TYPE\>)
- object({\<ATTR NAME\> = \<TYPE\>, ... })
- tuple([\<TYPE\>, ...])

The keyword any may be used to indicate that any type is acceptable. For more information on the meaning and behavior of these different types, as well as detailed information about automatic conversion of complex types, refer to {@link https://developer.hashicorp.com/terraform/language/expressions/type-constraints Type Constraints}.

If both the type and default arguments are specified, the given default value must be convertible to the specified type.

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.validation"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.TerraformVariableValidationConfig>

Specify arbitrary custom validation rules for a particular variable using a validation block nested within the corresponding variable block.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.addValidation">addValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.synthesizeAttributes">synthesizeAttributes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/tf-module-stack.TFModuleVariable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/tf-module-stack.TFModuleVariable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/tf-module-stack.TFModuleVariable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/tf-module-stack.TFModuleVariable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/tf-module-stack.TFModuleVariable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/tf-module-stack.TFModuleVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/tf-module-stack.TFModuleVariable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/tf-module-stack.TFModuleVariable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/tf-module-stack.TFModuleVariable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

##### `addValidation` <a name="addValidation" id="@cdktf/tf-module-stack.TFModuleVariable.addValidation"></a>

```java
public void addValidation(TerraformVariableValidationConfig validation)
```

###### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/tf-module-stack.TFModuleVariable.addValidation.parameter.validation"></a>

- *Type:* com.hashicorp.cdktf.TerraformVariableValidationConfig

---

##### `synthesizeAttributes` <a name="synthesizeAttributes" id="@cdktf/tf-module-stack.TFModuleVariable.synthesizeAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> synthesizeAttributes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.isTerraformElement">isTerraformElement</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/tf-module-stack.TFModuleVariable.isConstruct"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.TFModuleVariable;

TFModuleVariable.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleVariable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/tf-module-stack.TFModuleVariable.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.tf_module_stack.TFModuleVariable;

TFModuleVariable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleVariable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.booleanValue">booleanValue</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.listValue">listValue</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.numberValue">numberValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.value">value</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.default">default</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.nullable">nullable</a></code> | <code>java.lang.Boolean</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.sensitive">sensitive</a></code> | <code>java.lang.Boolean</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.validation">validation</a></code> | <code>java.util.List<com.hashicorp.cdktf.TerraformVariableValidationConfig></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/tf-module-stack.TFModuleVariable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/tf-module-stack.TFModuleVariable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/tf-module-stack.TFModuleVariable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/tf-module-stack.TFModuleVariable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="@cdktf/tf-module-stack.TFModuleVariable.property.booleanValue"></a>

```java
public IResolvable getBooleanValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `listValue`<sup>Required</sup> <a name="listValue" id="@cdktf/tf-module-stack.TFModuleVariable.property.listValue"></a>

```java
public java.util.List<java.lang.String> getListValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="@cdktf/tf-module-stack.TFModuleVariable.property.numberValue"></a>

```java
public java.lang.Number getNumberValue();
```

- *Type:* java.lang.Number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/tf-module-stack.TFModuleVariable.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/tf-module-stack.TFModuleVariable.property.value"></a>

```java
public java.lang.Object getValue();
```

- *Type:* java.lang.Object

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/tf-module-stack.TFModuleVariable.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Object

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/tf-module-stack.TFModuleVariable.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/tf-module-stack.TFModuleVariable.property.nullable"></a>

```java
public java.lang.Boolean getNullable();
```

- *Type:* java.lang.Boolean

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="@cdktf/tf-module-stack.TFModuleVariable.property.sensitive"></a>

```java
public java.lang.Boolean getSensitive();
```

- *Type:* java.lang.Boolean

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/tf-module-stack.TFModuleVariable.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/tf-module-stack.TFModuleVariable.property.validation"></a>

```java
public java.util.List<TerraformVariableValidationConfig> getValidation();
```

- *Type:* java.util.List<com.hashicorp.cdktf.TerraformVariableValidationConfig>

---





