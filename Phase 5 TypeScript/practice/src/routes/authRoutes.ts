import express from "express";
import { login, register } from "../controllers/authController.js";
import { validate } from "../middleware/validate.js";
import { registerSchema } from "../validators/register.validators.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const router = express.Router();

router.get("/profile", authMiddleware, asyncHandler(getprofile));
router.post("/login", asyncHandler(login));
router.post("/register", validate(registerSchema), asyncHandler(register));

export default router;