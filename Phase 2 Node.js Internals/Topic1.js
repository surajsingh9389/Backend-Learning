// Node.js Internals

// ┌───────────────┐
// │ Call Stack    │  ← runs JS code
// └───────────────┘
//         │
// ┌───────────────┐
// │ Event Loop    │  ← schedules async work
// └───────────────┘
//         │
// ┌───────────────┐
// │ Web APIs /    │
// │ Thread Pool   │  ← async work happens here
// └───────────────┘
