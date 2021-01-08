let arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
// expected 1
let arr2= [1, -3, 71, 68, 17];
// expected 3

function minimumAbsoluteDifference(arr) {
    let minDiff = Number.MAX_VALUE;
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            sum = Math.abs(arr[i] - arr[j]);
            console.log(`arr[i] ${arr[i]} arr[j] ${arr[j]} sum ${sum}`);
            if (sum < minDiff) {
                minDiff = sum;
            }
            if (sum === 0) {
                return 0;
            }
        }
    }
    return minDiff;
}

function minimumAbsoluteDifferenceWithSort(arr) {
    arr.sort(function (a,b) {
        return a - b;
    });
    let min = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum = Math.abs(arr[i] - arr[i + 1]);
        if (sum < min) {
            min = sum;
        }
    }
    return min;
}

// console.log(minimumAbsoluteDifferenceWithSort(arr));
console.log(minimumAbsoluteDifferenceWithSort(arr2));

// console.log(minimumAbsoluteDifference(arr));
// console.log(minimumAbsoluteDifference(arr2));