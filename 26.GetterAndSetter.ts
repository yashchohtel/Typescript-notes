/*

✅ What are Getter and Setter?

Getter → a special method used to read the value of a property.
Setter → a special method used to update the value of a property.
They are part of encapsulation → instead of exposing properties directly, you control how they are accessed or modified.
With getters and setters, you can add extra logic like validation, formatting, or calculations.

----------------------------------------------

✅ Example in JavaScript

class Student {
  constructor(name) {
    this._name = name; // convention: "_" means "private-like"
  }

  // getter
  get name() {
    return this._name.toUpperCase(); // always return in caps
  }

  // setter
  set name(newName) {
    if (newName.length < 3) {
      console.log("Name too short!");
    } else {
      this._name = newName;
    }
  }
}

const s1 = new Student("yash");
console.log(s1.name); // getter -> "YASH"

s1.name = "Al";       // setter -> "Name too short!"
s1.name = "Arjun";    // setter -> updates the value
console.log(s1.name); // "ARJUN"

Notice: we don’t call them like functions (()), we access them like normal properties.

----------------------------------------------

✅ Example in TypeScript
class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  // getter
  get balance(): number {
    return this._balance;
  }

  // setter
  set balance(amount: number) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = amount;
  }
}

const account = new BankAccount(1000);
console.log(account.balance); // getter -> 1000

account.balance = 1500;       // setter -> updates
console.log(account.balance); // getter -> 1500

// account.balance = -200;    // Error: "Balance cannot be negative"

TypeScript adds type safety → getter return type and setter parameter type must match.

*/ 
