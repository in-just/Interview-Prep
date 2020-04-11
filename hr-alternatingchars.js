let s1 = "AAAA"
let s2 = "BBBBB"
let s3 = "ABABABAB"
let s4 = "BABABA"
let s5 = "AAABBB"

function alternatingCharacters(s) {
    let offset0 = 0;
    let offset1 = 1;
    let deletes = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s.charAt(i + offset0) === s.charAt(i + offset1)) {
            offset0 -= 1;
            deletes += 1;
        } else {
            offset0 = 0;
        }
        console.log("s.charAt(i) " + s.charAt(i) + "     s.charAt(offset + 1) " + s.charAt(i + offset1));
    }
    return deletes;
}

console.log(alternatingCharacters(s1));
console.log(alternatingCharacters(s2));
console.log(alternatingCharacters(s3));
console.log(alternatingCharacters(s4));
console.log(alternatingCharacters(s5));
/*  3
    4
    0
    0
    4 */