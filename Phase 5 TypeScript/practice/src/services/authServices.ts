import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";


export async function registerUser(name: string, email: string, password: string){
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    return user;
}

// export async function login(user: any, password: string){
//     const match = await bcrypt.compare(password, user.password);

//     if(!match){
//         throw new Error("Invalid credentials");
//     }


//     return user;
// }

export async function findUserByEmail(email: string){
    return await User.findOne({ email });
}