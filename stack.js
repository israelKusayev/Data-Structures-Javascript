const LinkedList = require("./linkedList");

class Stack {
  linkedList = new LinkedList();
  push(item) {
    this.linkedList.addLast(item);
  }
  pop() {
    const last = this.linkedList.getLast();
    this.linkedList.deleteLast();
    return last;
  }
  peek() {
    if (!this.empty()) return this.linkedList.getLast();
    else throw new Error("no elements");
  }
  empty() {
    return this.linkedList.isEmpty();
  }
}

module.exports = LinkedList;
