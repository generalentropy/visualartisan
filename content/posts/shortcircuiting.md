---
date: "2023-11-12T01:25:32+01:00"
draft: false
title: "Short-circuit evaluation in JavaScript"
tags: ["Short-circuit", "javascript", "code"]
---

In JavaScript, short-circuiting is a technique that uses the lazy evaluation of logical operators like `&&` (logical AND) and `||` (logical OR) to execute a conditional expression.

Consider the following example, where if the condition is true, `nextSlide()` is called:

```javascript
if (e.key === "ArrowRight") {
  nextSlide();
}
```

Using short-circuiting, the same logic can be written more concisely:

```javascript
e.key === "ArrowRight" && nextSlide();
```

Here's how the short-circuiting works in this expression:

1. `e.key === 'ArrowRight'` is evaluated first.
   - If this condition is `false`, the whole expression is immediately seen as `false`, and the code proceeds to the next instruction. `nextSlide()` isn't even evaluated.
2. If the first condition is `true`, the next part of the expression is evaluated.
   - In this case, `nextSlide()` is called.

This mechanism can be useful for making code more readable and concise.
