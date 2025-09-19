/*

🔹 1. What is an Interface?

An interface is a way to define the shape (structure) of an object in TypeScript.

It tells TypeScript:
what properties an object should have,
what types those properties are,
and optionally, what methods it should include.

Think of an interface as a blueprint for objects.

----------------------------------------------

🔹 2. Basic Example
interface User {
    id: number;
    name: string;
    isAdmin: boolean;
}

const user1: User = {
    id: 1,
    name: "Alice",
    isAdmin: true
};

Here, the object user1 must follow the User blueprint:

id → number
name → string
isAdmin → boolean

If you miss one or use the wrong type, TypeScript gives an error.

----------------------------------------------

🔹 3. Optional Properties

You can make a property optional using ?.

interface User {
    id: number;
    name: string;
    age?: number; // optional
}

const u1: User = { id: 1, name: "Alice" };       // ✅ valid
const u2: User = { id: 2, name: "Bob", age: 25 } // ✅ valid

----------------------------------------------

🔹 4. Readonly Properties

If a property should never change, use readonly.

interface User {
    readonly id: number;
    name: string;
}

const u: User = { id: 1, name: "Alice" };
u.name = "Bob";   // ✅ allowed
u.id = 2;         // ❌ Error: Cannot assign to 'id'

----------------------------------------------

🔹 5. Methods in Interfaces

Interfaces can also define methods.

interface Person {
    name: string;
    greet(): void;   // method with no return
    sum(num1:number, num2:number):number; // method with return type number
}

const p: Person = {
    name: "Alice",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
    sum(num1:number, num2:number):number {
        return num1 + num2;
    }
};

const result = p.greet(); // Hello, my name is Alice
console.log(p.sum(10, 20)); // 30

----------------------------------------------

🔹 6. Function Types

Interfaces can describe the type of a function.

interface Add {
    (a: number, b: number): number;
}

const addNumbers: Add = (x, y) => x + y;

This ensures addNumbers is always a function that takes 2 numbers and returns a number.

----------------------------------------------

🔹 7. Extending Interfaces

Interfaces can inherit from other interfaces using extends.

interface User {
    id: number;
    name: string;
}

interface Admin extends User {
    permissions: string[];
}

const admin: Admin = {
    id: 1,
    name: "Alice",
    permissions: ["read", "write"]
};

----------------------------------------------

🔹 8. Interfaces vs Type Aliases

Type aliases (type) and interfaces are similar, but:

interface → Best for objects & class contracts.

type → More flexible (can define unions, primitives, intersections).

// Using interface
interface User {
    id: number;
    name: string;
}

// Using type alias
type UserType = {
    id: number;
    name: string;
};


Both work the same for objects, but type can also do this:

type Status = "success" | "error" | "loading"; // cannot be done with interface

*/ 




