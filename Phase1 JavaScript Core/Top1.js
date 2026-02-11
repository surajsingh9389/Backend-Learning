// JavaScript execution context & call stack

// console.log(a);
// var a = 10;

// function test(){
//     console.log(b);
//     var b = 10;
// }

// test();


function a(){
    b();
}

function b(){
    c();
}

function c(){
    console.log("done");
}

a();