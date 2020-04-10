let list = [1, 12, 5, 111, 200, 1000, 10];
let k = 50;
console.log(markToys(list, k));

function markToys(list, k) {
    list.sort(function(a,b) {
        return a - b;
    });
    console.log(list);
    var i;
    var sumSoFar = 0;
    for (i = 0; i < list.length; i++) {
        sumSoFar += list[i];
        if(sumSoFar > k) {
            break;
        }
    }
    return i;
}

// alternative to declare sort
// in this case you would then declare list.sort(sort);
function sort (a,b) {
    return a-b;
}