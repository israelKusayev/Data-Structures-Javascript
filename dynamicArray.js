class DynamicArray {
  #itemsCount = 0;
  #items;
  constructor(initialCount) {
    this.#items = Array(initialCount);
  }

  print() {
    for (let i = 0; i < this.#itemsCount; i++) {
      console.log(this.#items[i]);
    }
  }

  add(item) {
    if (this.#items === this.#itemsCount) {
      const newItemsArray = Array(this.#itemsCount * 2);
      for (let i = 0; i < this.#itemsCount; i++) {
        newItemsArray[i] = this.#items[i];
      }
      this.#items = newItemsArray;
    }
    this.#items[this.#itemsCount++] = item;
  }

  indexOf(item) {
    for (let i = 0; i < this.#itemsCount; i++) {
      if (this.#items[i] === item) return i;
    }
    return -1;
  }

  deleteAt(index) {
    for (let i = index; i < this.#itemsCount; i++) {
      this.#items[i] = this.#items[i + 1];
    }
    this.#itemsCount--;
  }
}

const array = new DynamicArray(5);
