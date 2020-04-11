function flip(arr, k) {
    let pivot = Math.floor((k+1) / 2);
    let temp = 0;
    for (let i =  0; i < pivot; i++) {
      temp = arr[i];
      arr[i] = arr[k - i];
      arr[k - i] = temp;
    }
  }
  
  function findMaxIndexInPrefix(arr, k) {
    let ans = 0;
    for (let i = 0; i <= k; i++) {
      if (arr[i] > arr[ans]) {
        ans = i;
      }
    }
    return ans;
  }
  
  function pancakeSort(arr) {
    let maxIndex = 0;
    for (let i = arr.length - 1; i >= 1; i--) {
      maxIndex = findMaxIndexInPrefix(arr,i);
      flip(arr, maxIndex);
      flip(arr, i);
    }
    return arr;
  }

  let arr = [1,5,4,3,2];
  let arr2 = [2,3,1,5,4];
  console.log(pancakeSort(arr));
//   console.log(pancakeSort(arr2));