// ============== Why const can't be reassigned ==============
// a const variable it creates read only refrence (an immutable binding) to a specific memory address
// - constan reference : javacscript lock the variable name to the exact value
// - assignment : trying to use (=) to a new value will throws a typeError
// - predictability : it prevents accidental changes to important variables 

const myName = "Herman";

// myName = "salimah"; // TypeError: Assignment to constant variable.
console.log(myName); // Herman

function myFunction(name) {
  return `hello ${name}`;
}

console.log(myFunction(myName)); // hello Herman