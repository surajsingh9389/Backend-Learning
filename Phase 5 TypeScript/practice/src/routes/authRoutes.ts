import express from "express";
import { login, register } from "../controllers/authController.js";
import { validate } from "../middleware/validate.js";
import { registerSchema } from "../validators/register.validators.js";
import { authMiddleware } from "../middleware/authMiddleware.js";


const router = express.Router();

router.get("/profile", authMiddleware, getprofile);
router.post("/login", login);
router.post("/register", validate(registerSchema), register);

export default router;