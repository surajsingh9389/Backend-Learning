// Route
//  ↓
// Controller
//  ↓
// Service
//  ↓
// Throw Error
//  ↓
// Global Error Middleware
//  ↓
// Response

// The Async Wrapper Solution
// The wrapper is a function that takes your async function and automatically adds a .catch(next) to it.