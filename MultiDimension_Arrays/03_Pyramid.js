let n = 5;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        process.stdout.write(' ');
    }
    for (let k = 0; k <= 2 * i; k++) {
        process.stdout.write('*');
    }
    console.log(" ");
}