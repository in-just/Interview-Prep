// object LinkedList that has one property and head (pointer)
function LinkedList() {
    this.head = null;
}

// add elements by using a push method in the prototype of the object. push method will take value and will create a node object. if there is no head, then node will be the value of the head. if there is a head then walk through the linked list chain to read the tail (where next node is null). 
LinkedList.prototype.push = function(val) {
    var node = {
        value: val,
        next: null
    }
    if (!this.head) { 
        this.head = node;
    }
    else {
        current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }
}

// creating a linked list and pushing values to it
var sll = new LinkedList();
// push node
sll.push(2);
sll.push(3);
sll.push(4);

// check values by traversing LinkedList
console.log(sll.head); //Object {data: 2, next: Object}
console.log(sll.head.next); //Object {data: 3, next: Object}
console.log(sll.head.next.next); //Object {data: 4, next: null}