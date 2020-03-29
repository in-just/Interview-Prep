
function repeatedString(s,n) {
    // 1. Count # of occurrences in s
    // let occurrencesinS = s.match(/a/g).length;
    let occurrencesinS = 0;
    for (let position = 0; position < s.length; position++) {
        if (s.charAt(position) === "a") {
            occurrencesinS +=1;
        }
    }
    
    // 2. Divide groupings
    let groupingDivision = Math.floor(n / s.length);

    // 3. Multiply occurrences for occurrences in startingString
    let startCount = occurrencesinS * groupingDivision;

    // 4. For remainder, count substring 
    //modu and end string is what is left to be added to the string. using modulus.
    let endCount = 0;
    let modulus = n % s.length;
    if (modulus != 0) {
        let end = s.slice(0, modulus);
        // endCount = end.match(/a/g).length;
        for (let i = 0; i < modulus; i++) {
            if (end.charAt(i) === "a") {
                endCount +=1;
            }
        }
    }
    
    // 5. Add startingOccrrences + endStringOccurrences
    let result = startCount + endCount;

    return result;
}

console.log(repeatedString("aba", 10));
// console.log(repeatedString("a", 1000000000000));

// console.log(repeatedString("ceebbcb", 817723));