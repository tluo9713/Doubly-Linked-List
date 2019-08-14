//Create a Doubly Linked List with the methods:
//push, pop,

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
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
