// Data types (primitive vs reference)

// let a = 10;
// let b = a;

// b = 20;

// console.log(a);
// console.log(b);

// let arr  = [1, 2, 3, 5];
// let b = arr[0];
// b = 24;

// console.log(arr[0]);
// console.log(b);

// let arr = [1, 2, 3, 5];
// arr[0] = 24; // Directly update the array element
// console.log(arr[0]); // Output: 24
// console.log(arr);    // Output: [24, 2, 3, 5]


// let arr = [1, 2, 3, 5];
// let arr1 = arr;

// arr1.push(9);

// console.log(arr);
// console.log(arr1);

// function updateUser(user) {
//   user.isActive = true;
// }

// const user = { name: "Suraj" };
// updateUser(user);

// console.log(user.isActive); // true (unexpected for beginners)


// function updateUser(user) {
//   user = "Gatuam";
//   console.log(user);
// }

// let user = "Suraj";
// updateUser(user);

// console.log(user); // true (unexpected for beginners)


// shallow copy using spread opreator

// const user = {name: "Suraj", subUser: {
//     name: "sorya"
// }}
// const newUser = {...user}

// newUser.age = 12;
// newUser.subUser.name = "Gatuam"

// console.log(user);
// console.log(newUser);


//deep copy using JSON.stringify(). stringify() convert the js object into json String. original refrence completely broken.

// const user = {name: "Suraj", subUser: {
//     name: "sorya"
// }}
// const newUser = JSON.parse(JSON.stringify(user))

// newUser.age = 12;
// newUser.subUser.name = "Gatuam"

// console.log(user);
// console.log(newUser);

// To check original type of any value
// console.log(Object.prototype.toString.call(NaN));

// problem 1
// let x = 5;
// let y = x;

// y++;

// console.log(x);
// console.log(y);

//problem 2
// let obj1 = {count: 1};
// let obj2 = obj1;

// obj2.count++;
// console.log(obj1.count);

// problem 3

// const arr = [1, 2];
// const newArr = arr;
// newArr.push(5);

// console.log(arr)

// // 1. primitive coppy example

// let name = "Gatuam";
// let newName = "Suraj";

// name = newName;

// // 2. Refrence copy example

// let usera = {name: "suraj", email: "ex@1235.com"}
// let newUser = {...usera};


// // Fix this mutation bug:

// function addRole(user) {
//   const newUsera = JSON.parse(JSON.stringify(user));
//   newUsera.role = "admin";
//   return user;
// }



const data = {
  users: [
    { name: "A" },
    { name: "B" }
  ]
};

const copy = JSON.parse(JSON.stringify(data))
copy.users[0].name = "Z";

console.log(data.users[0].name);