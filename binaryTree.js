class BinaryTree {
  root = null;

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.leftChild) {
          current.leftChild = node;
          break;
        }
        current = current.leftChild;
      } else {
        if (!current.rightChild) {
          current.rightChild = node;
          break;
        }
        current = current.rightChild;
      }
    }
  }

  find(value) {
    let current = this.root;

    while (current) {
      if (value < current.value) {
        current = current.leftChild;
      } else if (value > current.value) {
        current = current.rightChild;
      } else return true;
    }

    return false;
  }

  // dfs: depth first search

  // root, left, right
  traversePreOrder() {
    this.#traversePreOrder(this.root);
  }
  #traversePreOrder(node) {
    if (!node) return;

    console.log(node.value);

    this.#traversePreOrder(node.leftChild);
    this.#traversePreOrder(node.rightChild);
  }

  //  left, root, right
  traverseInOrder() {
    this.#traverseInOrder(this.root);
  }

  #traverseInOrder(node) {
    if (!node) return;

    this.#traverseInOrder(node.leftChild);
    console.log(node.value);
    this.#traverseInOrder(node.rightChild);
  }

  // left, right, root
  traversePostOrder() {
    this.#traversePostOrder(this.root);
  }

  #traversePostOrder(node) {
    if (!node) return;

    this.#traverseInOrder(node.leftChild);
    this.#traverseInOrder(node.rightChild);
    console.log(node.value);
  }

  height() {
    return this.#height(this.root);
  }

  #height(node) {
    if (!node) return -1;

    if (!node.leftChild && !node.rightChild) return 0;
    return (
      1 + Math.max(this.#height(node.leftChild), this.#height(node.rightChild))
    );
  }
}

class Node {
  value;
  leftChild;
  rightChild;

  constructor(value) {
    this.value = value;
  }
}

const binaryTree = new BinaryTree();

binaryTree.insert(7);
binaryTree.insert(4);
binaryTree.insert(9);
binaryTree.insert(1);
binaryTree.insert(6);
binaryTree.insert(8);
binaryTree.insert(10);

console.log(binaryTree.height());
module.exports = BinaryTree;
