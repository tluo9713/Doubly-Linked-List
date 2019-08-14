//Create a Doubly Linked List with the methods:
//push, pop, shift, unshift, remove, set, get
//A doubly linked list is an extension of a linked list. It is an abstract data
//structure that can be used to solve certain problems. A Singly Linked List will
//mostly have the same properties with the only exception that it can not traverse
//backwards.
//Advantages of Linked List. You do not need to declare the length to begin with,
//adding and removing nodes from the beginning or end are both O(1). These
//strengths are great to use in Stacks and Queues problems.
//Disadvantages of Linked List, traversing a linked list is an O(n) operation,
//same goes for searching. It's also not a built in data structure in JS so we
//must create it ourselves.

//class node will be used in linked list to hold data
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //Adds an node to the end of the DLL. This is an O(1) operation as you only
  //need to append to the end, and in this DLL this.tail is accessible.
  //Edge cases to watch out for, if the DLL is empty, and remembering that this
  //is DLL so you must add the link from the tail to new node as well as new node
  //to tail
  push(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.tail === null) return undefined;
    let node = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      node.prev = null;
    }
    this.length--;
    return node;
  }
  shift() {
    if (this.length === 0) return undefined;
    let node = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return node;
  }
  unshift(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }
  remove(idx) {
    if (idx > this.length) return undefined;
    if (this.head === null) return undefined;
    let nodeCount = 0;
    let node = this.head;
    while (idx !== nodeCount) {
      node = node.next;
      nodeCount++;
    }
    if (node !== this.head && node !== this.tail) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.next = null;
      node.prev = null;
    }
    if (node === this.head) {
      this.head = this.head.next;
      this.head.prev.next = null;
      this.head.prev = null;
    }
    if (node === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next.prev = null;
      this.tail.next = null;
    }
    this.length--;
    return node;
  }
  set(idx, val) {
    if (idx > this.length) return false;
    let nodeCount = 0;
    let node = this.head;
    while (idx !== nodeCount) {
      node = node.next;
      nodeCount++;
    }
    node.val = val;
    return true;
  }
  get(idx) {
    if (this.length < idx) return null;
    let nodeCount = 0;
    let node = this.head;
    while (nodeCount < idx) {
      node = node.next;
      nodeCount++;
    }
    return node;
  }
}
