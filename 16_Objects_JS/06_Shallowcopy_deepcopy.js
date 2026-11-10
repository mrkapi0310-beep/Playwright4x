let user = { name: "ramesh", address: { city: "pune" } }
let copy = { ...user } //shallow copy
copy.name = "ramesh kumar";
copy.address.city = "mumbai";
console.log(copy.name);
console.log(copy.address.city);


let user1 = { name: "ram", address: { city: "hyd" } }
let copy1 = structuredClone(user1); // deep copy
copy1.name = "ram kumar";
copy1.address.city = "chennai";
console.log(copy1.name);
console.log(copy1.address.city);    