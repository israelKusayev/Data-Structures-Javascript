const Stack = require("./stack");

class ArrayQueue {
  #array;
  #first = 0;
  #rear = 0;
  #count = 0;

  constructor(count) {
    this.#array = new Array(count);
  }
  enqueue(item) {
    if (this.isFull()) throw new Error("queue is full");

    this.#array[this.#rear] = item;

    this.#rear = (this.#rear + 1) % this.#array.length;
    this.#count++;
  }
  dequeue() {
    if (this.isEmpty()) throw new Error("queue is empty");

    const firstItem = this.#array[this.#first];
    this.#array[this.#first] = undefined;
    this.#first = (this.#first + 1) % this.#array.length;
    this.#count--;

    return firstItem;
  }
  peek() {
    if (this.isEmpty()) throw new Error("queue is empty");

    return this.#array[this.#first];
  }
  isEmpty() {
    return this.#count === 0;
  }
  isFull() {
    return this.#count === this.#array.length;
  }

  toString() {
    return this.#array.slice(this.#first, this.#rear);
  }
}

class QueueWithTwoStacks {
  #first;
  #second;

  constructor() {
    this.#first = new Stack();
    this.#second = new Stack();
  }
  enqueue(item) {
    this.#first.push(item);
  }
  dequeue() {
    if (this.isEmpty()) throw new Error("queue is empty");

    this.#moveStack1ToStack2();

    return this.#second.pop();
  }
  peek() {
    if (this.isEmpty()) throw new Error("queue is empty");

    this.#moveStack1ToStack2();

    return this.#second.peek();
  }

  #moveStack1ToStack2() {
    if (this.#second.empty())
      while (!this.#first.empty()) this.#second.push(this.#first.pop());
  }

  isEmpty() {
    return this.#first.empty() && this.#second.empty();
  }
}

module.exports = ArrayQueue;
