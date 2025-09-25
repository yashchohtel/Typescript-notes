/*

✅ What are Generics?

Generics allow you to create reusable, type-safe components that can work with different types without losing type information.
Instead of writing the same function/class multiple times for different types, you use a type parameter (like T).

Think of generics like a "placeholder for a type" that gets filled in when you use it.

----------------------------------------------

✅ Why Do We Need Generics?

Without generics, you either:
Lose type safety by using any.
Or write duplicate code for each type.

Example without generics:

function identityAny(value: any): any {
  return value;
}

let a = identityAny("Hello"); // type: any (we lose type safety)
let b = identityAny(42);      // type: any

----------------------------------------------

✅ Example With Generics

function identity<T>(value: T): T {
  return value;
}

let str = identity<string>("Hello"); // type: string
let num = identity<number>(42);      // type: number

Here, T is a placeholder for the type, and it keeps type safety.

----------------------------------------------

✅ Generic Functions

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement<number>([1, 2, 3]));   // 1
console.log(getFirstElement<string>(["a", "b"])); // "a"

----------------------------------------------

✅ Generic Interfaces

interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 123 };
const stringBox: Box<string> = { value: "Hello" };

----------------------------------------------

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // 20

const stringStack = new Stack<string>();
stringStack.push("A");
stringStack.push("B");
console.log(stringStack.pop()); // "B"

*/

