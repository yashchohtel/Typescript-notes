/*

🔹 1. What is an Intersection Type?

An intersection type combines multiple types into one using the & operator.
It means: the value must satisfy all the types at the same time.

Syntax: type Combined = TypeA & TypeB;

----------------------------------------------

🔹 2. Basic Example

type Person = {
    name: string;
};

type Employee = {
    employeeId: number;
};

type Staff = Person & Employee;

const staffMember: Staff = {
    name: "Alice",
    employeeId: 101
};

Here, Staff must have both name (from Person) and employeeId (from Employee).

----------------------------------------------

🔹 4. More Complex Example
type ContactInfo = {
    email: string;
    phone: string;
};

type Address = {
    city: string;
    country: string;
};

type User = ContactInfo & Address;

const user: User = {
    email: "alice@example.com",
    phone: "1234567890",
    city: "New York",
    country: "USA"
};

User must include all properties from both ContactInfo and Address.

----------------------------------------------

🔹 5. Intersection with Interfaces

You can also use interfaces with &.

interface Developer {
    skills: string[];
}

interface Manager {
    teamSize: number;
}

type TechLead = Developer & Manager;

const lead: TechLead = {
    skills: ["TypeScript", "React"],
    teamSize: 5
};

----------------------------------------------

🔹 7. Practical Use Cases

1. Combining multiple object types

type WithTimestamps = { createdAt: Date; updatedAt: Date };
type User = { id: number; name: string };
type UserWithTimestamps = User & WithTimestamps;

const u: UserWithTimestamps = {
    id: 1,
    name: "Alice",
    createdAt: new Date(),
    updatedAt: new Date()
};


2. Mixins (combining behaviors)

interface CanFly { fly(): void; }
interface CanSwim { swim(): void; }

type SuperHero = CanFly & CanSwim;

const hero: SuperHero = {
    fly() { console.log("Flying!"); },
    swim() { console.log("Swimming!"); }
};

3. API Response (combining shared properties)

type SuccessResponse = { status: "success"; data: object };
type ErrorResponse = { status: "error"; error: string };

type ApiResponse = SuccessResponse | ErrorResponse;
// Intersection not needed here, but if two responses shared required fields, & makes sense

*/ 