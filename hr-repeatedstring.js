
function repeatedString(s,n) {
    let fullString ='';
    // modu and end string is what is left to be added to the string. using modulus.
    let modu = n % s.length;
    let endString = s.slice(0, modu);

    for(let i = 0; i < Math.floor(n/s.length); i++) {
        fullString += s;
        console.log({fullString});
    }
    fullString += endString;
    return fullString.match(/a/g).length;
}

let s = "aba";
console.log(repeatedString(s, 10));