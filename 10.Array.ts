/*

✅ 1. Array – The Basic Concept

An array is a collection of items, just like in JavaScript. But in TypeScript, you tell what type of items the array holds, so you get better error checking.

An array is a collection of values. In JavaScript, you just write:

let numbers = [1, 2, 3];
let names = ["Alice", "Bob"];

But in TypeScript, you explicitly tell the type of elements inside the array.

---------------------------------------------

✅ 2. Two ways to declare array types

Syntax for typing arrays

Option 1 – Type with []

let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob"];
let flags: boolean[] = [true, false, true];

Option 2 – Using Array<type> generic

let numbers: Array<number> = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
let flags: Array<boolean> = [true, false, true];

---------------------------------------------

✅ 3. Array with multiple types – Union types

If an array can hold more than one type, you use a union type.

let mixed: (number | string)[] = [1, "hello", 2, "world"];

This means every element can be either a number or a string.

---------------------------------------------

✅ 4. Array of objects

You can store objects in an array and define what properties they must have.

let users: { id: number, name: string }[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

Now TypeScript ensures that every object has both id and name.

---------------------------------------------

✅ 5. Using interface or type to describe objects

Instead of repeating the structure everywhere, you can define it once.

✅ With interface
interface User {
    id: number;
    name: string;
}

let users: User[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

✅ With type
type User = {
    id: number;
    name: string;
};

let users: Array<User> = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];


This makes your code clean and reusable.

---------------------------------------------

✅ 6. Tuples – fixed structure arrays

If you want an array where each position has a specific type, you use tuples.

let point: [number, number] = [10, 20];
let user: [number, string, boolean] = [1, "Alice", true];

Here, TypeScript knows exactly what type goes in each index.

---------------------------------------------

✅ 7. Array methods in TypeScript

Array methods like map, filter, reduce work with type safety.

let numbers: number[] = [1, 2, 3, 4];

// map
let squares = numbers.map(x => x * x); // number[]

// filter
let even = numbers.filter(x => x % 2 === 0); // number[]

// reduce
let total = numbers.reduce((sum, x) => sum + x, 0); // number

---------------------------------------------

✅ 8. Array destructuring with types

You can unpack arrays into variables easily.

let numbers: number[] = [1, 2, 3];
let [first, second] = numbers

console.log(first);  // 1
console.log(second); // 2


If it’s a tuple, TypeScript knows the types exactly.

let user: [number, string] = [1, "Alice"];
let [id, name] = user;  // id is number, name is string

*/

