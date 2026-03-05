import type { NextFunction, Request, Response } from "express";
import type { ZodSchema } from "zod";


export function validate(schema: ZodSchema){
    return (req: Request, res: Response, next: NextFunction) => {
        try {
           schema.parse(req.body);
           next();
        } catch (err: any) {
           res.status(400).json({
            message: "Validation Error",
            error: err.errors
           })
        }
    }
}