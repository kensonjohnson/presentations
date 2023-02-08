var mergeTwoLists = (node1, node2) => {
  let newList = new ListNode();
  let tail = newList.next;

  while (node1 !== null && node2 !== null) {
    if (node1.val < node2.val) {
      newList.val = node1.val;
      tail = new ListNode();
      newList.next = tail;
      node1 = node1.next;
    } else {
      newList.val = node2.val;
      tail = new ListNode();
      newList.next = tail;
      node2 = node2.next;
    }
  }
};
