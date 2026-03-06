import bcrypt from "bcrypt";


export async function registerUser(name: string, email: string, password: string){
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
        id: Date.now(),
        name,
        email,
        password: hashedPassword
    };
    return user;
}

export async function login(user: any, password: string){
    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw new Error("Invalid credentials");
    }


    return user;
}