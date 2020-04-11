// 4 million 4000000


let fib1 = 1;
let fib2 = 1;
let result = 0;
let summed = 0;

while (result < 4000000) {
    if ((result % 2) === 0) {
        summed += result;
    }

    result = fib1 + fib2;
    fib2 = fib1;
    fib1 = result;
}

console.log(summed);