"use strict";
/*

Boolean Data Type in TypeScript :- The boolean data type is used to represent logical values. It can only have two possible values: true or false. Boolean values are typically used in conditions, loops, and comparisons to control the flow of the program.

Key points about boolean type

It stores only true or false
It’s mainly used for decision making (conditions)
TypeScript ensures that only boolean values are assigned to boolean variables
Operations like comparisons return boolean results
It helps write safer, more predictable code

How to define a boolean in TypeScript - You explicitly specify the type as boolean using the keyword.

let isLoggedIn: boolean = true;
let hasAccess: boolean = false;

---------------------------------------------

✅ Boolean from expressions

Most boolean values come from expressions like comparisons or logical operations.

Comparison example:
let a: number = 10;
let b: number = 20;

let isGreater: boolean = a > b;
console.log(isGreater); // false

Equality example:
let name1: string = "Yash";
let name2: string = "Amit";

let isSame: boolean = name1 === name2;
console.log(isSame); // false

---------------------------------------------

✅ Logical operators with booleans

You can combine or manipulate boolean values using logical operators.

AND (&&):
let isAdult: boolean = true;
let hasTicket: boolean = false;

let canEnter: boolean = isAdult && hasTicket;
console.log(canEnter); // false

OR (||):
let isHoliday: boolean = false;
let isWeekend: boolean = true;

let canRest: boolean = isHoliday || isWeekend;
console.log(canRest); // true

NOT (!):
let isOpen: boolean = false;
console.log(!isOpen); // true

---------------------------------------------

✅ Boolean from other types

Sometimes you want to convert other types into a boolean value.

In JavaScript/TypeScript, values like 0, "", null, undefined, and NaN are considered falsy → converted to false.
All other values are truthy → converted to true.

Example:
let emptyString: string = "";
let zero: number = 0;
let nullValue: null = null;
let undefinedValue: undefined = undefined;
let nanValue: number = NaN;

console.log(Boolean(emptyString));    // false
console.log(Boolean(zero));           // false
console.log(Boolean(nullValue));      // false
console.log(Boolean(undefinedValue)); // false
console.log(Boolean(nanValue));       // false

----------------------------------------------

✅ Common uses of booleans

Conditional statements

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}


Ternary operator

let isAvailable: boolean = true;
let message: string = isAvailable ? "Available" : "Not available";
console.log(message);


Loops

let hasMore: boolean = true;
while (hasMore) {
  console.log("Processing...");
  hasMore = false; // stop loop
}

*/
