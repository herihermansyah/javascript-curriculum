// ========= Data structure (primitives vs objects) =========
// the difference betwen primitive and non promitive data types in javascript lies in how they store values and behave in memory.
// example primitives data types : string, number, boolean, null, undefined, symbol, bigint
// example non primitive data types : object, array, function
// ## primitive data type is an immutable value
// ## non primitive data type is a mutable value

// primitive data types : immutable value
let user = "herman";
user[0] = "salimah";
console.log(user); // Output: "herman" - because strings are immutable, the original string remains unchanged.

user = "heri";
console.log(user); // Output: "heri" - the variable user now points to a new string value

// non primitive data types : mutable value
let user2 = { name: "herman", age: "30" };
user2.name = "salimah";
user2.age = "2";
console.log(user2); // Output: { name: "salimah", age: "2" } - because objects are mutable, the property name is changed.

const user3 = { name: "herman", age: "30" };
user3.name = "salimah";
user3.age = "2";
console.log(user3); // Output: { name: "salimah", age: "2" } - the object itself is mutable, so we can change its properties even if it's declared with const.

// 7 data types in javascript : string , number ,null , undefined , boolean , symbol , bigint
let number = 1;
let string = "string";
let nullValue = null;
let undefinedValue = undefined;
let boolean = true;
let symbol = Symbol("2");
let bigint = 1234567890123456789012345678901234567890n;

// objects and array are non primitive data types
let object = { name: "herman", age: 30 }; // object
let array = [1, 2, 3, 4, 5]; // array

console.log(typeof symbol); // Symbol(symbol)
console.log(bigint); // bigint
console.log(
  `===========================================================================`,
);

// what is coersion in javascript? : the automatic conversion of values from one data to another
let x = 1 + "2";
console.log(x); // 12 - number 1 is coerced to a string and concatenated with "2"
let y = "1" + 1;
console.log(y); // "11" - number 1 is coerced to a string and concatenated with "1"
let b = "1" - 5;
console.log(b); // -4 - string "1" is coerced to a number and subtracted from 5
let c = "2" * 5;
console.log(c); // 10 - string "2" is coerced to a number and multiplied by 5
let d = "11" % 2;
console.log(d); // 1 - string "11" is coerced to a number and divided by 2, returning the remainder

let e = 5 == "5";
console.log(e); // true - string "5" is coerced to a number and compared to 5
let p = 5 === "5";
console.log(p); // false - the types are different (number vs string)
let t = 5 != "5";
console.log(t); // false - string "5" is coerced to a number and compared to 5
let g = 5 !== "5";
console.log(g); // true - the types are different (number vs string)

let h = 5 > "4";
console.log(h); // true - string "4" is coerced to a number and compared to 5
let i = String(5 >= "2");
console.log(i); // "true" - string "2" is coerced to a number and compared to 5

// // BigInt data type for handling and storing big integer values
let j = 12n;
console.log(typeof j); // 12n - bigint

// pure function and side effect in javascript
// pure funciton : a function that always return the smame output for the same input
// side effect : a side effect occurs when a function interacts with the outside component or modifies something outside its own scope

// pure function:
// non-mutating methods : [...spread, item], .concat, .map, .filter, .slice
function calculate(a, b) {
  return a + b;
}
const result = calculate(2, 3);
console.log(result); // Output: 5 - the function always returns the same output for the same input
console.log(`=====================================================`);

const data = [
  {
    name: "Heri herman",
    age: 30,
  },
  {
    name: "A salimah",
    age: 2,
  },
];

const data2 = [
  { name: "ali", age: 35 },
  { name: "ahmad", age: 40, address: "jakarta" },
];

const data3 = {
  name: "mamat",
  age: 25,
};

function getNames(array1, array2) {
  return [...array1, ...array2];
}

const result2 = getNames(data, data2);
console.log(result2);

function filteredData(array) {
  return array.filter((data) => data.age >= 5);
}
const result4 = filteredData(data);
console.log(result4);
console.log(`============================================`);

// impure function with side effect:
// mutating methods : .push, .pop, .unshift, .shift, .splice, .reverse, .sort

let age = 30;
function changeAge(newAge) {
  age = newAge; // side effect: modifies the variable age outside its own scope
  return age;
}

let newAge = changeAge(25);
console.log(age); // Output: 25 - the variable age is modified by the function
console.log(newAge); // Output: 25 - the function modifies the age variable and returns the new value

function getData(array1, array2) {
  array1.push(array2);
  return array1;
}

const result3 = getData(data, data3);
console.log(result3);

function sortData(array) {
  array.sort((a, b) => a.age - b.age);
  return array;
}

const result5 = sortData(data);
console.log(result5);
