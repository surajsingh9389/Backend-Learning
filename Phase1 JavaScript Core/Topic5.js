// Hoisting & closures

// closure - the function remember its outer space variable even the outer function executed called closure.

// function outer(){
//     let count = 0;
    
//     console.log(count);

//     function inner(){
//         count++;
//         console.log(count);
//     }

//     console.log(count);

//     return inner;
// }

// const fn = outer();
// // fn();
// // fn();
// // fn();

// console.log(fn);

// Authentication / Security

// function auth(role){
//     return function(reqUserRole){
//         return role === reqUserRole;
//     }
// }

// const isAdmin = auth("admin");
// isAdmin("admin");
// isAdmin("user");


// Data Privacy Using Closures
// function createUser(){
//     const password = "secret123";

//     return {
//         checkPassword(input){
//             return input === password;
//         }
//     }
// }

// for(var i = 0; i< 3; i++){
//     (function (j){
//         setTimeout(() => {
//             console.log(j);
//         }, 1000)
//     })(i);
// }


function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const c = counter();
c(); // 1