// Basic Types

let age: number = 22;
let username: string = "suraj";
let isAdmin: boolean = false;

// Arrays 
let scores: number[] = [10, 20, 30];
let emails: string[] = ["a@gmail.com", "b@gmail.com"];

// Objects
let user: { email: string; password: string } = {
    email: "test@gmail.com",
    password: "123456"
};


// Functions

// Normal function
function multiply(a: number, b: number): number{
    return a * b;
}

// Arrow function
const divide = (a: number, b: number): number => {
    return a/b;
}

// void (no return)
function logMessage(msg: string): void{
    console.log(msg);
}





