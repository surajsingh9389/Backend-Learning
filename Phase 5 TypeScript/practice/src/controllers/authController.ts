import type { Request, Response } from "express";
import type { IdParam, LoginDTO } from "../dtos/dto.js";
import type { RegisterDTO } from "../validators/register.validators.js";

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


export function register(req: Request<{}, {}, RegisterDTO>, res: Response){
   const {name, email, password} = req.body;

   res.json({
    message: "User registerd",
    user: { name, email }
   })
}