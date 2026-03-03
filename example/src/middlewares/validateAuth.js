export function validateAuth(req, res, next) {
    const { email, password } = req.body;

    if(!email || !password){
        const err = new Error("Email and password required");
        err.status = 400;
        throw err;
    }

    next();
}