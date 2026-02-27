import express from "express"

import { login, register } from "../controllers/authController.js";
import { validateAuth } from "../middlewares/validateAuth.js";

const router = express.Router();

router.post("/register", validateAuth, register);
router.post("/login", validateAuth, login);

export default router;