/*

✅ 1. What is a Class?

A class is like a blueprint for creating objects.
It defines properties (variables) and methods (functions) that an object can have.
In JavaScript, classes were introduced in ES6:

// JavaScript class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Alice", 25);
person1.greet(); // Hello, my name is Alice


----------------------------------------------

✅  2. Class in TypeScript

TypeScript adds type safety to classes. You can declare types for properties and method parameters/return values.

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Alice", 25);
person1.greet();

Differences from JS:
name: string; → TypeScript knows name must be a string.
age: number; → TypeScript ensures age is a number.
greet(): void → TypeScript knows this method returns nothing.



*/ 



