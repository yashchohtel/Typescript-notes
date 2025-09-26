"use strict";
/*
✅ What is a Namespace?

A namespace in TypeScript is a way to organize code into a logical grouping.
It helps prevent name collisions in larger projects.
Namespaces are internal modules — different from external ES6 modules.

Think of it as a container for variables, functions, classes, or interfaces.

Basic Example :-

namespace MyMath {
  export function add(a: number, b: number): number {
    return a + b;
  }

  export function multiply(a: number, b: number): number {
    return a * b;
  }
}

// Access functions using namespace
console.log(MyMath.add(5, 10));      // 15
console.log(MyMath.multiply(2, 3));  // 6

Notice the export keyword — without it, members inside the namespace are private.

----------------------------------------------

✅ Nested Namespaces

namespace Shapes {
    export namespace Circle {
        export function area(radius: number): number {
            return Math.PI * radius * radius;
        }
    }

    export namespace Rectangle {
        export function area(width: number, height: number): number {
            return width * height;
        }
    }
}

console.log(Shapes.Circle.area(5));       // 78.5398...
console.log(Shapes.Rectangle.area(4, 6)); // 24

----------------------------------------------

✅ Splitting Namespaces Across Files

Create a namespace in multiple files.

Use /// <reference path="filename.ts" /> to link files.

// file: mathUtils.ts
namespace MathUtils {
  export function square(x: number) { return x * x; }
}

// file: main.ts
/// <reference path="mathUtils.ts" />
console.log(MathUtils.square(5)); // 25

This way, namespaces can be spread across multiple files.

*/
