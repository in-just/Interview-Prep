let arr = [3,7,4,6,5];
let arr1 = [3,5,-7, 8, 10];

// add even index arrays
// add odd index arrays
// compare to max
function maxSubsetSum(arr) {
    let maxSum = 0;
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (i % 2 === 0) {
            evenSum += arr[i];
            if (evenSum > maxSum) {
                maxSum = evenSum;
            }
        } else {
            oddSum += arr[i];
            if (oddSum > maxSum) {
                maxSum = oddSum;
            }
        }
    }
    return maxSum;
}

// maxSubsetSum(arr);
maxSubsetSum(arr);