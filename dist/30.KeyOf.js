"use strict";
/*

✅ What is keyof?

keyof is a TypeScript operator that takes an object type and produces a union of its keys (property names).

Think of it like:
"Give me all the property names of this type as string literal types."

----------------------------------------------

✅ Basic Example
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

type PersonKeys = keyof Person;
// PersonKeys = "name" | "age" | "isStudent"


✅ Now PersonKeys is a union of the keys of Person.

*/
