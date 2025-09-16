"use strict";
/*

✅ null and undefined in TypeScript

Both null and undefined represent absence of a value, but they are used slightly differently. TypeScript, unlike JavaScript, gives you control over how strict or loose you want to treat them using configuration settings.

---------------------------------------------

✅ What is null?

null represents an explicit absence of a value
It’s something that has been intentionally set to have “no value”
It’s a primitive value in JavaScript and TypeScript

Example:

let data: string | null = null;
console.log(data); // null

This means data is either a string or null.

---------------------------------------------

✅ What is undefined?

undefined means a variable has been declared but not yet assigned a value
It’s the default value for uninitialized variables, missing properties, and functions without return statements
It’s also a primitive type

Example:

let data: string | undefined;
console.log(data); // undefined

This means data is either a string or undefined.

---------------------------------------------

✅ Example – Difference in action
let value1: string | null = null;
let value2: string | undefined;

console.log(value1); // null → intentionally empty
console.log(value2); // undefined → declared but not assigned

---------------------------------------------

✅ How TypeScript treats null and undefined

TypeScript’s behavior depends on whether the strictNullChecks option is enabled in tsconfig.json.

-> When strictNullChecks is off (default in older versions)

null and undefined are considered assignable to any type

Example:

let name: string;
name = null; // ✅ allowed
name = undefined; // ✅ allowed

-> When strictNullChecks is on (recommended)

You must explicitly declare when a variable can be null or undefined
Example:

let name: string;
name = null; // ❌ Error
name = undefined; // ❌ Error

let name2: string | null = null; // ✅ OK
let name3: string | undefined = undefined; // ✅ OK

This helps you write safer code by forcing you to handle cases where values might be missing.

---------------------------------------------

✅ Why use strictNullChecks?

Helps prevent runtime errors caused by uninitialized or empty values
Forces you to explicitly declare what cases are allowed
Improves readability and maintainability
Encourages better handling of potential edge cases

---------------------------------------------

✅ Optional chaining and nullish coalescing

TypeScript offers modern operators to deal with null and undefined easily.

-> Optional chaining (?.)
let person = { name: "Amit", address: undefined };

console.log(person.address?.city); // undefined instead of throwing an error

-> Nullish coalescing (??)
let value: string | null = null;

let result = value ?? "Default value";
console.log(result); // "Default value"

This operator returns the right-hand value only if the left-hand is null or undefined.



*/
