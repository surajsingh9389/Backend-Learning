import jwt from "jsonwebtoken";

export function protect(req, res, next){
    const authHeader = req.headers.authorization;

    if(! authHeader || !authHeader.startsWith("Bearer ")){
        const err = new Error("Unauthorized");
        err.statusCode = 401;
        throw err;
    }

    const token = authHeader.split(" ")[1];

    try{
       const decoded = jwt.verify(token, process.env.JWT_SECRET);
       req.user = { id: decoded.userId };
       next();
    }catch{
         const err = new Error("Invalid token");
         err.statusCode = 401;
         throw err;
    }
}