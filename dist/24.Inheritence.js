"use strict";
/*

✅ 1. What is Inheritance?

Inheritance = reusing code by creating a new class from an existing class.
The parent (base) class → defines common properties & methods.
The child (derived) class → can reuse parent’s code and add its own.

This avoids code duplication and makes programs organized.

----------------------------------------------

✅ 2. Basic Inheritance Example

class Person {
    public name: string;
    protected age: number;
    private salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showSalary(): void {
        console.log(`Salary: ${this.salary}`); // ✅ private accessible only inside class
    }
}

class Employee extends Person {
    constructor(name: string, age: number, salary: number, public job: string) {
        super(name, age, salary);
    }

    showInfo(): void {
        console.log(`Name: ${this.name}`);  // ✅ public
        console.log(`Age: ${this.age}`);    // ✅ protected → allowed in subclass
        // console.log(this.salary);        // ❌ private → not accessible
    }
}

const emp = new Employee("Bob", 30, 50000, "Designer");
emp.showInfo();
emp.showSalary();


*/
