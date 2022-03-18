# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TFModuleStack <a name="TFModuleStack" id="cdktf-tf-module-stack.TFModuleStack"></a>

#### Initializers <a name="Initializers" id="cdktf-tf-module-stack.TFModuleStack.Initializer"></a>

```typescript
import { TFModuleStack } from 'cdktf-tf-module-stack'

new TFModuleStack(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-tf-module-stack.TFModuleStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-tf-module-stack.TFModuleStack.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.toTerraform">toTerraform</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktf-tf-module-stack.TFModuleStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdktf-tf-module-stack.TFModuleStack.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="cdktf-tf-module-stack.TFModuleStack.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="cdktf-tf-module-stack.TFModuleStack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-tf-module-stack.TFModuleStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-tf-module-stack.TFModuleStack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="cdktf-tf-module-stack.TFModuleStack.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `dependsOn` <a name="dependsOn" id="cdktf-tf-module-stack.TFModuleStack.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="cdktf-tf-module-stack.TFModuleStack.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="cdktf-tf-module-stack.TFModuleStack.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="cdktf-tf-module-stack.TFModuleStack.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: TerraformElement | Node): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="cdktf-tf-module-stack.TFModuleStack.getLogicalId.parameter.tfElement"></a>

- *Type:* cdktf.TerraformElement | constructs.Node

---

##### `prepareStack` <a name="prepareStack" id="cdktf-tf-module-stack.TFModuleStack.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="cdktf-tf-module-stack.TFModuleStack.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="cdktf-tf-module-stack.TFModuleStack.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="cdktf-tf-module-stack.TFModuleStack.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="cdktf-tf-module-stack.TFModuleStack.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `toTerraform` <a name="toTerraform" id="cdktf-tf-module-stack.TFModuleStack.toTerraform"></a>

```typescript
public toTerraform(): any
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.isStack">isStack</a></code> | *No description.* |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.of">of</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdktf-tf-module-stack.TFModuleStack.isConstruct"></a>

```typescript
import { TFModuleStack } from 'cdktf-tf-module-stack'

TFModuleStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-tf-module-stack.TFModuleStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="cdktf-tf-module-stack.TFModuleStack.isStack"></a>

```typescript
import { TFModuleStack } from 'cdktf-tf-module-stack'

TFModuleStack.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-tf-module-stack.TFModuleStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="cdktf-tf-module-stack.TFModuleStack.of"></a>

```typescript
import { TFModuleStack } from 'cdktf-tf-module-stack'

TFModuleStack.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="cdktf-tf-module-stack.TFModuleStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#cdktf-tf-module-stack.TFModuleStack.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-tf-module-stack.TFModuleStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdktf-tf-module-stack.TFModuleStack.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- *Type:* cdktf.TerraformStack[]

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="cdktf-tf-module-stack.TFModuleStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---





