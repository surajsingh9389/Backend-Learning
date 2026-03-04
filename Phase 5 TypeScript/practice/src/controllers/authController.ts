import type { Request, Response } from "express";
import type { IdParam, LoginDTO } from "../dtos/dto.js";

export function login(req: Request<{}, {}, LoginDTO>, res: Response): void {
    const { email, password }= req.body;
    res.json({ email });
}

export function toggle(
    req: Request<IdParam>, 
    res: Response
):  void {
    const id = Number(req.params.id);
}