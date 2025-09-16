/*

✅ 1. Array – The Basic Concept

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

*/ 

let mixed: (number | string)[] = [1, "hello", 2, "world"];

console.log(mixed);