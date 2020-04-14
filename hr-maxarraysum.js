let arr = [3,7,4,6,5];
let arr1 = [3,5,-7, 8, 10];

function maxSubsetSum(arr) {
    let sum = new Array(arr.length + 1).fill(0);
    for (let i=1; i <= arr.length; ++i) {
        if (i == 1) {
            sum[i] = arr[i-1];
        } else {
            sum[i] = Math.max(sum[i-1], sum[i-2]+arr[i-1]);
        }
        sum[i] = Math.max(sum[i], 0);
    }
    return sum[arr.length];
}

console.log(maxSubsetSum(arr));