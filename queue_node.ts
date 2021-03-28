export class QueueNode<T> {
  public readonly value!: T;

  constructor(value: T) {
    Object.defineProperty(this, "value", {
      value,
      // The value cannot be deleted from `this` object.
      configurable: false,
      // The value can be enumerated.
      enumerable: true,
      // The value is readonly (even for JavaScript non typed code).
      writable: false,
    });
  }
}
