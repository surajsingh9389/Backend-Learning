import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
import { AppError } from "../utils/AppError.js";


export async function registerUser(name: string, email: string, password: string){
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new AppError("User already exists", 400);
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    return user;
}

export async function login(user: any, password: string){
    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw new AppError("Invalid credentials", 400);
    }


    return user;
}

export async function findUserByEmail(email: string){
    return await User.findOne({ email });
}