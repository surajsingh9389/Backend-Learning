// Node.js Event Loop Phases (Deep Dive)

// Node’s event loop runs in phases — always in this fixed order:

// ┌──────────────────────┐
// │ 1. Timers            │ ← setTimeout, setInterval
// ├──────────────────────┤
// │ 2. I/O callbacks     │ ← network, fs (some)
// ├──────────────────────┤
// │ 3. Idle / prepare    │ ← internal
// ├──────────────────────┤
// │ 4. Poll              │ ← wait for I/O
// ├──────────────────────┤
// │ 5. Check             │ ← setImmediate
// ├──────────────────────┤
// │ 6. Close callbacks   │ ← cleanup
//└──────────────────────┘


// setImmediate(() => console.log("A"));

// setTimeout(() => console.log("B"), 0);

// process.nextTick(() => console.log("C"));

// Promise.resolve().then(() => console.log("D"));

// console.log("E");


// E
// C
// D
// B
// A


// Synchronous
// → process.nextTick
// → Promise microtasks
// → Timers (setTimeout)
// → Poll I/O callbacks executed
// → Check (setImmediate)

