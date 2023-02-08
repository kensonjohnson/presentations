import { LinkedList, Node } from "./LinkedList.js";
import { mock1 } from "./sampleArrays.js";

describe("Linked List Creation", () => {
  test("Creates LinkedList without input", () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
    expect(list.size).toBe(0);
  });

  test("Creates LinkedList with input", () => {
    const node = new Node(5);
    const list = new LinkedList(node);
    expect(list.head).toBeDefined();
    expect(list.size).toBe(1);
    expect(list.head.data).toBe(5);
  });
});

describe("Linked List Insert Elements", () => {
  test("insertFirst()", () => {
    const list = new LinkedList();
    list.insertFirst(5);
    expect(list.head.data).toBe(5);
    expect(list.tail.data).toBe(5);
    expect(list.size).toBe(1);
    list.insertFirst(2);
    expect(list.head.data).toBe(2);
    expect(list.tail.data).toBe(5);
    expect(list.size).toBe(2);
  });

  test("insertLast()", () => {
    const list = new LinkedList();
    list.insertLast(6);
    expect(list.head.data).toBe(6);
    expect(list.tail.data).toBe(6);
    expect(list.size).toBe(1);
    list.insertLast(9);
    expect(list.head.data).toBe(6);
    expect(list.tail.data).toBe(9);
    expect(list.size).toBe(2);
  });

  test("insertAt()", () => {
    const list = new LinkedList();
    list.insertFirst(5);
    list.insertFirst(4);
    list.insertFirst(2);
    list.insertFirst(1);
    list.insertAt(3, 3);
    expect(list.tail.data).toBe(5);
    expect(list.head.data).toBe(1);
    expect(list.size).toBe(5);
    expect(list.head.next.next.data).toBe(3);
  });
});

describe("Linked List Get Elements", () => {
  const list = new LinkedList();
  mock1.forEach((number) => {
    list.insertLast(number);
  });

  test("getFirst()", () => {
    const node = list.getFirst();
    expect(node.data).toBe(1);
  });

  test("getLast()", () => {
    const node = list.getLast();
    expect(node.data).toBe(9);
  });

  test("getAtIndex()", () => {
    const node = list.getAtIndex(4);
    expect(node.data).toBe(4);
  });
});

describe("Linked List Delete Elements", () => {
  const list = new LinkedList();
  mock1.forEach((number) => {
    list.insertLast(number);
  });

  test("deleteFirst()", () => {
    expect(list.size).toBe(9);
    list.deleteFirst();
    const node = list.getFirst();
    expect(node.data).toBe(2);
    expect(list.size).toBe(8);
  });

  test("deleteLast()", () => {
    list.deleteLast();
    const node = list.getLast();
    expect(node.data).toBe(8);
    expect(list.size).toBe(7);
  });

  test("deleteAtIndex()", () => {
    list.deleteAtIndex(4);
    const node = list.getAtIndex(4);
    expect(node.data).toBe(6);
    expect(list.size).toBe(6);
  });

  test("clear()", () => {
    list.clear();
    expect(list.size).toBe(0);
  });
});
