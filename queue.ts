import { Node } from "./node.ts";

export class Queue<T> {
  private nodes: Node<T>[] = [];

  constructor(private capacity: number) {}

  get size() {
    return this.nodes.length;
  }

  isFull() {
    return this.nodes.length === this.capacity;
  }

  isEmpty() {
    return this.nodes.length === 0;
  }

  enqueue(item: T | Node<T>) {
    if (this.isFull()) {
      return false;
    } else if (item instanceof Node) {
      this.nodes.push(item);
    } else {
      this.nodes.push(new Node(item));
    }

    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.nodes.shift();
    }
  }

  get front() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.nodes[0];
    }
  }

  get rear() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.nodes[this.nodes.length - 1];
    }
  }
}
