import type { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

const SECRET = env.jwtSecret;

export function authMiddleware( req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({message: "No token"});
    }

    const token = authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json( {message: "Malformed token "});
    }

    try {
        const decoded = jwt.verify(token, SECRET);
        (req as any).user = decoded;
        next();
    } catch (err) {
         res.status(401).json({ message: "Invalid token" });
    }
}