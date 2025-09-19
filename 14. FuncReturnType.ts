/*

🔹 1. What is a function return type?

The return type tells TypeScript what kind of value a function will return.
This helps catch errors early because TypeScript will complain if you try to return the wrong type.

---------------------------------------------

🔹 2. Syntax

You define a return type after the parameter list using :

function functionName(parameters): ReturnType {
    // logic
    return value;
}

---------------------------------------------

🔹 3. Examples
Example 1: Number return type
function add(a: number, b: number): number {
    return a + b; // must return a number
}

Example 2: String return type
function greet(name: string): string {
    return `Hello, ${name}`;
}

Example 3: Boolean return type
function isEven(num: number): boolean {
    return num % 2 === 0;
}

---------------------------------------------

🔹 4. void Return Type

If a function doesn’t return anything, use void.

function logMessage(message: string): void {
    console.log(message);
}


✔ It’s like saying: “this function runs, but don’t expect a value.”

---------------------------------------------

🔹 5. never Return Type

Used when a function never returns normally (e.g., throws an error or runs forever).

function throwError(msg: string): never {
    throw new Error(msg);
}

function infiniteLoop(): never {
    while (true) {
        console.log("running...");
    }
}

---------------------------------------------

🔹 6. Union Return Types

A function can return multiple types (union type):

function formatValue(value: number | string): string | number {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value * 2;
}


*/ 

