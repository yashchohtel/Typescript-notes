/*

🔹 1. What is never?

never is a special return type for functions that never successfully complete.
It represents a value that never happens.

👉 Example cases:

A function that always throws an error.
A function that never ends (infinite loop).
Exhaustive type checking (advanced use case with switch/if).

---------------------------------------------

🔹 2. Functions that return never

Case 1: Function that throws an error

function throwError(message: string): never {
    throw new Error(message); // never returns anything
}

Since the function always crashes, it can never return normally → return type is never.

Case 2: Infinite loop
function runForever(): never {
    while (true) {
        console.log("Running...");
    }
}

This function never exits → no return → never.

*/ 