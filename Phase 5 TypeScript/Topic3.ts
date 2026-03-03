// Interfaces

interface RegisterDTO{
    email: string;
    password: string;
}

const data: RegisterDTO = {
    email: "sk123.com",
    password: "12345"
}

function register(data: RegisterDTO){
    console.log(data.email);
}