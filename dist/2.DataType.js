"use strict";
/*

02]. DATA TYPE IN TYPESCRIPT :-

1. What is data type in TypeScript?

A data type in TypeScript tells the compiler what kind of value a variable, function, or object can hold, just like JavaScript, but with more strict checking.

TypeScript is all about static typing, meaning you define the type while writing the code, and it helps catch errors before the program runs.

------------------

2. Why are data types important in TypeScript?

They help you avoid bugs by catching mistakes early
They make your code more predictable and easier to maintain
They allow better tooling (like autocomplete, suggestions, and error checking)

______________________________________________________________

3. What are the different data types in TypeScript?

Primitive Data Types in TypeScript :- Primitive data types are the basic types that store a single value. TypeScript allows you to explicitly define these types, making your code safer and more predictable.

1️⃣ string
Represents text data.
It can hold any sequence of characters.

let name: string = "Yash";

------------------

2️⃣ number
Used for numeric values.
Supports both integers and floating-point numbers.

let age: number = 25;
let price: number = 99.99;

------------------

3️⃣ boolean
Can only hold two values: true or false.
Used to represent conditions or flags.

------------------

let isLoggedIn: boolean = true;
let isAdmin: boolean = false;

------------------

4️⃣ null
Represents “no value” or “empty”.
Used when you explicitly want to assign a null value.

let emptyValue: null = null;

------------------

5️⃣ undefined
Represents a variable that has been declared but not yet assigned a value.
Often used by the system when a variable is declared but empty.

let notAssigned: undefined = undefined;

------------------

6️⃣ symbol
Represents a unique and immutable value.
Mainly used to create unique identifiers.

let id: symbol = Symbol("id");

------------------

7️⃣ bigint
Used for very large integer numbers beyond the safe limit of number.
Always ends with n.

let largeNumber: bigint = 9007199254740991n;

----------------------------------------

Non-Primitive Data Types in TypeScript :- Non-primitive types are more complex and can store multiple values or structured data. They are also called reference types because variables hold references to where the data is stored, not the data itself.

The main non-primitive types in TypeScript are:

Object
Array
Tuple
Enum
Function

------------------

1️⃣ Object

An object is a collection of properties (key-value pairs).

Used to group related data
Properties can have different types

Example:

let user: { name: string, age: number } = {
  name: "Yash",
  age: 25
};

------------------

2️⃣ Array

An array stores a list of values of the same type.

Ordered collection
Can be defined with types like number[], string[], etc.

Example:

let numbers: number[] = [1, 2, 3, 4];
let fruits: string[] = ["apple", "banana", "orange"];

------------------

3️⃣ Tuple

A tuple is like an array, but you define the exact number and types of elements.

✔ Fixed size
✔ Different types at specific positions

Example:

let person: [string, number] = ["Yash", 25];


This means the first element is a string, and the second is a number.

----------------------------------------

Special Types in TypeScript

1️⃣ any

The any type disables type checking.
It allows you to assign any kind of value to the variable.
It’s useful when you don’t know the type beforehand, but it removes the safety that TypeScript provides.

Example:

let randomValue: any = "Hello";
randomValue = 10; // ✅ allowed
randomValue = true; // ✅ allowed

Use it carefully - It’s better to avoid any unless absolutely necessary because it defeats the purpose of TypeScript’s type safety.

------------------

4️⃣ never

The never type represents values that never occur.

It’s used for functions that throw errors or have infinite loops.

Example:

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

It tells TypeScript that this function will never finish or return a value.

----------------------------------------

Advanced Types in TypeScript - These help you write more flexible and structured code while keeping type safety intact.

1️⃣ Union Types

A union type allows a variable to hold multiple types.
Use | (pipe symbol) to separate possible types.
It’s useful when a value can be more than one type.

Example:

let value: string | number;
value = "Hello"; // ✅ allowed
value = 42;      // ✅ allowed
// value = true; // ❌ not allowed


You can also use it in functions:

function printId(id: string | number) {
  console.log("ID:", id);
}

------------------

2️⃣ Intersection Types

An intersection type combines multiple types into one.

Use & (ampersand symbol) to merge types.

The resulting type must satisfy all involved types.

Example:

type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Manager = Person & Employee;

let manager: Manager = {
  name: "Amit",
  employeeId: 101
};

This means manager must have both name and employeeId.

------------------

3️⃣ Type Alias

Type alias lets you give a name to a type, making it reusable and easier to understand.

It’s often used with objects, unions, or complex structures.

Example:

type User = {
  name: string,
  age: number
};

let user: User = {
  name: "Yash",
  age: 25
};


You can also alias unions:

type ID = string | number;
let userId: ID = "abc123";

------------------

4️⃣ Enum

Enums are used to define a set of named constants.

They improve readability and help manage options easily.

Example:

enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Left;
console.log(move); // 2


You can also assign custom values:

enum Status {
  Active = 1,
  Inactive = 0,
  Pending = 2
}

------------------

4️⃣ Enum

Enums are used to define a set of named constants.

They improve readability and help manage options easily.

Example:

enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Left;
console.log(move); // 2


You can also assign custom values:

enum Status {
  Active = 1,
  Inactive = 0,
  Pending = 2
}

------------------

5️⃣ Literal Types

Literal types restrict a variable to exact values.

Useful for defining constants or allowed values.

Example:

let direction: "up" | "down" | "left" | "right";
direction = "up";   // ✅ allowed
// direction = "forward"; // ❌ error


You can combine it with type aliases:

type Direction = "up" | "down" | "left" | "right";
let move: Direction = "down";

*/ 
