import { loginUser, registerUser } from "../services/authService.js";

export async function register(req, res) {
    const { email, password} = req.body;
    const user = await registerUser({email: email, password: password});
    res.status(201).json(user);
}

export async function login(req, res) {
    const { email, password} = req.body;
    const token = await loginUser({email: email, password: password});
    res.json(token);
}