# Dequeue
## Simple queue implementation for Deno
### Basic usage
```ts
import { Queue, QueueNode } from "https://github.com/mbriziarelli/dequeue/mod.ts";

const queue = new Queue<string>(10);
const item = New QueueNode("hello");

queue.enqueue(item);
queue.enqueue("world");
```
### Enqueue new values
```ts
const queue = new Queue<number>(10);
queue.enqueue(100);
queue.enqueue(new QueueNode(200));
```
### Dequeue new values
```ts
const queue = new Queue<string>(5);
queue.enqueue("hello")
const item: QueueNode<string> | null = queue.dequeue();
const value = item?.value;
```
## QueueNode class methods
The `QueueNode` class is a very simple wrapper for a queue value. 
### QueueNode.constructor()
Constructs a new `QueueNode` instance. The value can be accessed through the `value` property, which is **readonly**.
```ts
const node: QueueNode<number> = new QueueNode(12);
const value: number = node.value
```
## Queue class methods
### Queue.enqueue() 
```ts
const done: boolean = queue.enqueue(item: T | QueueNode<T>);
```
- `done` - type `boolean`. `true` if item has been enqueued, `false` otherwise.
- `item` - type `T` or `QueueNode<T>`. The item to enqueue.
### Queue.dequeue()
```ts
const item: QueueNode<T> | null = queue.dequeue();
```
- `item` - type `QueueNode<T>` or `null`. Returns `null` only if there is no more item remaining in the queue.
### Queue.front
Returns the next `QueueNode` that will be dequeued by `Queue.dequeue()` or `null` if the queue is empty.
```ts
const item: QueueNode<T> | null = queue.front;
```