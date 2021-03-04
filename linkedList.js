class LinkedList {
  #first;
  #last;
  #size = 0;

  constructor() {}

  addFirst(item) {
    if (this.isEmpty()) addLast(item);
    else {
      const newItem = new LinkedListNode(item);
      newItem.next = this.#first;
      this.#first = newItem;
      this.#size++;
    }
  }

  addLast(item) {
    const newItem = new LinkedListNode(item);
    if (this.isEmpty()) {
      this.#first = newItem;
      this.#last = newItem;
    } else {
      this.#last.next = newItem;
      this.#last = newItem;
    }
    this.#size++;
  }

  deleteFirst() {
    if (this.isEmpty()) return null;

    if (this.onlyOneNode()) this.#first = this.#last = null;
    else {
      const first = this.#first;
      this.#first = this.#first.next;
      first.next = null;
    }
    this.#size--;
  }

  deleteLast() {
    if (this.isEmpty()) return null;

    if (this.onlyOneNode()) this.#first = this.#last = null;
    else {
      const previous = this.#getPrevious(this.#last);
      this.#last = previous;
      this.#last.next = null;
    }

    this.#size--;
  }

  #getPrevious(node) {
    let current = this.#first;

    while (current) {
      if (current.next === node) return current;
      current = current.next;
    }

    return null;
  }

  indexOf(value) {
    let index = 0;
    let current = this.#first;

    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }

    return -1;
  }

  contains(value) {
    return this.indexOf(value) !== -1;
  }

  size() {
    return this.#size;
  }

  reverse() {
    if (this.isEmpty() || this.#first === this.#last) {
      return;
    }

    let previous = this.#first;
    let current = this.#first.next;

    while (current) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.#last = this.#first;
    this.#first = previous;
    this.#last.next = null;
  }

  isEmpty() {
    return this.#size === 0;
  }

  onlyOneNode() {
    return this.#size === 1;
  }

  print() {
    let current = this.#first;
    while (current) {
      console.log(current.value);

      current = current.next;
    }
  }
}

class LinkedListNode {
  constructor(value) {
    this.value = value;
  }
  value;
  next;
}

const linkedList = new LinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.deleteFirst();
linkedList.deleteFirst();
linkedList.print();

console.log("size", linkedList.size());
