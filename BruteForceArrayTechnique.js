let arr = [1,2,3,4];
function bruteForce(arr) {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            console.log("arr[i]: " + arr[i] + "     arr[i+1] " + arr[j]);
        }
    }
}
bruteForce(arr);