/*

✅ 1. What is an Object?

An object is a collection of key–value pairs. In TypeScript, you must define the shape of the object — meaning which keys exist, and what type of values they hold.

Example – JavaScript object
let user = { id: 1, name: "Alice" };

Example – TypeScript object
let user: { id: number; name: string } = { id: 1, name: "Alice" };

TypeScript makes sure: id must always be a number, name must always be a string

---------------------------------------------

✅ 2. Object Types

You can define object types in 3 main ways:

(a) Inline Type
let car: { brand: string; year: number } = {
    brand: "Toyota",
    year: 2020
};

(b) Type Alias
type Car = {
    brand: string;
    year: number;
};

let car: Car = { brand: "Tesla", year: 2023 };

(c) Interface
interface Car {
    brand: string;
    year: number;
}

let car: Car = { brand: "BMW", year: 2021 };

type and interface are very similar — both describe object structure.
interface is more powerful when you need to extend (inherit) objects.

---------------------------------------------

✅ 3. Optional Properties

Some object properties may not always exist. Use ? for optional properties.

interface User {
    id: number;
    name: string;
    age?: number; // optional
}

let user1: User = { id: 1, name: "Alice" };
let user2: User = { id: 2, name: "Bob", age: 25 };

---------------------------------------------

✅ 4. Readonly Properties

Prevent modification of a property after object creation.

interface User {
    readonly id: number;
    name: string;
}

let user: User = { id: 1, name: "Alice" };
user.name = "Bob";   // ✅ Allowed
// user.id = 2;      // ❌ Error: Cannot assign to 'id'

---------------------------------------------

✅ 5. Nested Objects

Objects can contain other objects.

interface Address {
    city: string;
    country: string;
}

interface User {
    id: number;
    name: string;
    address: Address;
}

let user: User = {
    id: 1,
    name: "Alice",
    address: {
        city: "New York",
        country: "USA"
    }
};

---------------------------------------------

✅ 6. Intersection Types (Combining Objects)

You can merge multiple types:

type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

let staff: Staff = {
    name: "Alice",
    employeeId: 123
};


✔ Staff must have both name and employeeId.

---------------------------------------------

✅ 7. Extending Interfaces

interface can inherit from another interface.

interface Person {
    name: string;
}

interface Employee extends Person {
    employeeId: number;
}

let emp: Employee = {
    name: "Alice",
    employeeId: 101


*/ 