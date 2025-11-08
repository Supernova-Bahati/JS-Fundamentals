const n = parseInt(process.argv[2]);

function factorial(num) {
    if (isNaN(num) || num <= 1) return 1; // Base case: NaN or 0/1
    return num * factorial(num - 1);       // Recursive call
}

console.log(factorial(n));
