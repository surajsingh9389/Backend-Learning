// Client ──(JWT in header)──> Server
//           |
//           v
//    Auth Middleware
//      ├─ No token → ❌ 401
//      ├─ Invalid token → ❌ 401
//      └─ Valid token → attach user → next()