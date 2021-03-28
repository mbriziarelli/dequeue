import { QueueNode } from "./queue_node.ts";

function toQueueNode<T>(item: T | QueueNode<T>) {
  return item instanceof QueueNode ? item : new QueueNode(item);
}

export class Queue<T> {
  private nodes: QueueNode<T>[] = [];

  constructor(private capacity: number) {}

  get size() {
    return this.nodes.length;
  }

  isFull() {
    return this.size === this.capacity;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(item: T | QueueNode<T>) {
    if (this.isFull()) {
      return false;
    } else {
      this.nodes.push(toQueueNode(item));
      return true;
    }
  }

  dequeue() {
    return this.isEmpty() ? null : this.nodes.shift();
  }

  get front() {
    return this.isEmpty() ? null : this.nodes[0];
  }

  get rear() {
    return this.isEmpty() ? null : this.nodes[this.size - 1];
  }
}
