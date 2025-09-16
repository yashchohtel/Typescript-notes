/*

✅ Symbol in TypeScript (Detailed Explanation)

The Symbol is a unique and immutable primitive value used as an identifier for object properties. It ensures that property keys are unique and avoids name collisions when working with objects, libraries, or frameworks.

Why do we need Symbol?

To create unique property keys in objects
To avoid conflicts when multiple libraries or code pieces use the same property name
To ensure the property is not accidentally accessed or overridden
To represent hidden or internal metadata in objects
______________________________________________________________

✅ How to create a Symbol

You use the built-in Symbol() function to create a new symbol.

let sym1: symbol = Symbol();
let sym2: symbol = Symbol();

console.log(sym1 === sym2); // false → every symbol is unique

You can also give a description to a symbol for debugging purposes.

let symWithDesc: symbol = Symbol("id");
console.log(symWithDesc); // Symbol(id)

Note: The description is only for display and debugging. It does not affect the uniqueness of the symbol
______________________________________________________________

✅ Using Symbol as an object key

Symbols are often used as keys in objects so that they don’t clash with other properties.

let id = Symbol("id");

let user = {
    name: "Yash",
    [id]: 12345
    };
    
console.log(user.name); // Yash
console.log(user[id]);   // 12345
______________________________________________________________

✅ Why symbol keys are hidden

Symbols are not enumerable, meaning they don’t show up in:

✔ for...in loops
✔ Object.keys()
✔ Object.getOwnPropertyNames()

Example:

for (let key in user) {
  console.log(key); // only 'name' will print, symbol property is hidden
}

console.log(Object.keys(user)); // ['name']


To access symbol keys, you can use:

console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(id) ]


*/ 
