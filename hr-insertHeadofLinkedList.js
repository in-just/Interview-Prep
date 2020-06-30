function insertNodeAtHead(head, data) {
    const node = new SinglyLinkedListNode(data);

    if (null === head) {
        return node;
    } else {
        var oldHead = head;
        head = node;
        head.next = oldHead;
    }
    return head;
}
