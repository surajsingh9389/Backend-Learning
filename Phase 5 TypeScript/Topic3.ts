// Interfaces

interface RegisterDTO{
    email: string;
    password: string;
}


function register(data: RegisterDTO){
    console.log(data.email);
}