import assert from "node:assert/strict";
import test from "node:test";

import { VirtualRuntimeHarness } from "./virtual-runtime.ts";

test("VirtualRuntimeHarness scheduleOnce runs at due time", async () => {
  const runtime = new VirtualRuntimeHarness(1_700_000_000_000);
  const observed: string[] = [];

  runtime.scheduler.scheduleOnce(10, () => {
    observed.push(`ran@${runtime.nowMs()}`);
  });

  await runtime.advanceByMs(9);
  assert.deepEqual(observed, []);

  await runtime.advanceByMs(1);
  assert.deepEqual(observed, ["ran@1700000000010"]);
});

test("VirtualRuntimeHarness scheduleRepeating can be cancelled", async () => {
  const runtime = new VirtualRuntimeHarness(1_700_000_000_000);
  let calls = 0;

  const task = runtime.scheduler.scheduleRepeating(5, () => {
    calls += 1;
  });

  await runtime.advanceByMs(5);
  await runtime.advanceByMs(5);
  assert.equal(calls, 2);

  task.cancel();

  await runtime.advanceByMs(50);
  assert.equal(calls, 2);
});
