
function counter(c) {
    let counter = 0;
    for(let i = 0; i < c.length - 1; i++) {
        if(c[i + 2] === 0) {
            counter++;
            i++;
        } 
        else {
            counter++;
        }
    }
    return counter;
}


let input = [0, 0, 1, 0, 0, 1, 0];
console.log(`input ${input}`);
console.log(`jumps ${counter(input)}`);