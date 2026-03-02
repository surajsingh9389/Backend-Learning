// any vs unknown

// any Turn off typeScript and access the property directly without type checking.
let data: any;
data = 5;
data = "hello";
data.doSomething(); // no error ❌ dangerous

// unknown safe and strict, for accessing first check type.

let data1: unknown;

if (typeof data1 === "string") {
  console.log(data1.toUpperCase());
}

