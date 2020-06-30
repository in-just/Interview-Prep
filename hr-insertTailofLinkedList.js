const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
    }

};

// depracated
// var Node = function(data) {
//     this.data=data;
//     this.next=null;
// }

function insertNodeAtTail(head, data) {
    const node = new SinglyLinkedListNode(data);

    if (null === head) return node;

    let last = head;
    while (last.next) {
        last = last.next;
    }
    last.next = node;
    return head;
}

for (let i = 0; i < llistCount; i++) {
    const llistItem = parseInt(readLine(), 10);
    const llist_head = insertNodeAtTail(llist.head, llistItem);
      llist.head = llist_head;
}

let data = 5;
let head = 

insertNodeAtTail(head, data);