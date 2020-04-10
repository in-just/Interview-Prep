let a = "c d e"
let a1 = a.split(' ');
let b = "a b c"
let b1 = b.split(' ');
var NUMBER_LETTERS = 26;

function makeAnagram(a, b) {
    let aHash = hashTracker(a);
    let bHash = hashTracker(b);
    return getDelta(aHash, bHash);
}

console.log(makeAnagram(a1, b1));

// this creates a HashMap for the letters in the string
function hashTracker(s) {
    let LETTERS = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
    let letterHash = LETTERS.split(' ');
    let hashTracker = {};
    
    // // creates the whole alphabet hashmap
    for (let i = 0; i < 26; ++i) {
        hashTracker[letterHash[i]] = 0;
    }
    
    // counts the letters of the alphabet
    for (let i = 0; i < s.length; ++i) {
        if (!hashTracker[s[i]]) {
            hashTracker[s[i]] = 0;
        }
        hashTracker[s[i]] += 1;
    }
    return hashTracker;
}

function getDelta(a,b) {
    let LETTERS = "abcdefghijklmnopqrstuvwxyz";
    let delta = 0;
    for (let i = 0; i < LETTERS.length; ++i) {
        let difference = Math.abs(a[LETTERS.charAt(i)] - b[LETTERS.charAt(i)]);
        // console.log("a: " + a[LETTERS.charAt(i)] + "     b: " + b[LETTERS.charAt(i)] + "     i: " + i);
        delta += difference;
    }
    console.log({delta});
    return delta;
}