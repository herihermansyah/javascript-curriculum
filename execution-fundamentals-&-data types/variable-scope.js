// ============== Why const can't be reassigned ==============
// a const variable it creates read only refrence (an immutable binding) to a specific memory address
// - constan reference : javacscript lock the variable name to the exact value
// - assignment : trying to use (=) to a new value will throws a typeError
// - predictability : it prevents accidental changes to important variables

const myName = "Herman";

myName = "salimah"; // TypeError: Assignment to constant variable.
console.log(myName); // Herman

function myFunction(name) {
  return `hello ${name}`;
}

console.log(myFunction(myName)); // hello Herman

// ============= the different var (function scope) vs let / const (block scope) ==============
// fucntion scope : the variable is accesible anywhere inside the function
// block scope : the variable is restricted th the specific code block enclosed by {} (curly braces)
// var : declares variables globally and locally inside an entire function, ignoring any inner curly braces
// let / const : declares a varible restricted to the exact block statement or expression where it is defined
// * why var is rarely used in the javascript modern? : becasue unppredictable behavior and subtle bugs

let age = "30"; // global scope
age = "31";
console.log(age); // 31

{
  var coba = "coba"; // function scope
}
console.log(coba); // coba

{
  let coba2 = "coba2"; // block scope
  console.log(coba2); // coba2
}

console.log(coba2); // ReferenceError: coba2 is not defined

if (true) {
  const coba3 = "coba3"; // block scope
}
console.log(coba3); // ReferenceError: coba3 is not defined

if (true) {
  var coba4 = "coba4"; // function scope
}

console.log(coba4); // coba4

function myFucntion2() {
  if (true) {
    var coba5 = "coba5"; // function scope
  }
  console.log(coba5); // coba5
  return coba5;
}
console.log(coba5); // ReferenceError: coba5 is not defined
console.log(myFucntion2()); // coba5

{
  function myFucntion3() {
    if (true) {
      var coba6 = "coba6"; // function scope
    }
    console.log(coba6); // coba6
    return coba6;
  }
}
console.log(coba6); // ReferenceError: coba6 is not defined
console.log(myFucntion3()); // coba6

// ============= what is hoisting in the javacsript ==============
// hoisting in javascript is a behavior or conceptually moving declarations to the top of their current scope (either global or function scope)
// why arrow function do not work with hoisting ? : becasue they are treated as a variable assignment const or let rather than traditional function declaration
// what is temporal dead zone ? : the temporal in javascript is a specific behavior where let and const variable are inaccesible from the moment their enclosing scope

console.log(name2); // undefined
let name2 = "heri";
console.log(name2); // heri

console.log(name3); // ReferenceError: Cannot access 'name3' before initialization
var name3 = "heri";

console.log(name4); // ReferenceError: Cannot access 'name4' before initialization
const name4 = "heri";

console.log(myFunction4()); // hello
function myFunction4() {
  return "hello";
}

console.log(myFunction6()); // ReferenceError: Cannot access 'myFunction6' before initialization
console.log(myFunction5()); // hello

function myFunction5() {
  myFunction6();
  console.log("hello");
  function myFunction6() {
    console.log("see you");
  }
}
console.log(myFunction5()); // hello

// arrow funciton do not work with hoisting
console.log(myFucntion7()); // ReferenceError: Cannot access 'myFunction6' before initialization
const myFucntion7 = () => {
  myFunction8();
  console.log("hello");
  function myFunction8() {
    console.log("see you");
  }
};
