---
date: "2023-11-12T00:53:53+01:00"
draft: false
title: "i+1 vs i++ and side effect"
tags: ["javascript", "Side Effects", "code"]
---

![javascript-side-effect](/img/posts/sideeffect.jpg)

## i = i+1 vs i++ and Side Effects

`i++` and `i = i + 1` are quite similar in that they both increase the value of `i` by 1. However, there are some subtle differences between them, especially when used in more complex expressions.

1. **i++ (Postfix Increment)**

   ```javascript
   let i = 0;
   let a = i++; // a takes the value 0, and i is now 1
   ```

   - The value of `i` is increased by 1.
   - The expression itself evaluates to the original value of `i` before the incrementation.

2. **i = i + 1**

   ```javascript
   let i = 0;
   let a = (i = i + 1); // a takes the value 1, and i is now 1
   ```

   - The value of `i` is increased by 1.
   - The expression itself evaluates to the new value of `i`.

**Here's an example to illustrate the difference:**

```javascript
let i = 0;
let j = 0;

let a = i++; // a takes the value 0, i becomes 1
let b = (j = j + 1); // b takes the value 1, j becomes 1

console.log(a); // Displays 0
console.log(b); // Displays 1
```

In most cases, you can use these two methods interchangeably if you don't care about the value the expression evaluates to.

**The postfix increment operator `i++` increases the value of `i` by 1 but returns the original value of `i` before the incrementation**. This is what's known as a "side effect": the expression does something (changes `i`) while evaluating to a value (the old value of `i`).

Here's how it works step by step:

1. `i` is initialized to 0.
2. `a = i++` is executed.
   - The current value of `i` (which is 0) is assigned to `a`.
   - Then, `i` is increased by 1 (now `i` is 1).

In other words, the operation `i++` does two things:

- It returns the current value of `i` (which will be assigned to `a`).
- It increments the value of `i`.

That's why, after executing `a = i++` with `i` initialized to 0, `a` will be 0 and `i` will be 1.
