/*

🔹 1. What is a Parameter Type?

In TypeScript, you can declare the type of each parameter in a function.
This tells TypeScript:

what type of values can be passed,
and prevents wrong arguments from being used.

👉 Syntax:

function functionName(paramName: type, paramName2: type): returnType {
    // function body
}

---------------------------------------------

🔹 2. Examples
Example 1: Simple parameter types
function add(a: number, b: number): number {
    return a + b;
}

add(5, 10);    // ✅ OK
add("5", 10);  // ❌ Error: Argument of type 'string' is not assignable to 'number'

Example 2: String parameter
function greet(name: string): string {
    return `Hello, ${name}`;
}

console.log(greet("Alice")); // ✅ "Hello, Alice"

Example 3: Multiple parameter types
function describePerson(name: string, age: number, isStudent: boolean): string {
    return `${name} is ${age} years old. Student: ${isStudent}`;
}

----------------------------------------------

🔹 3. Optional Parameters

Sometimes a parameter is not required. You can mark it with ?.

function greet(name: string, message?: string): string {
    return message ? `${message}, ${name}` : `Hello, ${name}`;
}

console.log(greet("Alice"));            // "Hello, Alice"
console.log(greet("Alice", "Goodbye")); // "Goodbye, Alice"

Optional parameters are automatically undefined if not provided.

----------------------------------------------

🔹 4. Default Parameters

You can also assign default values.

function greet(name: string, message: string = "Hello"): string {
    return `${message}, ${name}`;
}

console.log(greet("Alice"));          // "Hello, Alice"
console.log(greet("Alice", "Hi"));    // "Hi, Alice"

----------------------------------------------

🔹 5. Rest Parameters

Use ... to accept any number of arguments.

function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(10, 20, 30, 40)); // 100

TypeScript knows numbers is an array of numbers (number[]).

----------------------------------------------

🔹 6. Union Types in Parameters

A parameter can accept multiple types.

function printId(id: string | number): void {
    console.log("ID:", id);
}

printId(101);     // ✅
printId("abc");   // ✅
printId(true);    // ❌ Error

----------------------------------------------

🔹 7. Object Parameters

You can also type entire objects.

function printUser(user: { id: number; name: string }): void {
    console.log(`ID: ${user.id}, Name: ${user.name}`);
}

printUser({ id: 1, name: "Alice" }); // ✅



*/ 