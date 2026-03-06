import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

const SECRET = env.jwtSecret;


export function generateToken(userId: number){
    return jwt.sign(
        {userId},
        SECRET,
        {expiresIn: "1h"}
    );
}