let s0 = "hello";
let s1 = s0.split('');
let s02 = "world"
let s2 = s02.split('');

console.log(twoStrings(s1, s2));

function twoStrings(s1, s2) {
    let tracker = {};
    for (let i = 0; i < s1.length; ++i) {
        if(!tracker[s1[i]]) {
            tracker[s1[i]] = 0;
        }
        ++tracker[s1[i]];
    }
    for (let i = 0; i < s2.length; ++i) {
        if(tracker[s2[i]]) {
            return "YES";
        } 
    }
    return "NO";
}