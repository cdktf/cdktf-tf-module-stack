# cdktf-tf-module-stack

A drop-in replacement for cdktf.TerraformStack that let's you define Terraform modules as construct.

## Setup

### Node.js

Run `yarn add @cdktf/tf-module-stack` (or `npm install --save @cdktf/tf-module-stack`) to install the package.

### Python

Run `pip install cdktf-tf-module-stack` to install the package.

## Usage

```ts
import { App } from "cdktf";
import {
  TFModuleStack,
  TFModuleVariable,
  TFModuleOutput,
  ProviderRequirement,
} from "cdktf-tf-module-stack";
import { Resource } from "@cdktf/provider-null";

class MyAwesomeModule extends TFModuleStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new ProviderRequirement(this, "null", "~> 2.0");
    const resource = new Resource(this, "resource");

    new TFModuleVariable(this, "my_var", {
      type: "string",
      description: "A variable",
      default: "default",
    });

    new TFModuleOutput(this, "my_output", {
      value: resource.id,
    });
  }
}

const app = new App();
new MyAwesomeModule(app, "my-awesome-module");
app.synth();
```

This will synthesize a Terraform JSON file that looks like this:

```json
{
  "output": {
    "my_output": [
      {
        "value": "${null_resource.resource.id}"
      }
    ]
  },
  "resource": {
    "null_resource": {
      "resource": {}
    }
  },
  "terraform": {
    "required_providers": {
      "null": {
        "source": "null",
        "version": "~> 2.0"
      }
    },
    "variable": {
      "my_var": {
        "default": "default",
        "description": "A variable",
        "type": "string"
      }
    }
  }
}
```

Please note that the provider section is missing, so that the Terraform Workspace using the generated module can be used with any provider matching the version.
