import jwt from "jsonwebtoken";

const SECRET = "supersecret";


export function generateToken(userId: number){
    return jwt.sign(
        {userId},
        SECRET,
        {expiresIn: "1h"}
    );
}