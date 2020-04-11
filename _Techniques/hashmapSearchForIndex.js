// finds (find) the item in (here) and returns index using hashmap
function findingSomething(find, here) {
    const map = new Map();
    for (let i = 0; i < here.length; ++i) {
        if (map.has(find)) {
            console.log(map.get(find));
            return;
        }
        map.set(here[i], i);
    }
    return console.log("Not found");
}

let find = "two";
let here = ["One", "Two", "Three", "Four", "Five"];
findingSomething(find, here);