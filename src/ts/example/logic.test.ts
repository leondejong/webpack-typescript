import test, { ExecutionContext } from "ava";
import { rectangle } from "./logic.js";

test("test rectangle", (t: ExecutionContext) => {
  const r = rectangle(16, 16, 32, 32);
  t.deepEqual(r, { x: 16, y: 16, w: 32, h: 32 });
});
