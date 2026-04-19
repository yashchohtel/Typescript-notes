

/*

any and unknown are two special (but very important) types in TypeScript. They are both about “values whose type we don’t know at compile time.”, But they behave very differently. Let’s break it down step by step.

---------------------------------------------

🔹 1. any

any means “disable type checking for this variable.”

You can assign anything to it, and you can call anything on it.

Basically, it turns TypeScript back into JavaScript. 😅

Example
let data: any;

data = 10;        // ✅ number
data = "hello";   // ✅ string
data = true;      // ✅ boolean

data.toUpperCase();   // ✅ Works, but risky! (if data isn’t string, runtime error)

⚠️ Problem: If you misuse any, TypeScript won’t warn you, and you’ll only see errors at runtime.

---------------------------------------------

2. unknown

unknown is safer than any.

You can assign anything to unknown, BUT you cannot use it directly unless you check its type first.

Example
let value: unknown;

value = 10;
value = "hello";

// ❌ Error: TypeScript blocks this
// value.toUpperCase();

// ✅ You must check first
if (typeof value === "string") {
    console.log(value.toUpperCase());
}

unknown forces you to write type checks before using the variable → safer than any.

*/ 