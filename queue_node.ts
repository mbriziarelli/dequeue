/**
 * @class QueueNode
 * Queues can only contain or return QueueNode instances. 
 */
export class QueueNode<T> {
  #value!: T;

  /**
   * Build a new QueueNode with the given value.
   * @constructor
   * @param value The value contained by this node.
   */
  constructor(value: T) {
    this.#value = value;
  }

  /**
   * returns the value. Readonly.
   */
  get value() {
    return this.#value;
  }

  [Symbol.toPrimitive](hint: string) {
    switch (hint) {
      case "number":
        return +(this.#value);
      case "string":
      default:
        return `${this.#value}`;
    }
  }
}
