---
date: "2023-11-12T01:07:24+01:00"
draft: false
title: "Async/await VS .then() method"
tags: ["Async/await", "javascript", "code", "then method"]
---

## Async/await : the differences, and when and why to choose one over the other

**Advantages of `async/await`**

1. **Readability**: Code written with `async/await` often looks more synchronous and is easier to follow, making it generally more readable.
2. **Error Handling**: You can use `try/catch` blocks to handle both synchronous and asynchronous errors, which can make error-handling logic more straightforward.
3. **Debugging**: Debugging is often easier with `async/await` because it allows you to step through your code just like you would with synchronous code.

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

**Advantages of `.then()`**

1. **Composability**: Promises are composable, meaning you can combine them in sophisticated ways using `Promise.all()`, `Promise.race()`, etc.

2. **Flexibility**: `.then()` can be more flexible for complex chains of asynchronous operations where you might not want to stop the entire chain if one operation fails.

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return anotherAsyncFunction(data);
  })
  .then((result) => console.log(result))
  .catch((error) => console.error("Error:", error));
```

**When to Use Which**

1. **Use `async/await` when**: You have a series of asynchronous operations that depend on the previous one to complete, and you want more readable and maintainable code.
2. **Use `.then()` when**: You're dealing with multiple asynchronous operations that are independent of each other, or you're using libraries that return promises but are not `async/await` friendly.

To deepen your understanding, you may find these articles helpful:

- [JavaScript.info: Async/await](https://javascript.info/async-await)
- [MDN Web Docs: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN Web Docs: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
