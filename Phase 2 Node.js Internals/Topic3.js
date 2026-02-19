// Why Node is Fast

// Incoming requests
//        ↓
// Event Loop
//        ↓
// Async I/O, fs → OS / Thread Pool
//        ↓
// Callbacks queued
//        ↓
// Event Loop resumes



// Event loop internals

// Microtask/macrotask priority  - first all microtask execute and then one macrotask

// Thread pool(part of Libuv)  - collection of thead worker each thread perform specific task thread pool is part of libuv which collection of library written in C.

// Node.js is fast because its main thread never waits for slow operations. CPU-lightcoordination happens on the main thread, while slow or heavy work is offloaded to the OS or libuv thread pool, and results are handled asynchronously via the event loop.

// When Node becomes slow - because of sync heavy task on single thead

// How to fix blocking code - use async api/ IO so the handle easily by promises, callbacks and async await
