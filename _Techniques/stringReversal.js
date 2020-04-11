function stringReversal(s) {
    let ns = "";
    for (let i = 0; i < s.length; i++) {
        ns.charAt(i) = s.charAt(s.length - 1 -  i);
    }
    return ns;
}

let s = "1234567890";

// console.log(stringReversal(s));

s.charAt(0) = A;