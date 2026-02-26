// Auth API Structure

// src/
//  ├── controllers/
//  │    └── authController.js
//  ├── services/
//  │    └── authService.js
//  ├── routes/
//  │    └── authRoutes.js
//  ├── middlewares/
//  │    ├── authMiddleware.js
//  │    ├── errorMiddleware.js
//  │    └── validateAuth.js
//  ├── config/
//  │    └── env.js
//  ├── index.js
//  └── users.json (temporary DB)

// RegAuthentication is:

// Register → Hash password → Store user
// Login → Verify password → Generate token
// Request → Verify token → Allow / deny