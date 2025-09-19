/*

✅ 1. What is a Tuple?

A tuple is a fixed-length array where the type of each element is known and defined.

Tuples are like arrays with a fixed structure — each position in the tuple has a specific type and sometimes even a specific meaning. They give you more control compared to normal arrays.

Example: a tuple representing a user record:

let user: [number, string] = [1, "Alice"];

The first element must be a number.
The second element must be a string.

You cannot add random values.

---------------------------------------------

✅ 2. Tuple Examples
Example 1: Coordinates
let point: [number, number] = [10, 20];

Example 2: User data
let user: [number, string, boolean] = [1, "Alice", true];

Example 3: Mixing types
let data: [string, number, string] = ["id-123", 25, "active"];

---------------------------------------------

✅ 4. Accessing Tuple Elements
let user: [number, string] = [1, "Alice"];

console.log(user[0]); // 1
console.log(user[1]); // "Alice"

// TypeScript knows:
let id: number = user[0];
let name: string = user[1];

---------------------------------------------

✅ 5. Destructuring Tuples
let point: [number, number] = [10, 20];
let [x, y] = point;

console.log(x); // 10
console.log(y); // 20

TypeScript automatically assigns x and y as number.

*/ 

