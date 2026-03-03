import type { Request, Response } from "express";


export function login(req: Request, res: Response): void {
    res.json({ message: "Login route "});
}