// What Express Is & How a Request Flows

// Client
//   ↓
// Express App
//   ↓
// Middleware (optional)
//   ↓
// Route Handler (Controller)
//   ↓
// Response

// HTTP request → controller → service → response



// Golden Backend Rule (MEMORIZE)

// Every request MUST end with exactly one response.

// Examples of valid endings:

// res.send()
// res.json()
// res.end()
// res.status().send()
// next(err)