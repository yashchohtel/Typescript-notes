"use strict";
/*

✅ 1. What are Access Modifiers?

Access modifiers control visibility of class members (properties and methods).
They determine where you can access a property or method:

Inside the class only
Inside class and subclasses
Anywhere

----------------------------------------------

✅ 2. TypeScript has three main access modifiers:
__________________________________________________________
| Modifier   | Inside Class | In Subclass | Outside Class
|------------|--------------|-------------|---------------
| public     | ✅ Yes       | ✅ Yes      | ✅ Yes
| private    | ✅ Yes       | ❌ No       | ❌ No
| protected  | ✅ Yes       | ✅ Yes      | ❌ No
|____________|______________|______________|_______________

------------------

I. public

Default access modifier if you don’t specify one.

Can be accessed anywhere.

class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p = new Person("Alice");
console.log(p.name); // ✅ Works
p.greet();           // ✅ Works

------------------

II. private

Can only be accessed inside the class.
Not accessible outside or in subclasses.
Useful for hiding internal implementation.

class Person {
  private age: number;

  constructor(age: number) {
    this.age = age;
  }

  getAge(): number {
    return this.age; // ✅ Can access inside class
  }
}

const p = new Person(25);
console.log(p.getAge()); // ✅ Works
// console.log(p.age);   // ❌ Error: age is private


This ensures that no external code can change age directly.-

*/ 
