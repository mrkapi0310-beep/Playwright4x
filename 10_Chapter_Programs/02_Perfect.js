let n = 6;
let sum = 0;
for (let i = 1; i < n; i++) {
    if (n % i == 0) {
        sum = sum + i;
    }

}
console.log(sum);
if (sum == n) {
    console.log("Perfect number");
} else {
    console.log("Not a perfect number");
}

