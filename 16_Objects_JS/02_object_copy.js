let a ={status:"pass"}
console.log(a.status);
let b=a; // copy the reference of a to b    
//b.status="fail";
console.log(b.status);
console.log(a.status);