//using set

const array = [1,2,3,4,5,6,1,2,3,4,5,6];

const uniqueSet = new Set(array);

console.log(array);
console.log(uniqueSet);

// array.from method

console.log(Array.from(new Set(array)));


// indexOf method returns the first index it finds of the provided element from our array

console.log(array.indexOf(1));

//using filter 