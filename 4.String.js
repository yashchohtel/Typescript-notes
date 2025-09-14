/*

String Data Type in TypeScript :-

The string data type is used to represent text. It is one of the most commonly used types in programming and TypeScript helps ensure type safety when working with strings.

Key points about string type :-

It stores textual data enclosed in single quotes ('), double quotes ("), or backticks (`)
TypeScript ensures that only strings can be assigned to variables defined as string
It supports operations like concatenation, template literals, and methods for manipulating text
Strings are immutable – meaning once created, they cannot be changed directly

---------------------------------------------

✅ How to define a string in TypeScript

You use the string keyword to specify that a variable holds a string value.

Example:

let name: string = "Yash";
let message: string = 'Hello, world!';
let greeting: string = `Hi, ${name}!`; // template literal

---------------------------------------------

✅ String operations

Concatenation - You can combine multiple strings using +.

let firstName: string = "Yash";
let lastName: string = "Chohtel";

let fullName: string = firstName + " " + lastName;
console.log(fullName); // Yash Chohtel

Template literals (recommended)
let name: string = "Amit";
let age: number = 25;

let message: string = `My name is ${name} and I am ${age} years old.`;
console.log(message); // My name is Amit and I am 25 years old.

---------------------------------------------

✅ String methods

You can use various built-in methods to manipulate strings.

Common methods:

let text: string = "  Hello World  ";

console.log(text.length);            // 15 → length of the string
console.log(text.toUpperCase());     // "  HELLO WORLD  "
console.log(text.toLowerCase());     // "  hello world  "
console.log(text.trim());            // "Hello World" → removes spaces at both ends
console.log(text.includes("World")); // true → checks if "World" is part of the string
console.log(text.startsWith("  He"));// true → checks the beginning
console.log(text.endsWith("ld  "));  // true → checks the end

---------------------------------------------

✅ Multi-line strings - With template literals, you can easily write strings that span multiple lines.

let message: string = `Hello,
This is a multi-line
string example.`;

console.log(message);

Output:

Hello,
This is a multi-line
string example.

---------------------------------------------

✅ Converting Other Data Types into Strings in TypeScript

You often need to convert values like numbers, booleans, or objects into strings. TypeScript helps you do this in a type-safe way using various methods.

=========

1. Using String() function

The String() function converts any value into a string.

Example – Number to string:
let num: number = 100;
let str: string = String(num);

console.log(str); // "100"
console.log(typeof str); // "string"

Example – Boolean to string:
let isActive: boolean = true;
let str: string = String(isActive);

console.log(str); // "true"

Example – Object to string:
let obj = { name: "Amit" };
let str: string = String(obj);

console.log(str); // "[object Object]"

=========

2. Using .toString() method

Most values (except null and undefined) have a .toString() method that converts them to a string.

Example – Number:
let num: number = 123;
let str: string = num.toString();

console.log(str); // "123"

Example – Boolean:
let flag: boolean = false;
let str: string = flag.toString();

console.log(str); // "false"

Example – Array:
let arr: number[] = [1, 2, 3];
let str: string = arr.toString();

console.log(str); // "1,2,3"

⚠ Note: If you try null.toString() or undefined.toString(), it will give an error because null and undefined don’t have the method.

=========

3. Using Template Literals

You can convert any value into a string by embedding it inside a template literal.

let num: number = 456;
let str: string = `${num}`;

console.log(str); // "456"

let isAvailable: boolean = true;
let str: string = `The status is ${isAvailable}`;

console.log(str); // "The status is true"

This method works for any value and is commonly used because it’s clean and readable.

=========

4. Using String concatenation with an empty string

You can add an empty string "" to any value to convert it into a string.

let num: number = 789;
let str: string = num + "";

console.log(str); // "789"

let boolVal: boolean = false;
let str: string = boolVal + "";

console.log(str); // "false"

This is a quick and simple trick but less explicit than using String() or .toString().

---------------------------------------------
*/
