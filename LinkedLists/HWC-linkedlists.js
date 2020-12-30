/* most important part of a linked list is its node structure each node must contain some data and a pointer to the next node in the list.
https://humanwhocodes.com/blog/2019/01/computer-science-in-javascript-linked-list/
*/

class LinkedListNode {
    constructor(data) {
        this.data = data;
        // null because you don't know the next node yet
        this.next = null;
    }
}

// class encapsulates struct functionality
const head = Symbol("head");

class LinkedList {
    constructor() {
        this[head] = null;
    }
    // adding new data to the list
    add(data) {
        
        // create a new node
        const newNode = new LinkedListNode(data);

        // special case: no items in the list yet
        if (this[head] === null) {
            // just set head to the new node
            this[head] = newNode;
        } else {
            // start looking at first node
            let current = this[head];

            // follow `next` links until reach the end
            while (current.next !== null) {
                current = current.next;
            }

            // assign the node into the `next` pointer
            current.next = newNode;
        }
    }
}