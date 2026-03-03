// function print(): void{
//    const message: string = "TypesScript backend runnig";
//    console.log(message);
// }

// print();

interface RegisterDTO{
    email: string;
    password: string;
}

const data: RegisterDTO = {
    email: "sk123.com",
    password: "12345"
}

function register(data: RegisterDTO): void{
    console.log(data.email);
}

register(data);



