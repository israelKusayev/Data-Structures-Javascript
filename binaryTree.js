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

console.log(binaryTree.find(8));
module.exports = BinaryTree;
