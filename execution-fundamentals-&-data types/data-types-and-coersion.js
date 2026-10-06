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


// BigInt data type for handling and storing big integer values
let j = 12n;
console.log(typeof j); // 12n - bigint