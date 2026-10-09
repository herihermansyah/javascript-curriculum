// ================ what difference regular function and arrow function ================
// regular function:
// # defined using the fucntion keyword and can have its own this, arguments and prototype
// * access arguments : you can acces all passed arguments using the arguments object
// * duplicate named parameters : allowed duplicate paramater but not recomended, the last occurrence of the parameter overwrites previous ones, and only its value is used
// * hoisting : hoisted to the top of their scope to be called before they're definded
// * this keyword : refers to the object that calls the function, it's value can vary based on how the function is called(method, event , or global)
// * new keyword : can be used as constructors with the new keyword

// arrow function :
// # concise a way to define functions using the => syntax. they do not have their own this context and also lack their own arguments object
// * access arguments : use rest paramets to collect all arguments
// * duplicate named parameter : not allowed duplicated parameter and throw a syntax error, even in non-strict mode
// * hoisting : not hoisted like regular. they are treated as variables like const and let.
// * this keyword : this is lexically inherited from the surrounding scope, not the funciton itself.
// * new keyword : cannot be used as constructors and do not support the new keyword.

function test(name, age) {
//   return arguments;
  return `argument : ${arguments} = parameter =  name: ${name}, age: ${age}`;
}

console.log(test("arguments", "herman", 12));

function test1(a, b, a, b) {
  console.log(a, b);
}
test1(5, 10, 3, 2);

console.log(test3(10, 20));
function test3(a, b) {
  return a + b;
}

const person = {
  name: "herman",
  age: 30,
  introduce() {
    return `my name is ${this.name} and i'm ${this.age} years old`;
  },
};

console.log(person.introduce());

function person1(name) {
  this.name = name;
}

const name = new person1("herman");
const age = new person1(30);
console.log(age);

const introduce = `my name is ${name} and i'm ${age} years old`
console.log(introduce);




// =============== arrow function =======

const arrow = (a, b) => {
  return a + b;
};

console.log(arrow(10, 10));

let arrow2 = (...arr) => {
    return arr
    // return arguments
}

console.log(arrow2("sdfdsf", "sdfsdfdsf", 324324));

let arrow3 = (a, b ) => {
    return a + b
}

console.log(arrow3(234, 324));

console.log(arrow4(1, "5"));
// cannot access arrow4 before initialization
let arrow4 = (number, string) => {
  return number + string;
};

let obj = {
  name: "apple",
  stock: 30,
  getThis: () => {
    console.log(this.stock);
    // undefined
  },
};

obj.getThis()

let obj2 = () => {};
let name2 = new obj2("apple");
console.log(name2); // object is not constructor

