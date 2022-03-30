import {
  TerraformStack,
  TerraformVariable,
  TerraformVariableConfig,
} from "cdktf";
import { Construct } from "constructs";

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
}
