export class QueueNode<T> {
  #value!: T;

  constructor(value: T) {
    this.#value = value;
  }

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
