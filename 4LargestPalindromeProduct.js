function makePalindrome(firstHalf) {
    let reversed = firstHalf.toString().reverse().toArray();
    return firstHalf + reversed;
}

let firstHalf = 998;
console.log(makePalindrome(firstHalf));