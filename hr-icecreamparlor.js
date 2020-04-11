let cost = 4;
let money1 = [1,4,5,3,2];
let money2 = [2,2,4,3];

function whatFlavors(cost, money) {
    money.sort(function (a,b) {
        return a-b;
    });
    let sum = 0;
    let offset = 0;
    for (let i = 0; i < money.length; ++i) {
        for (let j = i + 1; j < money.length; ++j) {
            let placeSum = sum;
            sum = money[i] + money[i + 1];
            if (sum === cost) {
                console.log(money[i] + " " + money[i + 1]);
            } else if (sum > money) {
                sum = placeSum;
            }
        }
    }
}