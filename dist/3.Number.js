"use strict";
/*

Number Data Type in TypeScript :- The number data type is one of the most commonly used types in TypeScript and JavaScript. It is used to store numeric values, including integers, floating-point numbers, and special numeric values like NaN or Infinity.

-----------------------------

✅ Key Points about number type -

It stores both integers and decimals
Supports mathematical operations like addition, subtraction, multiplication, etc.
Works with special numeric values like NaN (Not a Number), Infinity, and -Infinity
It’s defined using the number keyword in TypeScript

Example:

let age: number = 25; // integer
let price: number = 99.99; // floating-point number
let notANumber: number = NaN; // Not a Number
let infinityValue: number = Infinity; // Infinity
let negativeInfinity: number = -Infinity; // -Infinity

-----------------------------

✅ Mathematical operations :- You can perform various operations with numbers:

let a: number = 10;
let b: number = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1 (remainder)

-----------------------------

✅ Special numeric valuesz

NaN – Not a Number
Occurs when a mathematical operation cannot return a valid number

let result: number = 0 / 0;
console.log(result); // NaN

Infinity and -Infinity

Represents values beyond the largest possible number

let inf: number = 1 / 0;
console.log(inf); // Infinity

let negInf: number = -1 / 0;
console.log(negInf); // -Infinity

-----------------------------

✅ Numeric literals

You can define numbers in various formats:

Decimal (base 10)
let x: number = 123;

Hexadecimal (base 16, starts with 0x)
let hex: number = 0xff; // 255

Binary (base 2, starts with 0b)
let bin: number = 0b1010; // 10

Octal (base 8, starts with 0o)
let oct: number = 0o744; // 484

-----------------------------

✅ Working with functions and numbers

You can define functions that accept or return numbers.

function multiply(x: number, y: number): number {
  return x * y;
}

let result = multiply(5, 4);
console.log(result); // 20

This ensures that inputs and outputs are checked at compile time.

-----------------------------

✅ BigInt – For very large numbers

TypeScript also supports bigint for numbers beyond the safe integer limit.

let big: bigint = 123456789012345678901234567890n;
console.log(big);

Note: BigInt and number cannot be mixed in operations.

let normal: number = 10;
let bigIntValue: bigint = 20n;
console.log(normal + bigIntValue); // Operator '+' cannot be applied to types 'number' and 'bigint'

-----------------------------

✅ Converting String to Number in TypeScript

1. Using Number() function :- The Number() function converts a string into a number if possible.

example:

var str: string = "123";
var num: number = Number(str);
console.log(num); // 123
console.log(typeof num); // "number"

If the string is not a valid number:
let str: string = "abc";
let num: number = Number(str);
console.log(num); // NaN


2. Using parseInt() for integers

The parseInt() function converts a string into an integer.

✔ It reads the string until it finds a non-numeric character.

Example:

let str: string = "123";
let num: number = parseInt(str);
console.log(num); // 123

It also works with strings like:
let str: string = "123abc";
let num: number = parseInt(str);
console.log(num); // 123

-----------------------------

✅ Type Inference With Numbers

What is Type Inference?

Type inference means TypeScript automatically figures out the type of a variable based on the value you assign to it — even if you don’t explicitly specify the type.

Example with numbers If you write:

let count = 10;

TypeScript sees that 10 is a number
It automatically assumes count is of type number
Now, you cannot assign any other type (like a string) to it later

count = 20; // ✅ works
// count = "twenty"; // ❌ Error: Type 'string' is not assignable to type 'number'
So, TypeScript inferred that count is a number from the value you assigned!



✅ When TypeScript cannot infer properly
If you declare without assigning:

let count;

TypeScript infers count as any → no type safety
You can later assign any type → may cause bugs

Solution: Explicitly define the type.

let count: number;
count = 10; // ✅ allowed
count = "ten"; // ❌ error

✅ Example – Inference with arrays of numbers
let scores = [10, 20, 30];

TypeScript infers that scores is of type number[] → array of numbers.

scores.push(40); // ✅ allowed
scores.push("50"); // ❌ error: string is not allowed


✅ Example – Inference with functions
function multiply(x: number, y: number) {
  return x * y;
}

let result = multiply(5, 4); // TypeScript infers: number

The return type of the function is automatically inferred as number because the operation involves numbers.

*/
