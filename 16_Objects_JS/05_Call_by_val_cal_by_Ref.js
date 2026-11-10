// data type are value type
// objects are reference type

let a = { status: "pass" }   // a is reference variable which is pointing to the object in memory
console.log(a.status);
b = a; // copy the reference of a to b
b.status = "fail";
console.log(b.status);
console.log(a.status);


let num = 10;
num1 = num; // copy the value of num to num1
num1 = 20;
console.log(num1);
console.log(num);   
