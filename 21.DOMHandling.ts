/*

✅ What is DOM Handling in TypeScript?

DOM (Document Object Model) handling means accessing and manipulating HTML elements (like buttons, inputs, divs) using TypeScript.
It works the same as in JavaScript, but TypeScript adds type safety and compile-time error checking.

----------------------------------------------

✅ accessing elements basic example

var headinElm = document.querySelector("h1");
console.log(headinElm);
console.log(headinElm?.innerHTML);
console.log(headinElm?.innerText);
console.log(headinElm?.textContent);

here The question mark (?.) is used for optional chaining, which prevents errors by safely returning undefined if the element is null or undefined.

----------------------------------------------

✅ Casting to Specific Element Types

If you know the exact type of element, you can cast it.

const input = document.getElementById("name") as HTMLInputElement;

input.addEventListener("input", () => {
  console.log(input.value);
});

Here, we cast the element to HTMLInputElement to access the value property without TypeScript errors.

----------------------------------------------

✅ Using querySelector with Generics

A safer way is to use generics with querySelector.

const input = document.querySelector<HTMLInputElement>("#name");

input?.addEventListener("input", () => {
    console.log(input?.value);
});

This avoids unnecessary as casting and makes the code cleaner.

----------------------------------------------

✅ Event Handling in TypeScript

In JavaScript, event objects are loosely typed. In TypeScript, they are strongly typed.

const input = document.querySelector<HTMLInputElement>("#username");

input?.addEventListener("input", (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
});

TypeScript ensures you handle the event correctly.

*/


