"use strict";
/*

01. WHAT IS TYPESCRIPT [INTRODUCTION]

TypeScript is a programming language developed by Microsoft.

It is a superset of JavaScript → meaning every valid JavaScript code is also valid TypeScript.
It adds static typing (you can define the type of variables, functions, objects, etc.).
It helps catch errors at compile time instead of runtime.
It makes code more predictable, maintainable, and scalable, especially in large projects.
TypeScript code is not directly run by the browser; it is compiled into JavaScript first.

In short:
JavaScript = dynamic (no type checking)
TypeScript = JavaScript + type checking + extra features

______________________________________________________________

1. What is static typing?

Typing = defining what kind of value a variable can hold (e.g., string, number, boolean).
Static typing = these types are checked before running the code (during compilation).

let age: number = 25;
age = "hello"; // This will throw Error before running the code

------------------

2. What is compile time or runtime?

Compile time = the phase when your code is translated into another form before execution.
In TypeScript, compilation checks types and converts TS into plain JavaScript.
Runtime = when your program is actually running in the browser or Node.js.
Static typing works at compile time, not runtime.

------------------

3. What is compiler

A compiler translates the entire program (source code) into another language (usually machine code or another programming language) before execution.
Once compiled, you run the compiled output, not the original source code.

Example:

TypeScript → compiled into JavaScript.

C, C++ → compiled into machine code (binary .exe).

------------------

4. What is Interpreter

An interpreter translates and executes code line by line at runtime (while the program is running).
No separate compiled output is created.

Example:

JavaScript in the browser is interpreted by the JavaScript engine (like V8 in Chrome).
Python is mostly interpreted.

In TypeScript’s case:

TypeScript → Compiler → JavaScript
Then JavaScript → Interpreter (browser’s JS engine) → Runs program

*/ 
