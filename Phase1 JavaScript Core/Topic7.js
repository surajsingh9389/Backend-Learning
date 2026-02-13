// Asynchronous JavaScript (CORE BACKEND TOPIC)


// setTimeout(() => console.log("A"), 0);

// Promise.resolve().then(() => console.log("B"));

// console.log("C");

// Callback

// function fetchData(callback){
//     setTimeout(() =>{
//         callback("Data received");
//     },1000);
// }

// fetchData((data) => {
//     console.log(data);
// })


// fs.readFile("file.txt", "utf8", (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// Callback hell occurs when multiple asynchronous callbacks are nested inside each other, forming deeply indented code that is hard to read, debug, and maintain. It makes error handling complex and increases the chance of bugs in backend applications.

// Promises 

// const promise = new Promise((resolve, reject) => {
//     resolve("Success");
// })

//  const promise = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve({id: 1, name: "Suraj"});
//         })
//     })

// promise.then(user => {
//     console.log(user);
// })

// function readFile(cb){
//     cb(null, "data");
// }

// Q1. 30
// Q2. "B"
// Q3. const promise = new Promise((resolve, reject) => {
//     resolve(null, "data");
// })

// promise.then();


// Q1. Nothing because we not consolling nonthing

// Q2. fail, Done
// Q3. 15 
// Q4. 15
// Q5. Error: No Id

// Promise.resolve(10)
//   .then(x => {
//     return x + 5;
//   })
//   .then(x => console.log(x));

// p1. 15
// p2. answer = undefined correct - Promise.resolve(4).then(x => {
//     return x*2;
// }).then(x => console.log(x));
// p3. 8
// p4. 15
// p5. B C
// p6. 13
// p7. Fail
// p8. undefined
// p9. Recovered
// p10. Error: processing error



// function check(num){
//     return new Promise((resolve, reject) =>{
//         if(num > 5) resolve("ok")
//         else reject("Fail")
//     })
// }

// check(5).then(res => console.log(res)).catch(err => console.log(err));


// async function getData() {
//    return "data";    
// }

// getData().then(console.log);

// async function  handleUser() {
//   try{
//     const user = await fetchUser();
//     const orders = await fetchOrders(user.id);
//     const result = await processOrders(orders);
//     console.log(result);
//   }catch(err){
//     console.error(err);
//   }    
// }

// const [a, b] = await Promise.all([task1(), task2]);

// Q1. 5
// Q2. Handled
// Q3. A, B, C
// Q4. async function getUser(){
//     const user = await fetch("/user")
//     return user;
// }

// Q5. async function getData() {
//     try {
//     const data = await processData();
//     const res = await saveData(data);
//     console.log(res);
//     } catch (err) {
//         console.log(err);
//     }
// }

// async function demo() {
//   console.log("A");
//   await Promise.resolve("C").then(data => console.log(data));
//   console.log("B");
// }

// demo();


// Q1. promise
// Q2. no 
// Q3. it give us a promise which we can futher process using .then() or .catch()
// Q4. first return imidiatly and the second one wait to finish.
// Q5. no 
// Q6. using Promise.all([])
// Q7. it will throw a error which we can catch using .catch()
// Q8. 0, 1, 3, 2
// Q9. easy to understand and provide more readable code.
// Q10. if use multiple await promises the all task run sequentioly but we can use Promise.all([]) to run all task parallel.
