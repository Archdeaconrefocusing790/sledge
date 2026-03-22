import type {
  RuntimeClock,
  RuntimeScheduledTask,
  RuntimeScheduler,
} from "./contracts.ts";

/**
 * Production runtime clock implementation based on system wall time.
 */
export class SystemRuntimeClock implements RuntimeClock {
  nowMs(): number {
    return Date.now();
  }
}

class NodeScheduledTask implements RuntimeScheduledTask {
  readonly #cancel: () => void;

  constructor(cancel: () => void) {
    this.#cancel = cancel;
  }

  cancel(): void {
    this.#cancel();
  }
}

/**
 * Production runtime scheduler backed by Node.js timers.
 */
export class NodeRuntimeScheduler implements RuntimeScheduler {
  scheduleOnce(delayMs: number, task: () => void): RuntimeScheduledTask {
    const handle = setTimeout(task, delayMs);

    return new NodeScheduledTask(() => {
      clearTimeout(handle);
    });
  }

  scheduleRepeating(everyMs: number, task: () => void): RuntimeScheduledTask {
    const handle = setInterval(task, everyMs);

    return new NodeScheduledTask(() => {
      clearInterval(handle);
    });
  }
}
