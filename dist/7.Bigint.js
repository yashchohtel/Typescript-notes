"use strict";
/*

✅ BigInt in TypeScript (Detailed Explanation)

The BigInt data type is used to represent whole numbers that are too large to be safely stored or manipulated using the number type.

Why do we need BigInt?

JavaScript’s number type is based on 64-bit floating-point numbers (IEEE 754 standard), which can safely represent integers only up to:

✔ 2^53 - 1 = 9,007,199,254,740,991

If you try to store a larger integer, you lose precision and get incorrect results.
BigInt helps you safely work with very large integers without precision errors.

---------------------------------------------

✅ How to create BigInt values

You can create a BigInt in two ways:

➤ By adding n at the end of a number
let bigNumber: bigint = 123456789012345678901234567890n;
console.log(bigNumber);

➤ By using the BigInt() constructor
let bigNumber2: bigint = BigInt("123456789012345678901234567890");
console.log(bigNumber2);

---------------------------------------------

✅ Operations with BigInt

You can perform basic arithmetic operations with BigInt similar to number type.

let x: bigint = 1000000000000000000000n;
let y: bigint = 2000000000000000000000n;

console.log(x + y); // 3000000000000000000000n
console.log(y - x); // 1000000000000000000000n
console.log(x * 2n); // 2000000000000000000000n
console.log(y / 2n); // 1000000000000000000000n

---------------------------------------------

✅ Important rules with BigInt

BigInt and number cannot be mixed in operations directly, This will cause an error:

let big: bigint = 10n;
let num: number = 5;

console.log(big + num); // ❌ Error: Cannot mix BigInt and other types

You need to explicitly convert between them:

console.log(big + BigInt(num)); // ✅ works
console.log(Number(big) + num); // ✅ works but might lose precision if value is too large

---------------------------------------------

*/
