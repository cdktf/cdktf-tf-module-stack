# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProviderRequirement <a name="ProviderRequirement" id="@cdktf/tf-module-stack.ProviderRequirement"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer"></a>

```python
import cdktf_tf_module_stack

cdktf_tf_module_stack.ProviderRequirement(
  scope: Construct,
  provider_name: str,
  provider_version_constraint: str = None,
  terraform_provider_source: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.providerVersionConstraint">provider_version_constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.providerName"></a>

- *Type:* str

---

##### `provider_version_constraint`<sup>Optional</sup> <a name="provider_version_constraint" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.providerVersionConstraint"></a>

- *Type:* str

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/tf-module-stack.ProviderRequirement.Initializer.parameter.terraformProviderSource"></a>

- *Type:* str

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |

---

##### `to_string` <a name="to_string" id="@cdktf/tf-module-stack.ProviderRequirement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/tf-module-stack.ProviderRequirement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/tf-module-stack.ProviderRequirement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/tf-module-stack.ProviderRequirement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/tf-module-stack.ProviderRequirement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/tf-module-stack.ProviderRequirement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/tf-module-stack.ProviderRequirement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/tf-module-stack.ProviderRequirement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/tf-module-stack.ProviderRequirement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |

---

##### ~~`is_construct`~~ <a name="is_construct" id="@cdktf/tf-module-stack.ProviderRequirement.isConstruct"></a>

```python
import cdktf_tf_module_stack

cdktf_tf_module_stack.ProviderRequirement.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.ProviderRequirement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.ProviderRequirement.property.alias">alias</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/tf-module-stack.ProviderRequirement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/tf-module-stack.ProviderRequirement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/tf-module-stack.ProviderRequirement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/tf-module-stack.ProviderRequirement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/tf-module-stack.ProviderRequirement.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/tf-module-stack.ProviderRequirement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/tf-module-stack.ProviderRequirement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/tf-module-stack.ProviderRequirement.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/tf-module-stack.ProviderRequirement.property.alias"></a>

```python
alias: str
```

- *Type:* str

---


### TFModuleApp <a name="TFModuleApp" id="@cdktf/tf-module-stack.TFModuleApp"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.TFModuleApp.Initializer"></a>

```python
import cdktf_tf_module_stack

cdktf_tf_module_stack.TFModuleApp(
  context: typing.Mapping[typing.Any] = None,
  outdir: str = None,
  skip_validation: bool = None,
  stack_traces: bool = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.context">context</a></code> | <code>typing.Mapping[typing.Any]</code> | Additional context values for the application. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.outdir">outdir</a></code> | <code>str</code> | The directory to output Terraform resources. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.skipValidation">skip_validation</a></code> | <code>bool</code> | Whether to skip the validation during synthesis of the app. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.stackTraces">stack_traces</a></code> | <code>bool</code> | *No description.* |

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.context"></a>

- *Type:* typing.Mapping[typing.Any]
- *Default:* no additional context

Additional context values for the application.

Context set by the CLI or the `context` key in `cdktf.json` has precedence.

Context can be read from any construct using `node.getContext(key)`.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.outdir"></a>

- *Type:* str
- *Default:* CDKTF_OUTDIR if defined, otherwise "cdktf.out"

The directory to output Terraform resources.

---

##### `skip_validation`<sup>Optional</sup> <a name="skip_validation" id="@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.skipValidation"></a>

- *Type:* bool
- *Default:* false

Whether to skip the validation during synthesis of the app.

---

##### `stack_traces`<sup>Optional</sup> <a name="stack_traces" id="@cdktf/tf-module-stack.TFModuleApp.Initializer.parameter.stackTraces"></a>

- *Type:* bool

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.crossStackReference">cross_stack_reference</a></code> | Creates a reference from one stack to another, invoked on prepareStack since it creates extra resources. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.synth">synth</a></code> | Synthesizes all resources to the output directory. |

---

##### `to_string` <a name="to_string" id="@cdktf/tf-module-stack.TFModuleApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `cross_stack_reference` <a name="cross_stack_reference" id="@cdktf/tf-module-stack.TFModuleApp.crossStackReference"></a>

```python
def cross_stack_reference(
  from_stack: TerraformStack,
  to_stack: TerraformStack,
  identifier: str
) -> str
```

Creates a reference from one stack to another, invoked on prepareStack since it creates extra resources.

###### `from_stack`<sup>Required</sup> <a name="from_stack" id="@cdktf/tf-module-stack.TFModuleApp.crossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

###### `to_stack`<sup>Required</sup> <a name="to_stack" id="@cdktf/tf-module-stack.TFModuleApp.crossStackReference.parameter.toStack"></a>

- *Type:* cdktf.TerraformStack

---

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/tf-module-stack.TFModuleApp.crossStackReference.parameter.identifier"></a>

- *Type:* str

---

##### `synth` <a name="synth" id="@cdktf/tf-module-stack.TFModuleApp.synth"></a>

```python
def synth() -> None
```

Synthesizes all resources to the output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.isApp">is_app</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.of">of</a></code> | *No description.* |

---

##### ~~`is_construct`~~ <a name="is_construct" id="@cdktf/tf-module-stack.TFModuleApp.isConstruct"></a>

```python
import cdktf_tf_module_stack

