import { QueueNode } from "./queue_node.ts";

function toQueueNode<T>(item: T | QueueNode<T>) {
  return item instanceof QueueNode ? item : new QueueNode(item);
}

/**
 * @class Queue
 * Implements a queue, a linear structure following a particular order
 * in which operations are performed. The order is FIFO (First In First Out).
 */
export class Queue<T> {
  #nodes!: QueueNode<T>[];
  #capacity!: number;

  /**
   * Creates a new Queue instance.
   * @constructor
   * @param capacity The maximum amount of item the queue can contain.
   */
  constructor(capacity: number) {
    this.#nodes = [];
    this.#capacity = capacity;
  }

  /**
   * The maximum amount of items that can be contained in the queue.
   * Trying to enqueue a new item when this capacity is reached will do nothing.
   */
  get capacity() {
    return this.#capacity;
  }

  /**
   * The current number of items in the queue.
   */
  get size() {
    return this.#nodes.length;
  }

  /**
   * True is the queue is full, meaning it has reached its capacity.
   */
  get isFull() {
    return this.size === this.#capacity;
  }

  /**
   * True if the queue is empty, meaning it doesn't contain any item.
   */
  get isEmpty() {
    return this.size === 0;
  }

  /**
   * Inserts an item at the rear of the queue, in a FIFO manner.
   * @param item The item to insert.
   * @returns True if the item was inserted, false otherwise (if the queue is full).
   */
  enqueue(item: T | QueueNode<T>) {
    if (this.isFull) {
      return false;
    } else {
      this.#nodes.push(toQueueNode(item));
      return true;
    }
  }

  /**
   * Removes and returns the front item of the queue, in a FIFO manner.
   * @returns An instance of QueueNode which value is the item value. If the queue is empty returns null.
   */
  dequeue() {
    return this.isEmpty ? null : this.#nodes.shift();
  }

  /**
   * A QueueNode instance containing the value at the front of the queue. 
   * Null if the queue is empty
   */
  get front() {
    return this.isEmpty ? null : this.#nodes[0];
  }

  /**
   * A QueueNode instance containing the value at the rear of the queue.
   * Null if the queue is empty.
   */
  get rear() {
    return this.isEmpty ? null : this.#nodes[this.size - 1];
  }

  *[Symbol.iterator](): Iterator<QueueNode<T>> {
    for (const item of this.#nodes) {
      yield item;
    }
  }

  [Symbol.toPrimitive](hint: string) {
    switch (hint) {
      case "number":
        return +(this.#nodes);
      case "string":
      default:
        return `${this.#nodes}`;
    }
  }
}
