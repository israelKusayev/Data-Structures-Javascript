const LinkedList = require("./linkedList");

class HashMap {
  #elements;

  constructor(size) {
    this.#elements = Array(size);
  }

  put(key, value) {
    const entry = new Entry(key, value);

    const index = key % this.#elements.length;
    let linkedList = this.#elements[index];

    if (!linkedList) linkedList = new LinkedList();

    linkedList.addLast(entry);

    // for

    this.#elements[index] = linkedList;
  }

  get(key) {
    const index = key % this.#elements.length;
    let linkedList = this.#elements[index];

    while (linkedList.get) {}
  }

  remove(key) {}

  getElements() {
    return this.#elements;
  }
}

class Entry {
  key;
  value;
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

const map = new HashMap(100);
map.put(10, "100");
map.put(110, "200");
map.put(20, "200");
map.put(30, "300");
map.put(40, "400");

const el = map.getElements();
module.exports = HashMap;
