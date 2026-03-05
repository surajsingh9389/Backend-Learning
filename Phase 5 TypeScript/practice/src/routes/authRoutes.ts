import express from "express";
import { login, register } from "../controllers/authController.js";
import { validate } from "../middleware/validate.js";
import { registerSchema } from "../validators/register.validators.js";


const router = express.Router();

router.post("/login", login);
export default router;
router.post("/register", validate(registerSchema), register);