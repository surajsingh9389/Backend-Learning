import type { Request, Response } from "express";
import type { IdParam, LoginDTO } from "../dtos/dto.js";
import type { RegisterDTO } from "../validators/register.validators.js";
import { generateToken } from "../utils/generateToken.js";

import bcrypt from "bcrypt";
import { findUserByEmail } from "../services/authServices.js";

export async function login(req: Request<{}, {}, LoginDTO>, res: Response){
    const { email, password }= req.body;
    
    const user = await findUserByEmail(email);

    if(!user){
      return res.status(401).json({message: "Invalid credentials"});
    }

    const valid = await bcrypt.compare(password, user.password);

    if(!valid){
        return res.status(401).json({ message: "Invalid credentials "});
    }

    const token = generateToken(user.id);

    res.json({ token });
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