cdktf_tf_module_stack.TFModuleApp.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_app` <a name="is_app" id="@cdktf/tf-module-stack.TFModuleApp.isApp"></a>

```python
import cdktf_tf_module_stack

cdktf_tf_module_stack.TFModuleApp.is_app(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleApp.isApp.parameter.x"></a>

- *Type:* typing.Any

---

##### `of` <a name="of" id="@cdktf/tf-module-stack.TFModuleApp.of"></a>

```python
import cdktf_tf_module_stack

cdktf_tf_module_stack.TFModuleApp.of(
  construct: IConstruct
)
```

###### `construct`<sup>Required</sup> <a name="construct" id="@cdktf/tf-module-stack.TFModuleApp.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.manifest">manifest</a></code> | <code>cdktf.Manifest</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.outdir">outdir</a></code> | <code>str</code> | The output directory into which resources will be synthesized. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.skipValidation">skip_validation</a></code> | <code>bool</code> | Whether to skip the validation during synthesis of the app. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleApp.property.targetStackId">target_stack_id</a></code> | <code>str</code> | The stack which will be synthesized. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/tf-module-stack.TFModuleApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/tf-module-stack.TFModuleApp.property.manifest"></a>

```python
manifest: Manifest
```

- *Type:* cdktf.Manifest

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@cdktf/tf-module-stack.TFModuleApp.property.outdir"></a>

```python
outdir: str
```

- *Type:* str

The output directory into which resources will be synthesized.

---

##### `skip_validation`<sup>Optional</sup> <a name="skip_validation" id="@cdktf/tf-module-stack.TFModuleApp.property.skipValidation"></a>

```python
skip_validation: bool
```

- *Type:* bool

Whether to skip the validation during synthesis of the app.

---

##### `target_stack_id`<sup>Optional</sup> <a name="target_stack_id" id="@cdktf/tf-module-stack.TFModuleApp.property.targetStackId"></a>

```python
target_stack_id: str
```

- *Type:* str

The stack which will be synthesized.

If not set, all stacks will be synthesized.

---


### TFModuleOutput <a name="TFModuleOutput" id="@cdktf/tf-module-stack.TFModuleOutput"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer"></a>

```python
import cdktf_tf_module_stack

cdktf_tf_module_stack.TFModuleOutput(
  scope: Construct,
  name: str,
  value: typing.Any,
  depends_on: typing.List[ITerraformDependable] = None,
  description: str = None,
  sensitive: bool = None,
  static_id: bool = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.value">value</a></code> | <code>typing.Any</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.sensitive">sensitive</a></code> | <code>bool</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.staticId">static_id</a></code> | <code>bool</code> | If set to true the synthesized Terraform Output will be named after the `id` passed to the constructor instead of the default (TerraformOutput.friendlyUniqueId). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.name"></a>

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.value"></a>

- *Type:* typing.Any

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.description"></a>

- *Type:* str

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.sensitive"></a>

- *Type:* bool

---

##### `static_id`<sup>Optional</sup> <a name="static_id" id="@cdktf/tf-module-stack.TFModuleOutput.Initializer.parameter.staticId"></a>

- *Type:* bool
- *Default:* false

If set to true the synthesized Terraform Output will be named after the `id` passed to the constructor instead of the default (TerraformOutput.friendlyUniqueId).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.toTerraform">to_terraform</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/tf-module-stack.TFModuleOutput.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/tf-module-stack.TFModuleOutput.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/tf-module-stack.TFModuleOutput.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/tf-module-stack.TFModuleOutput.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/tf-module-stack.TFModuleOutput.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/tf-module-stack.TFModuleOutput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/tf-module-stack.TFModuleOutput.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/tf-module-stack.TFModuleOutput.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/tf-module-stack.TFModuleOutput.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.isTerrafromOutput">is_terrafrom_output</a></code> | *No description.* |

---

##### ~~`is_construct`~~ <a name="is_construct" id="@cdktf/tf-module-stack.TFModuleOutput.isConstruct"></a>

```python
import cdktf_tf_module_stack

cdktf_tf_module_stack.TFModuleOutput.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleOutput.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terrafrom_output` <a name="is_terrafrom_output" id="@cdktf/tf-module-stack.TFModuleOutput.isTerrafromOutput"></a>

```python
import cdktf_tf_module_stack

cdktf_tf_module_stack.TFModuleOutput.is_terrafrom_output(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleOutput.isTerrafromOutput.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.staticId">static_id</a></code> | <code>bool</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.value">value</a></code> | <code>typing.Any</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleOutput.property.sensitive">sensitive</a></code> | <code>bool</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/tf-module-stack.TFModuleOutput.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/tf-module-stack.TFModuleOutput.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/tf-module-stack.TFModuleOutput.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/tf-module-stack.TFModuleOutput.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `static_id`<sup>Required</sup> <a name="static_id" id="@cdktf/tf-module-stack.TFModuleOutput.property.staticId"></a>

```python
static_id: bool
```

- *Type:* bool

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/tf-module-stack.TFModuleOutput.property.value"></a>

```python
value: typing.Any
```

- *Type:* typing.Any

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/tf-module-stack.TFModuleOutput.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/tf-module-stack.TFModuleOutput.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="@cdktf/tf-module-stack.TFModuleOutput.property.sensitive"></a>

```python
sensitive: bool
```

- *Type:* bool

---


### TFModuleStack <a name="TFModuleStack" id="@cdktf/tf-module-stack.TFModuleStack"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.TFModuleStack.Initializer"></a>

```python
import cdktf_tf_module_stack

cdktf_tf_module_stack.TFModuleStack(
  scope: Construct,
  id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.Initializer.parameter.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/tf-module-stack.TFModuleStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/tf-module-stack.TFModuleStack.Initializer.parameter.id"></a>

- *Type:* str

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.addDependency">add_dependency</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.allProviders">all_providers</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.dependsOn">depends_on</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.ensureBackendExists">ensure_backend_exists</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.getLogicalId">get_logical_id</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.prepareStack">prepare_stack</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.registerIncomingCrossStackReference">register_incoming_cross_stack_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.registerOutgoingCrossStackReference">register_outgoing_cross_stack_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.runAllValidations">run_all_validations</a></code> | Run all validations on the stack. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.toTerraform">to_terraform</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/tf-module-stack.TFModuleStack.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_dependency` <a name="add_dependency" id="@cdktf/tf-module-stack.TFModuleStack.addDependency"></a>

```python
def add_dependency(
  dependency: TerraformStack
) -> None
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktf/tf-module-stack.TFModuleStack.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `add_override` <a name="add_override" id="@cdktf/tf-module-stack.TFModuleStack.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/tf-module-stack.TFModuleStack.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/tf-module-stack.TFModuleStack.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `all_providers` <a name="all_providers" id="@cdktf/tf-module-stack.TFModuleStack.allProviders"></a>

```python
def all_providers() -> typing.List[TerraformProvider]
```

##### `depends_on` <a name="depends_on" id="@cdktf/tf-module-stack.TFModuleStack.dependsOn"></a>

```python
def depends_on(
  stack: TerraformStack
) -> bool
```

###### `stack`<sup>Required</sup> <a name="stack" id="@cdktf/tf-module-stack.TFModuleStack.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensure_backend_exists` <a name="ensure_backend_exists" id="@cdktf/tf-module-stack.TFModuleStack.ensureBackendExists"></a>

```python
def ensure_backend_exists() -> TerraformBackend
```

##### `get_logical_id` <a name="get_logical_id" id="@cdktf/tf-module-stack.TFModuleStack.getLogicalId"></a>

```python
def get_logical_id(
  tf_element: typing.Union[TerraformElement, Node]
) -> str
```

###### `tf_element`<sup>Required</sup> <a name="tf_element" id="@cdktf/tf-module-stack.TFModuleStack.getLogicalId.parameter.tfElement"></a>

- *Type:* typing.Union[cdktf.TerraformElement, constructs.Node]

---

##### `prepare_stack` <a name="prepare_stack" id="@cdktf/tf-module-stack.TFModuleStack.prepareStack"></a>

```python
def prepare_stack() -> None
```

##### `register_incoming_cross_stack_reference` <a name="register_incoming_cross_stack_reference" id="@cdktf/tf-module-stack.TFModuleStack.registerIncomingCrossStackReference"></a>

```python
def register_incoming_cross_stack_reference(
  from_stack: TerraformStack
) -> TerraformRemoteState
```

###### `from_stack`<sup>Required</sup> <a name="from_stack" id="@cdktf/tf-module-stack.TFModuleStack.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `register_outgoing_cross_stack_reference` <a name="register_outgoing_cross_stack_reference" id="@cdktf/tf-module-stack.TFModuleStack.registerOutgoingCrossStackReference"></a>

```python
def register_outgoing_cross_stack_reference(
  identifier: str
) -> TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/tf-module-stack.TFModuleStack.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* str

---

##### `run_all_validations` <a name="run_all_validations" id="@cdktf/tf-module-stack.TFModuleStack.runAllValidations"></a>

```python
def run_all_validations() -> None
```

Run all validations on the stack.

##### `to_terraform` <a name="to_terraform" id="@cdktf/tf-module-stack.TFModuleStack.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.isStack">is_stack</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.of">of</a></code> | *No description.* |

---

##### ~~`is_construct`~~ <a name="is_construct" id="@cdktf/tf-module-stack.TFModuleStack.isConstruct"></a>

```python
import cdktf_tf_module_stack

cdktf_tf_module_stack.TFModuleStack.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleStack.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_stack` <a name="is_stack" id="@cdktf/tf-module-stack.TFModuleStack.isStack"></a>

```python
import cdktf_tf_module_stack

cdktf_tf_module_stack.TFModuleStack.is_stack(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleStack.isStack.parameter.x"></a>

- *Type:* typing.Any

---

##### `of` <a name="of" id="@cdktf/tf-module-stack.TFModuleStack.of"></a>

```python
import cdktf_tf_module_stack

cdktf_tf_module_stack.TFModuleStack.of(
  construct: IConstruct
)
```

###### `construct`<sup>Required</sup> <a name="construct" id="@cdktf/tf-module-stack.TFModuleStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.property.dependencies">dependencies</a></code> | <code>typing.List[cdktf.TerraformStack]</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleStack.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/tf-module-stack.TFModuleStack.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktf/tf-module-stack.TFModuleStack.property.dependencies"></a>

```python
dependencies: typing.List[TerraformStack]
```

- *Type:* typing.List[cdktf.TerraformStack]

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@cdktf/tf-module-stack.TFModuleStack.property.synthesizer"></a>

```python
synthesizer: IStackSynthesizer
```

- *Type:* cdktf.IStackSynthesizer

---


### TFModuleVariable <a name="TFModuleVariable" id="@cdktf/tf-module-stack.TFModuleVariable"></a>

#### Initializers <a name="Initializers" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer"></a>

```python
import cdktf_tf_module_stack

cdktf_tf_module_stack.TFModuleVariable(
  scope: Construct,
  name: str,
  default: typing.Any = None,
  description: str = None,
  nullable: bool = None,
  sensitive: bool = None,
  type: str = None,
  validation: typing.List[TerraformVariableValidationConfig] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.default">default</a></code> | <code>typing.Any</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.nullable">nullable</a></code> | <code>bool</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.sensitive">sensitive</a></code> | <code>bool</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.type">type</a></code> | <code>str</code> | The type argument in a variable block allows you to restrict the type of value that will be accepted as the value for a variable. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.validation">validation</a></code> | <code>typing.List[cdktf.TerraformVariableValidationConfig]</code> | Specify arbitrary custom validation rules for a particular variable using a validation block nested within the corresponding variable block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.name"></a>

- *Type:* str

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.default"></a>

- *Type:* typing.Any

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.description"></a>

- *Type:* str

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.nullable"></a>

- *Type:* bool

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.sensitive"></a>

- *Type:* bool

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.type"></a>

- *Type:* str

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

The keyword any may be used to indicate that any type is acceptable. For more information on the meaning and behavior of these different types, as well as detailed information about automatic conversion of complex types, see {@link https://www.terraform.io/docs/configuration/types.html|Type Constraints}.

If both the type and default arguments are specified, the given default value must be convertible to the specified type.

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/tf-module-stack.TFModuleVariable.Initializer.parameter.validation"></a>

- *Type:* typing.List[cdktf.TerraformVariableValidationConfig]

Specify arbitrary custom validation rules for a particular variable using a validation block nested within the corresponding variable block.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.toTerraform">to_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.addValidation">add_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.synthesizeAttributes">synthesize_attributes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/tf-module-stack.TFModuleVariable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/tf-module-stack.TFModuleVariable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/tf-module-stack.TFModuleVariable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/tf-module-stack.TFModuleVariable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/tf-module-stack.TFModuleVariable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/tf-module-stack.TFModuleVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/tf-module-stack.TFModuleVariable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/tf-module-stack.TFModuleVariable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/tf-module-stack.TFModuleVariable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

##### `add_validation` <a name="add_validation" id="@cdktf/tf-module-stack.TFModuleVariable.addValidation"></a>

```python
def add_validation(
  condition: typing.Any,
  error_message: str
) -> None
```

###### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/tf-module-stack.TFModuleVariable.addValidation.parameter.condition"></a>

- *Type:* typing.Any

---

###### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/tf-module-stack.TFModuleVariable.addValidation.parameter.errorMessage"></a>

- *Type:* str

---

##### `synthesize_attributes` <a name="synthesize_attributes" id="@cdktf/tf-module-stack.TFModuleVariable.synthesizeAttributes"></a>

```python
def synthesize_attributes() -> typing.Mapping[typing.Any]
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |

---

##### ~~`is_construct`~~ <a name="is_construct" id="@cdktf/tf-module-stack.TFModuleVariable.isConstruct"></a>

```python
import cdktf_tf_module_stack

cdktf_tf_module_stack.TFModuleVariable.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/tf-module-stack.TFModuleVariable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.booleanValue">boolean_value</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.listValue">list_value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.value">value</a></code> | <code>typing.Any</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.default">default</a></code> | <code>typing.Any</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.nullable">nullable</a></code> | <code>bool</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.sensitive">sensitive</a></code> | <code>bool</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/tf-module-stack.TFModuleVariable.property.validation">validation</a></code> | <code>typing.List[cdktf.TerraformVariableValidationConfig]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/tf-module-stack.TFModuleVariable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/tf-module-stack.TFModuleVariable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/tf-module-stack.TFModuleVariable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/tf-module-stack.TFModuleVariable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `boolean_value`<sup>Required</sup> <a name="boolean_value" id="@cdktf/tf-module-stack.TFModuleVariable.property.booleanValue"></a>

```python
boolean_value: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `list_value`<sup>Required</sup> <a name="list_value" id="@cdktf/tf-module-stack.TFModuleVariable.property.listValue"></a>

```python
list_value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `number_value`<sup>Required</sup> <a name="number_value" id="@cdktf/tf-module-stack.TFModuleVariable.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/tf-module-stack.TFModuleVariable.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/tf-module-stack.TFModuleVariable.property.value"></a>

```python
value: typing.Any
```

- *Type:* typing.Any

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/tf-module-stack.TFModuleVariable.property.default"></a>

```python
default: typing.Any
```

- *Type:* typing.Any

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/tf-module-stack.TFModuleVariable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/tf-module-stack.TFModuleVariable.property.nullable"></a>

```python
nullable: bool
```

- *Type:* bool

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="@cdktf/tf-module-stack.TFModuleVariable.property.sensitive"></a>

```python
sensitive: bool
```

- *Type:* bool

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/tf-module-stack.TFModuleVariable.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/tf-module-stack.TFModuleVariable.property.validation"></a>

```python
validation: typing.List[TerraformVariableValidationConfig]
```

- *Type:* typing.List[cdktf.TerraformVariableValidationConfig]

---





