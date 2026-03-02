// Async Functions in TypeScript

async function getToken(): Promise<string> {
    return "jwt-token";
}

async function getuser(): Promise<{id: string; email: string}> {
   return { id: "123", email: "a@gmail.com "};    
}


// 1. number array
// 2. function login(email: string, password: string): boolean {
//   return true;
// }

// 3. interface Task{
//     title: string;
//     completed: boolean
// }
