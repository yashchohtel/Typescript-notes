"use strict";
/*

✅ What is an Index Signature?

An index signature allows you to define the type of keys and values in an object when you don’t know all the property names in advance.

It tells TypeScript:
“This object can have properties with keys of this type, and their values will always be of that type.”


✅ Basic Example
interface UserAgeMap {
  [username: string]: number; // key: string, value: number
}

const ages: UserAgeMap = {
  alice: 25,
  bob: 30,
  charlie: 22
};

console.log(ages["alice"]); // 25

Here, any string key will map to a number value.

----------------------------------------------

*/ 
