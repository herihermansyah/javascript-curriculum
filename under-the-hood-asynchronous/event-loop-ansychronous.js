// Asynchronous JavaScript and the Event Loop are the core mechanisms
// that allow JavaScript to be fast, responsive, and capable of handling multiple operations at once

// difference between the Task Queue and the Microtask Queue is
// their execution priority and how they are drained by the JavaScript Event Loop

{
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 0);
  Promise.resolve().then(() => {
    console.log("4");
  });
  console.log("5");
}
