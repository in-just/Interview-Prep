function Fibonacci(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    else {
        return Fibonacci(n-2) + Fibonacci(n-1);
    }
};

console.log(Fibonacci(1));
console.log(Fibonacci(2));
console.log(Fibonacci(3));
console.log(Fibonacci(15));