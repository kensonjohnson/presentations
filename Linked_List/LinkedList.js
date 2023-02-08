export class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  constructor(head = null) {
    this.head = this.tail = head;
    // Size
    this.size = head ? 1 : 0;
  }

  // Insert first
  // Takes in data and creates a node in the first position of the list.
  // Returns the created node on success, otherwise returns null
  insertFirst(data) {
    if (typeof data === "undefined") {
      return null;
    }
    const node = new Node(data);
    if (this.size === 0) {
      this.head = this.tail = node;
      this.size = 1;
      return this.head;
    }
    node.next = this.head;
    this.head = node;
    this.size++;
    return this.head;
  }

  // Insert at end
  // Takes in data and creates a node in the last position of the list.
  // Returns the created node on success, otherwise returns null
  insertLast(data) {
    if (typeof data === "undifined") {
      return null;
    }
    const node = new Node(data);
    if (this.size === 0) {
      this.head = this.tail = node;
      this.size = 1;
      return this.tail;
    }
    this.tail.next = node;
    this.tail = node;
    this.size++;
    return this.tail;
  }

  // Insert at index
  // Takes in data and creates a node at the given index in the list.
  // Returns the created node on success, otherwise returns null
  insertAt(data, index) {
    if (
      typeof data === "undefined" ||
      typeof index !== "number" ||
      index < 0 ||
      index >= this.size
    ) {
      return null;
    }

    const node = new Node(data);
    const nodeAtIndex = walk(this.head, index - 1);
    node.next = nodeAtIndex.next;
    nodeAtIndex.next = node;
    this.size++;
    return node;
  }

  // Get first
  // returns first node in the list if it exists
  getFirst() {
    return this.head;
  }

  // Get last
  // returns last node in the list if it exists
  getLast() {
    return this.tail;
  }

  // Get at index
  // returns node at given index in the list if it exists
  getAtIndex(index) {
    let node = null;
    if (index && index >= 0 && index < this.size) {
      node = walk(this.head, index);
    }
    return node;
  }

  // Delete first
  deleteFirst() {
    if (this.size === 0) {
      return;
    }
    if (this.size === 1) {
      this.head = this.tail = null;
      this.size = 0;
      return;
    }
    const newHead = this.head.next;
    this.head.next = null;
    this.head = newHead;
    this.size--;
  }

  // Delete last
  deleteLast() {
    if (this.size === 0) {
      return;
    }
    if (this.size === 1) {
      this.head = this.tail = null;
    }
    this.size--;
    this.tail = walk(this.head, this.size);
    this.tail.next = null;
  }

  // Delete at index
  deleteAtIndex(index) {
    if (this.size === 0) {
      return;
    }
    if (this.size === 1) {
      this.head = this.tail = 0;
      this.size = 0;
    }
    const nodeBeforeIndex = walk(this.head, index - 1);
    const nodeToDelete = nodeBeforeIndex.next;
    nodeBeforeIndex.next = nodeToDelete.next;
    nodeToDelete.next = null;
    this.size--;
  }

  // Clear
  clear() {
    this.head = null;
    this.size = 0;
  }
}

// Take in an index to walk to,
// and return the Node at that index,
// if no Node exists, returns null
function walk(node, index) {
  index--;
  while (index > 0) {
    node = node.next;
    index--;
  }
  return node;
}
