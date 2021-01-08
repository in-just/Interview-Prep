var Node = function(data) {
    this.data = data;
    this.next = null;
}

function print(head) {
    console.log(head.data);

    var node = head;
    while (node.next != undefined) {
        node = node.next;
        console.log(node.data);
    }
}