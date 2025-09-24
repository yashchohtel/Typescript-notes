"use strict";
/*
✅ What is a Type Guard?

A type guard is a special check that helps TypeScript narrow down the type of a variable at runtime.
Because in TypeScript, a variable can have union types (example: string | number), the compiler doesn’t always know which type it is.

A type guard tells TypeScript: “Hey, if this condition is true, then inside this block the variable is of this type.”

----------------------------------------------

✅ Example Without Type Guard

function printLength(value: string | number) {
  // TypeScript error: Property 'length' does not exist on type 'number'
  // console.log(value.length);

  console.log(value);
}

printLength("Hello"); // Works fine
printLength(123);     // Works fine
printLength(true);  // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

Here, value can be either string or number, so TS won’t allow value.length.

----------------------------------------------

✅ Example With Type Guard (typeof)
function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log("String length:", value.length); // ✅ safe
  } else {
    console.log("Number value:", value); // ✅ safe
  }
}

printLength("Hello"); // String length: 5
printLength(42);      // Number value: 42

Now TypeScript knows that inside the if block, value is a string, and inside else, it’s a number.

----------------------------------------------

✅ Common Type Guards

1. typeof

Used for primitive types (string, number, boolean, symbol, bigint).

if (typeof x === "string") { ... }

----------------

2. instanceof

Used for checking if an object is an instance of a class.

class Dog { bark() {} }
class Cat { meow() {} }

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

----------------

3. in

Used to check if a property exists in an object.

type Car = { drive: () => void };
type Bike = { ride: () => void };

function move(vehicle: Car | Bike) {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.ride();
  }
}

------------------------------

*/
