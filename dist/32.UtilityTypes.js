"use strict";
/*

✅ What are Utility Types?

Utility types are predefined generic types provided by TypeScript.
They help you transform existing types instead of writing everything from scratch.

Example uses: making properties optional, required, readonly, picking subsets, etc.

----------------------------------------------

✅ Common Utility Types

1. Partial<Type> :- Makes all properties in Type optional.

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = Partial<User>;

let user1: PartialUser = {
    name: "Alice",
    id: 1,
    // age is optional
}

// Equivalent to:
// { id?: number; name?: string; age?: number }

---------------------------------------------

2. Required<T>

Opposite of Partial → makes all properties required.

interface User {
  id?: number;
  name?: string;
}

type RequiredUser = Required<User>;

let user2: RequiredUser = {
    id:1,
    name: "Bob"
    // both id and name are required
}

// { id: number; name: string }

---------------------------------------------

3. Readonly<T>

Makes all properties readonly (cannot be reassigned).

interface User {
  id: number;
  name: string;
}

const user: Readonly<User> = { id: 1, name: "Alice" };
// user.id = 2; ❌ Error

----------------------------------------------

4. Pick<T, K>

Creates a type with only the chosen keys.

interface User {
  id: number;
  name: string;
  age: number;
}

type UserName = Pick<User, "id" | "name">;

let user3: UserName = { id: 1, name: "Charlie" };
console.log(user3);

// { id: number; name: string }

----------------------------------------------

5. Omit<T, K>

Opposite of Pick → excludes given keys.

interface User {
  id: number;
  name: string;
  age: number;
}

type UserWithoutAge = Omit<User, "age">;
let user4 : UserWithoutAge = { id: 1, name: "Charlie" };
console.log(user4);

// { id: number; name: string }

----------------------------------------------

7. Exclude<T, U>

Removes types from T that are assignable to U.

type MyUnion = "a" | "b" | "c";
type Excluded = Exclude<MyUnion, "a" | "b">;

let excludedValue: Excluded = "c";
console.log(excludedValue); // Output: c

----------------------------------------------

8. Extract<T, U>

Keeps only types from T that are assignable to U.

type MyUnion = "a" | "b" | "c";

type Extracted = Extract<MyUnion, "a" | "b">;
let extractedValue: Extracted = "a";
console.log(extractedValue); // Output: a

----------------------------------------------

9. NonNullable<T>

Removes null and undefined from a type.

type MaybeString = string | null | undefined;
type StrictString = NonNullable<MaybeString>;

let str: StrictString = "Hello, TypeScript!";
console.log(str);
// let str2: StrictString = null; // ❌ Error


----------------------------------------------

*/
