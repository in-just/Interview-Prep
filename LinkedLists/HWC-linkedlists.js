/* most important part of a linked list is its node structure each node must contain some data and a pointer to the next node in the list.
*/

class LinkedListNode {
    constructor(data) {
        this.data = data;
        // null because you don't know the next node yet
        this.next = null;
    }
}

// creating a linked list using the LinkedListNode class
// 1st node
const head = new LinkedListNode(12);
// 2nd node
head.next = new LinkedListNode(99);
// 3rd node
head.next.next = new LinkedListNode(37);

// traversing a linked list and printing
let current = head;
while (current != null) {
    console.log(current.data);
    current = current.next;
}