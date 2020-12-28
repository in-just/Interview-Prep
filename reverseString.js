function reverseString(s) {
    try {
        let rs = s.split("").reverse().join("");
        console.log(rs);
    } catch(e) {
        console.log("s.split is not a function");
    } finally {
        console.log(s);
    }
}

let s = "1234";
let s1 = Number(1234);
// console.log(reverseString(s));

function anotherReverse(s) {
    let rs = "";
    for (let i = 0; i < s.length; ++i) {
        rs += s[s.length - 1 - i];
    }
    return rs;
}

console.log(anotherReverse(s));

function reverseString1(s) {
    let rs ="";
    for (let i = 0; i < s.length; ++i) {
        rs += s[s.length - 1 - i];
    }
    return rs;
}

console.log(reverseString1(s));