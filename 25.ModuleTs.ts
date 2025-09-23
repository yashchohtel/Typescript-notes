/*

✅ What is a Module?

A module is simply a file in TypeScript (or JavaScript) that can export and import code.
By default, every .ts file is treated as a module if it contains import or export.
Modules help organize code into smaller, reusable pieces instead of writing everything in one big file.

----------------------------------------------

✅ Exporting in TypeScript

I. Named Exports - You can export multiple things from a module using named exports.

// file: mathUtils.ts
export function add(a: number, b: number): number {
  return a + b;
}

export const PI = 3.14;

// file: app.ts
import { add, PI } from "./mathUtils";

console.log(add(2, 3));  // 5
console.log(PI);         // 3.14

Multiple things can be exported.

---------------------

II. Default Exports - A module can have one default export. This is useful when you want to export a single main thing from a module.

// file: logger.ts
export default function logMessage(message: string): void {
  console.log("Log:", message);
}

// file: app.ts
import logMessage from "./logger";

logMessage("Hello World!");

----------------------------------------------

✅ Importing Everything

// file: mathUtils.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

// file: app.ts
import * as MathUtils from "./mathUtils";

console.log(MathUtils.add(5, 3));
console.log(MathUtils.subtract(10, 4));

*/ 