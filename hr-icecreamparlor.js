// Brute force solution
function whatFlavors(cost, money) {
    // money.sort(function (a,b) {
    //     return a-b;
    // });
    
    for (let i = 0; i < money.length; ++i) {
        for (let j = i + 1; j < money.length; ++j) {
            if(money[i] + money[j] === cost) {
                console.log((i + 1), (j + 1));
                break;
            }
        }
    }
}

// whatFlavors(cost, money1);

function whatFlavorsHash(cost, money) {
    const map = new Map();
    for (let i = 0; i < cost.length; i++) {
        var target = money - cost[i];
        if (map.has(target)) {
            console.log(map.get(target), i + 1);
            break;
        }
        map.set(cost[i], i + 1);
    }
}

let money = 5;
let cost1 = [1,4,5,3,2];
let cost2 = [2,2,4,3];

whatFlavorsHash(cost1, money);