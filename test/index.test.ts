import { NullProvider, Resource } from "@cdktf/provider-null";
import { RemoteBackend, Testing } from "cdktf";
import { Construct } from "constructs";
import { TFModuleStack } from "../src";
import { TFModuleVariable } from "../src/index";

test("synthesizes a provider", () => {
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
      \\"resource\\": {
        \\"null_resource\\": {
          \\"resource\\": {
          }
        }
      },
      \\"terraform\\": {
        \\"required_providers\\": {
          \\"null\\": {
            \\"source\\": \\"null\\",
            \\"version\\": \\"~> 2.0\\"
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
      \\"resource\\": {
        \\"null_resource\\": {
          \\"resource\\": {
          }
        }
      },
      \\"terraform\\": {
        \\"required_providers\\": {
          \\"null\\": {
            \\"source\\": \\"null\\",
            \\"version\\": \\"~> 2.0\\"
          }
        }
      }
    }"
  `);
});

test("synthesizes variables", () => {
  const app = Testing.app();
  class MyStack extends TFModuleStack {
    constructor(scope: Construct, id: string) {
      super(scope, id);

      new TFModuleVariable(this, "my_variable", {
        type: "string",
      });
      new NullProvider(this, "null");
      new Resource(this, "resource");
    }
  }
  const stack = new MyStack(app, "MyStack");
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      \\"resource\\": {
        \\"null_resource\\": {
          \\"resource\\": {
          }
        }
      },
      \\"terraform\\": {
        \\"required_providers\\": {
          \\"null\\": {
            \\"source\\": \\"null\\",
            \\"version\\": \\"~> 2.0\\"
          }
        }
      },
      \\"variable\\": {
        \\"my_variable\\": {
          \\"type\\": \\"string\\"
        }
      }
    }"
  `);
});
