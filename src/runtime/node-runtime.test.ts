import assert from "node:assert/strict";
import test from "node:test";

import { NodeRuntimeScheduler, SystemRuntimeClock } from "./node-runtime.ts";

test("SystemRuntimeClock reads wall time", () => {
  const before = Date.now();
  const clock = new SystemRuntimeClock();
  const now = clock.nowMs();
  const after = Date.now();

  assert.ok(now >= before);
  assert.ok(now <= after);
});

test("NodeRuntimeScheduler scheduleOnce executes and cancel prevents execution", async () => {
  const scheduler = new NodeRuntimeScheduler();

  const observed: string[] = [];

  await new Promise<void>((resolve) => {
    scheduler.scheduleOnce(5, () => {
      observed.push("ran");
      resolve();
    });
  });

  assert.deepEqual(observed, ["ran"]);

  const cancelled = scheduler.scheduleOnce(10, () => {
    observed.push("should-not-run");
  });

  cancelled.cancel();

  await new Promise<void>((resolve) => {
    setTimeout(resolve, 20);
  });

  assert.deepEqual(observed, ["ran"]);
});
