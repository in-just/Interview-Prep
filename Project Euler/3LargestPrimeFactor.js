let numm = 600851475143;
let newnumm = numm;
let largestFact = 0;

let counter = 2;

while(counter * counter <= newnumm) {
    if(newnumm % counter ===0) {
        newnumm = newnumm / counter;
        largestFact = counter;
    } else {
        counter++;
    }
}

if (newnumm > largestFact) {
    largestFact = newnumm;
}

console.log(largestFact);