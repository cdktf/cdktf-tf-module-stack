/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import {
  App,
  AppConfig,
  TerraformProvider,
  TerraformStack,
  TerraformVariable,
  TerraformVariableConfig,
  TerraformOutput,
  TerraformOutputConfig,
} from "cdktf";
import { Construct } from "constructs";

export class TFModuleApp extends App {
  constructor(options?: AppConfig) {
    // We don't want the provider validation to kick in
    super({ ...(options || {}), skipValidation: true });
  }
}

export class ProviderRequirement extends TerraformProvider {
  constructor(
    scope: Construct,
    providerName: string,
    providerVersionConstraint?: string,
    terraformProviderSource?: string
  ) {
    super(scope, providerName, {
      terraformResourceType: providerName,
      terraformGeneratorMetadata: {
        providerName,
        providerVersionConstraint,
      },
      terraformProviderSource,
    });
  }
}

export class TFModuleStack extends TerraformStack {
  public toTerraform(): any {
    const tf = super.toTerraform();
    delete tf.provider;
    delete tf.terraform.backend;
    return tf;
  }
}

export type TFModuleVariableConfig = TerraformVariableConfig;
export class TFModuleVariable extends TerraformVariable {
  constructor(scope: Construct, name: string, config: TFModuleVariableConfig) {
    super(scope, name, config);
    this.overrideLogicalId(name);
  }

  public toTerraform(): any {
    const toTerraform = super.toTerraform();
    const value = toTerraform.variable[this.friendlyUniqueId];
    return {
      variable: {
        // We need to put this into an extra array so that cdktf get works with the output properly
        [this.friendlyUniqueId]: [value],
      },
    };
  }
}

export type TFModuleOutputConfig = TerraformOutputConfig;
export class TFModuleOutput extends TerraformOutput {
  constructor(scope: Construct, name: string, config: TFModuleOutputConfig) {
    super(scope, name, config);
    this.overrideLogicalId(name);
  }

  public toTerraform(): any {
    const toTerraform = super.toTerraform();
    const value = toTerraform.output[this.friendlyUniqueId];
    return {
      output: {
        // We need to put this into an extra array so that cdktf get works with the output properly
        [this.friendlyUniqueId]: [value],
      },
    };
  }
}
