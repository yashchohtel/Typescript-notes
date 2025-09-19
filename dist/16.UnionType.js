"use strict";
/*

🔹 1. What is a Union Type?

A union type allows a variable or parameter to hold more than one type.
You define it using the | (pipe) symbol.

Syntax:

let variable: type1 | type2 | type3;
It means: the variable can be either type1 OR type2 OR type3.

----------------------------------------------

🔹 2. Examples

Example 1: String OR Number
let id: string | number;

id = 101;      // ✅ number
id = "abc";    // ✅ string
id = true;     // ❌ Error

Example 2: Function Parameter
function printId(id: string | number): void {
    console.log("ID:", id);
}

printId(101);     // ✅
printId("abc");   // ✅
printId(true);    // ❌

Example 3: Array with multiple types
let data: (string | number)[] = [1, "Alice", 2, "Bob"];

Every element is either a string or number.

----------------------------------------------

🔹 3. Using Type Guards with Union

When using unions, you often need to check the type at runtime before using it.

function getLength(value: string | number): number {
    if (typeof value === "string") {
        return value.length; // string case
    } else {
        return value;        // number case
    }
}

console.log(getLength("Hello")); // 5
console.log(getLength(123));     // 123

----------------------------------------------

🔹 4. Union with Custom Types

You can also use type aliases with unions for readability.

type Status = "success" | "error" | "loading";

function handleStatus(status: Status) {
    if (status === "success") console.log("✅ Success!");
    else if (status === "error") console.log("❌ Error!");
    else console.log("⏳ Loading...");
}

handleStatus("success");
handleStatus("loading");

This is super useful for enums-like behavior without creating an enum.

*/ 
