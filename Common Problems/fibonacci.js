function fibo(n) {

    let a = 1, b = 1;
    

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

console.log(fibo(77));
console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));