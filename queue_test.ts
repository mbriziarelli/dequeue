import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import { Queue } from "./queue.ts";

Deno.test("Queue#dequeue()", () => {
  const queue = new Queue<number>(4);

  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);

  assertEquals(queue.dequeue()?.value, 10);
  assertEquals(queue.dequeue()?.value, 20);
  assertEquals(queue.dequeue()?.value, 30);
  assertEquals(queue.dequeue()?.value, 40);
  assertEquals(queue.dequeue()?.value, undefined);
  assertEquals(queue.size, 0);
});

Deno.test("Queue#enqueue()", () => {
  const queue = new Queue<number>(4);

  assertEquals(queue.enqueue(10), true);
  assertEquals(queue.enqueue(20), true);
  assertEquals(queue.enqueue(30), true);
  assertEquals(queue.enqueue(40), true);
  assertEquals(queue.enqueue(50), false);
  assertEquals(queue.size, 4);
});

Deno.test("Queue#front", () => {
  const queue = new Queue<number>(4);

  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);

  assertEquals(queue.front?.value, 10);
  assertEquals(queue.size, 4);
});

Deno.test("Queue#rear", () => {
  const queue = new Queue<number>(4);

  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);

  assertEquals(queue.rear?.value, 40);
  assertEquals(queue.size, 4);
});

Deno.test("Queue#size", () => {
  const queue = new Queue<number>(4);

  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);
  queue.enqueue(50);

  assertEquals(queue.size, 4);
});

Deno.test("Queue#isFull()", () => {
  const queue = new Queue<number>(4);

  assertEquals(queue.isFull(), false);
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);
  assertEquals(queue.isFull(), true);
});

Deno.test("Queue#isEmpty()", () => {
  const queue = new Queue<number>(4);

  assertEquals(queue.isEmpty(), true);
  queue.enqueue(10);
  assertEquals(queue.isEmpty(), false);
});
