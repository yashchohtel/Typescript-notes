"use strict";
/*
🔹 1. What is enum?

An enum (short for enumeration) is a special TypeScript feature that lets you define a set of named constants.
Instead of using random strings or numbers everywhere, you define an enum once and reuse it.

Think of it like a group of related options.

----------------------------------------------

🔹 2. Syntax

enum Direction {
  Up,
  Down,
  Left,
  Right
}

By default, Up = 0, Down = 1, Left = 2, Right = 3.

let move: Direction;

move = Direction.Up;    // 0
move = Direction.Right; // 3

----------------------------------------------

🔹 3. Number Enums (Default)

Enums auto-assign incrementing numbers starting from 0.

enum Status {
  Success,   // 0
  Error,     // 1
  Loading    // 2
}

console.log(Status.Success); // 0
console.log(Status.Error);   // 1
console.log(Status.Loading); // 2

----------------------------------------------

*/ 
