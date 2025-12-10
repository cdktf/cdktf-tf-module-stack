# The Future of Terraform CDK

## Sunset Notice

Terraform CDK (CDKTF) will sunset and be archived on December 10, 2025. HashiCorp, an IBM Company, will no longer maintain or develop the project after that date. Unfortunately, Terraform CDK did not find product-market fit at scale. HashiCorp, an IBM Company, has chosen to focus its investments on Terraform core and its broader ecosystem.

As of December 10, 2025, Terraform CDK will be archived on GitHub, and the documentation will reflect its deprecated status. The archived code will remain available on GitHub, but it will be read-only. No further updates, fixes, or improvements (including compatibility updates) will be made.

You will be able to continue to use Terraform CDK at your own risk. Terraform CDK is licensed under the Mozilla Public License (MPL). HashiCorp, an IBM Company, does not apply any additional restrictions. We encourage community forks if there’s interest in continuing development independently.

## Migration to HCL

You can use the following command to generate Terraform-compatible .tf files directly from your Terraform CDK project:

`cdktf synth --hcl`

This will produce readable HCL configuration files, making it easier to migrate away from Terraform CDK. After running the command, you can use standard Terraform CLI commands (`terraform init`, `terraform plan`, `terraform apply`) to continue managing your infrastructure. Please note that while this helps bootstrap your configuration, you may still need to review and adjust the generated files for clarity, organization, or best practices.

### Note on AWS CDK

If your infrastructure is defined in Terraform CDK but also tightly integrated with AWS CDK, you may find it more consistent to migrate directly to the AWS CDK ecosystem. If you are not using AWS CDK, we highly recommend migrating to standard Terraform and HCL for long-term support and ecosystem alignment.

## FAQ

Q: Is CDKTF still being developed?

A: No. CDKTF will sunset and be archived on December 10, 2025. HashiCorp, an IBM Company, will no longer maintain or develop the project after that date.

Q: Why is CDKTF being sunset?

A: CDKTF did not find product-market fit at scale. We’ve chosen to focus our investments on Terraform core and its broader ecosystem.

Q: Will CDKTF be removed from GitHub?

A: CDKTF will be archived on GitHub, and documentation will reflect its deprecated status.

Q: Can I still use CDKTF after it's sunset?

A: Yes, the archived code will remain available on GitHub, but it will be read-only. No further updates, fixes, or improvements will be made.

Q: Will CDKTF continue to support new versions of Terraform or providers?

A: No. Compatibility updates will not be made after the EOL date.

Q: Can I fork CDKTF and maintain it myself?

A: Yes. CDKTF is open source, and we encourage community forks if there’s interest in continuing development independently.

Q: Can I keep using CDKTF?

A: You may continue to use it at your own risk. HashiCorp, an IBM Company, will no longer be maintaining it.

Q: Is there a migration tool?

A: You can use the following command to generate Terraform-compatible .tf files directly from your CDKTF project:

`cdktf synth --hcl`

This will produce readable HCL configuration files, making it easier to migrate away from CDKTF. After running the command, you can use standard Terraform CLI commands (terraform init, terraform plan, terraform apply) to continue managing your infrastructure. Please note that while this helps bootstrap your configuration, you may still need to review and adjust the generated files for clarity, organization, or best practices.

Q: What migration guidance can we provide to customers?

A: For users looking to migrate away from CDKTF:

If your infrastructure is defined in CDKTF but also tightly integrated with AWS CDK, you may find it more consistent to migrate directly to the AWS CDK ecosystem.

If you are not using AWS CDK, we highly recommend migrating to standard Terraform and HCL for long-term support and ecosystem alignment.

---

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

* `cdktf` >= 0.21.0
* `constructs` >= 10.4.2

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
