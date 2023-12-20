# cdktf-tf-module-stack

![Status: Tech Preview](https://img.shields.io/badge/status-experimental-EAAA32) [![Releases](https://img.shields.io/github/release/cdktf/cdktf-tf-module-stack.svg)](https://github.com/cdktf/cdktf-tf-module-stack/releases)
[![LICENSE](https://img.shields.io/github/license/cdktf/cdktf-tf-module-stack.svg)](https://github.com/cdktf/cdktf-tf-module-stack/blob/main/LICENSE)
[![build](https://github.com/cdktf/cdktf-tf-module-stack/actions/workflows/build.yml/badge.svg)](https://github.com/cdktf/cdktf-tf-module-stack/actions/workflows/build.yml)

A drop-in replacement for cdktf.TerraformStack that lets you define Terraform modules as constructs.

_cdktf-tf-module-stack_ is in technical preview, which means it's a community supported project. It still requires extensive testing and polishing to mature into a HashiCorp officially supported project. Please [file issues](https://github.com/cdktf/cdktf-tf-module-stack/issues/new/choose) generously and detail your experience while using the library. We welcome your feedback.

By using the software in this repository, you acknowledge that:

* _cdktf-tf-module-stack_ is still in development, may change, and has not been released as a commercial product by HashiCorp and is not currently supported in any way by HashiCorp.
* _cdktf-tf-module-stack_ is provided on an "as-is" basis, and may include bugs, errors, or other issues.
* _cdktf-tf-module-stack_ is NOT INTENDED FOR PRODUCTION USE, use of the Software may result in unexpected results, loss of data, or other unexpected results, and HashiCorp disclaims any and all liability resulting from use of _cdktf-tf-module-stack_.
* HashiCorp reserves all rights to make all decisions about the features, functionality and commercial release (or non-release) of _cdktf-tf-module-stack_, at any time and without any obligation or liability whatsoever.

## Compatibility

* `cdktf` >= 0.19.0
* `constructs` >= 10.0.25

## Available Packages

### NPM

The npm package is available at [https://www.npmjs.com/package/@cdktf/tf-module-stack](https://www.npmjs.com/package/@cdktf/tf-module-stack).

`npm install @cdktf/tf-module-stack`

NOTE: Originally, this package was named `cdktf-tf-module-stack`, and the legacy versions (<= 0.2.0) can be found on npm [here](https://www.npmjs.com/package/cdktf-tf-module-stack).

### PyPI

The PyPI package is available at [https://pypi.org/project/cdktf-tf-module-stack](https://pypi.org/project/cdktf-tf-module-stack).

`pipenv install cdktf-tf-module-stack`

### Nuget

The Nuget package is available at [https://www.nuget.org/packages/HashiCorp.Cdktf.TfModuleStack](https://www.nuget.org/packages/HashiCorp.Cdktf.TfModuleStack).

`dotnet add package HashiCorp.Cdktf.TfModuleStack`

### Maven

The Maven package is available at [https://mvnrepository.com/artifact/com.hashicorp/cdktf-tf-module-stack](https://mvnrepository.com/artifact/com.hashicorp/cdktf-tf-module-stack).

```
<dependency>
    <groupId>com.hashicorp</groupId>
    <artifactId>cdktf-tf-module-stack</artifactId>
    <version>[REPLACE WITH DESIRED VERSION]</version>
</dependency>
```

### Go

The go package is generated into the [`github.com/cdktf/cdktf-tf-module-stack-go`](https://github.com/cdktf/cdktf-tf-module-stack-go) package.

`go get github.com/cdktf/cdktf-tf-module-stack-go/tfmodulestack`

## Usage

### Typescript

```ts
import { App } from "cdktf";
import {
  TFModuleStack,
  TFModuleVariable,
  TFModuleOutput,
  ProviderRequirement,
} from "@cdktf/tf-module-stack";
import { Resource } from '@cdktf/provider-null/lib/resource';

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

### Python

```python
from constructs import Construct
from cdktf import App, TerraformStack
from imports.null.resource import Resource
from cdktf_tf_module_stack import TFModuleStack, TFModuleVariable, TFModuleOutput, ProviderRequirement


class MyAwesomeModule(TFModuleStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        ProviderRequirement(self, "null", provider_version_constraint="~> 2.0")

        TFModuleVariable(self, "my_var", type="string", description="A variable", default="default")

        resource = Resource(self, "resource")

        TFModuleOutput(self, "my_output", value=resource.id)


app = App()
MyAwesomeModule(app, "my-awesome-module")
app.synth()
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
