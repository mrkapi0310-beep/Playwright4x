let n = 8;
let rem = 0;
for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        rem = rem + 1
    }

}
console.log(rem);
if (rem == 2) {
    console.log("Primenumber");
} else {
    console.log("Not a prime number");
}

