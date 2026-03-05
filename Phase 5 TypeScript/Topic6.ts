// Typing req.params, req.body

// Request<Params, ResBody, ReqBody, ReqQuery, locals>

// 1. export function register(req: Request<{}, {}, RegisterDTO>, res: Response): void {
//     const { name, email, password } = req.body;
// }

// 2. Services should only receive pure data and return results. They should not depend on HTTP objects (req, res). This keeps services reusable, testable, and independent from Express.

// 3. Route
//  ↓
// Validation Middleware
//  ↓
// Controller
//  ↓
// Service
//  ↓
// Database / Model

// Route → validation
// Controller → HTTP handling
// Service → business logic
// Model → database rules