// if(true){
//     var a = 12;
// }

// console.log(a);

// let a
// console.log(a);
// a = 12;

// Var is functions scope means here there is only 1 instance of i.
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0.1);
// }


// let and const are block scope means in here for each i have seprated box with ther seprate timer.
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// Refrence error.
// console.log(a);
// let a = 10;

// cannot reasign the value for the const TypeError.
// const x = 10;
// x = 20;

// RefrenceError because we accesing the value of y outside there block scope.
// if(true){
//     const y = 30;
// }

// console.log(y);

// var example
function sum(){
    var a = 10;
    var b = 20;
    console.log(a+b);
}
sum();

//let example
function product(num){
    
    if(num % 2 === 0){
        let a = 3;
        console.log(num*a);
        return;
    }
        let a = 4;
        console.log(num*a);
}

product(5);

//const example
const pi = 3.14;
console.log(pi)