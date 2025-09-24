"use strict";
/*

✅ What is static?

In a class, normally you create an object (instance) before using its properties or methods.
But when you use the static keyword, the property/method belongs to the class itself, not to any object.
That means you don’t need to create an instance — you can access it directly using the class name.

----------------------------------------------

✅ Example in JavaScript
class Calculator {
  static PI = 3.14;

  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.PI);       // 3.14
console.log(Calculator.add(5, 10)); // 15

// let c = new Calculator();
// console.log(c.PI); // ❌ Error, because PI is static (belongs to class, not object)

Here, PI and add are static → accessible only through Calculator, not through objects.

----------------------------------------------

✅ Example in TypeScript

class User {
  private static count: number = 0; // static property

  constructor(public name: string) {
    User.count++; // increment when new user is created
  }

  // static method
  static getUserCount(): number {
    return User.count;
  }
}

const u1 = new User("Alice");
const u2 = new User("Bob");

console.log(User.getUserCount()); // 2

The count property tracks how many users exist, but it’s shared across all instances because it’s static.

*/
class User {
    name;
    static count = 0; // static property
    constructor(name) {
        this.name = name;
        User.count++; // increment when new user is created
    }
    // static method
    static getUserCount() {
        return User.count;
    }
}
const u1 = new User("Alice");
const u2 = new User("Bob");
const u3 = new User("jone");
console.log(User.getUserCount()); // 3
