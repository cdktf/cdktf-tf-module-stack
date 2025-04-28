/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { NullProvider } from "@cdktf/provider-null/lib/provider";
import { Resource } from "@cdktf/provider-null/lib/resource";
import { RemoteBackend, Testing } from "cdktf";
import { Construct } from "constructs";
import {
  TFModuleStack,
  TFModuleVariable,
  ProviderRequirement,
  TFModuleOutput,
} from "../src";

test("synthesizes a specific provider", () => {
  const app = Testing.app();
  class MyStack extends TFModuleStack {
    constructor(scope: Construct, id: string) {
      super(scope, id);

      new NullProvider(this, "null");
      new Resource(this, "resource");
    }
  }
  const stack = new MyStack(app, "MyStack");
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      "resource": {
        "null_resource": {
          "resource": {
          }
        }
      },
      "terraform": {
        "required_providers": {
          "null": {
            "source": "null",
            "version": "3.2.4"
          }
        }
      }
    }"
  `);
});

test("synthesizes an abstract provider", () => {
  const app = Testing.app();
  class MyStack extends TFModuleStack {
    constructor(scope: Construct, id: string) {
      super(scope, id);

      new ProviderRequirement(this, "null", ">= 2.0.0");
      new Resource(this, "resource");
    }
  }
  const stack = new MyStack(app, "MyStack");
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      "resource": {
        "null_resource": {
          "resource": {
          }
        }
      },
      "terraform": {
        "required_providers": {
          "null": {
            "version": ">= 2.0.0"
          }
        }
      }
    }"
  `);
});

test("synthesizes a provider with a specific source", () => {
  const app = Testing.app();
  class MyStack extends TFModuleStack {
    constructor(scope: Construct, id: string) {
      super(scope, id);

      new ProviderRequirement(this, "null", ">= 2.0.0", "hashicorp/null");
      new Resource(this, "resource");
    }
  }
  const stack = new MyStack(app, "MyStack");
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      "resource": {
        "null_resource": {
          "resource": {
          }
        }
      },
      "terraform": {
        "required_providers": {
          "null": {
            "source": "hashicorp/null",
            "version": ">= 2.0.0"
          }
        }
      }
    }"
  `);
});

test("synthesizes no backend", () => {
  const app = Testing.app();
  class MyStack extends TFModuleStack {
    constructor(scope: Construct, id: string) {
      super(scope, id);

      new RemoteBackend(this, {
        organization: "test",
        workspaces: [{ name: "test" }],
      });
      new NullProvider(this, "null");
      new Resource(this, "resource");
    }
  }
  const stack = new MyStack(app, "MyStack");
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      "resource": {
        "null_resource": {
          "resource": {
          }
        }
      },
      "terraform": {
        "required_providers": {
          "null": {
            "source": "null",
            "version": "3.2.4"
          }
        }
      }
    }"
  `);
});

test("synthesizes variables and outputs", () => {
  const app = Testing.app();
  class MyStack extends TFModuleStack {
    constructor(scope: Construct, id: string) {
      super(scope, id);

      new TFModuleVariable(this, "my_variable", {
        type: "string",
      });
      new NullProvider(this, "null");
      const res = new Resource(this, "resource");

      new TFModuleOutput(this, "my_output", {
        value: res.id,
      });
    }
  }
  const stack = new MyStack(app, "MyStack");
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      "output": {
        "my_output": [
          {
            "value": "\${null_resource.resource.id}"
          }
        ]
      },
      "resource": {
        "null_resource": {
          "resource": {
          }
        }
      },
      "terraform": {
        "required_providers": {
          "null": {
            "source": "null",
            "version": "3.2.4"
          }
        }
      },
      "variable": {
        "my_variable": [
          {
            "type": "string"
          }
        ]
      }
    }"
  `);
});
