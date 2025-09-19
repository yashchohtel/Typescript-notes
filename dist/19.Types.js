"use strict";
/*

🔹 1. What is type in TypeScript?

In TypeScript, type is a way to create your own custom type alias.
It allows you to name a type (like number, string, object, union, intersection, etc.) so you can reuse it across your code.

Syntax:

type MyType = ...;

Think of it as a shortcut or label for describing complex data structures.

----------------------------------------------

🔹 2. Simple Example
type Username = string;
type Age = number;

let userName: Username = "Alice";
let userAge: Age = 25;

Here, Username and Age are aliases for string and number.
They don’t create new types — just give them meaningful names.

----------------------------------------------

🔹 3. Why use type?

To make code readable and self-documenting.
To reuse complex structures.

To apply restrictions with unions/intersections.

----------------------------------------------

🔹 4. Type for Objects
type User = {
    id: number;
    name: string;
    isAdmin: boolean;
};

const u1: User = { id: 1, name: "Alice", isAdmin: true };

Now User can be reused wherever you need the same shape.

----------------------------------------------

🔹 5. Type with Union
type Status = "success" | "error" | "loading";

let currentStatus: Status;

currentStatus = "success"; ✅
currentStatus = "error";   ✅
currentStatus = "pending"; ❌ (not allowed)

Status can only take one of the allowed values.

----------------------------------------------

🔹 6. Type with Intersection
type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const s1: Staff = {
    name: "Alice",
    employeeId: 123
};

Staff is a combination of Person + Employee.

----------------------------------------------

🔹 7. Type for Functions
type Add = (a: number, b: number) => number;

const add: Add = (x, y) => x + y;

The Add type ensures every function using it takes two numbers and returns a number.

----------------------------------------------

🔹 8. Type for Arrays and Tuples
type StringArray = string[];
let arr: StringArray = ["apple", "banana"];

type TupleExample = [string, number];
let tup: TupleExample = ["Alice", 25];


*/ 
