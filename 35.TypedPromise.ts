/*

✅ What is a Typed Promise?

In JavaScript, a Promise represents a value that will be available in the future (resolved or rejected).
In TypeScript, we can add type annotations to Promises, so we know what type of data they will eventually return.


Example (JS style, no type safety):

function fetchData() {
  return new Promise((resolve) => {
    resolve("Data received");
  });
}

We don’t know the type of value until runtime.

----------------------------------------------

✅ Typed Promise in TypeScript
function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    resolve("Data received");
  });
}

Now TypeScript knows this function returns a Promise<string> → meaning the resolved value will be a string.

----------------------------------------------

✅ Example with Number
function getNumber(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(42), 1000);
  });
}

getNumber().then((num) => {
  console.log(num); // ✅ TypeScript knows num is a number
});

*/ 