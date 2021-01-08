function getSecondLargest(nums) {
    let max1=0;
    let max2=0;
    for (const e of nums) {
        if (max1 < e) {
            max1 = e;
        }
    }
    for (const e of nums) {
        if(max2 < e && e < max1) {
            max2 = e;
        }
    }
    return max2;
}

let arr1 = [2,3,6,6,5];
console.log(getSecondLargest(arr1));