"use strict";
/*

✅ What is a Decorator?

A Decorator is a special kind of function that can be attached to:

classes
class methods
properties
accessors
parameters

It allows you to add extra behavior or modify behavior without changing the original code too much.

Think of it as a “wrapper” or “annotation” for classes and their members.

----------------------------------------------

✅ How to Enable Decorators

In your tsconfig.json, enable this:

{
  "experimentalDecorators": true
}
  
----------------------------------------------

✅ Basic Class Decorator

function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Alice";
}

const p = new Person();

@Logger runs when the class is defined (not when an object is created).

----------------------------------------------

overrigind functions

function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

  descriptor.value = function sum(a: number, b: number): string {
    return `The sum is: ${a + b}`;
  }

}

class CustomMath {

  @logMethod
  sum(a: number, b: number): number {
    return a + b;
  }

}

let math1 = new CustomMath();
console.log(math1.sum(2, 3)); // 5

*/
