// object desstructuring : a syntax feature in javascript that allows you to extract values from object and assign them to variables
// array object : provides a clean and efficient way to extract values from array and store them in seperate variables

// ====================== object destructuring ======================

let person = {
  id: 1,
  name: "herman",
  age: 30,
  address: {
    address: "surabaya",
    no: 2132,
    call: {
      phone: 3241221,
      fax: "fax fax",
    },
  },
};

// when you need to change the values you can using object literal
let { name, age } = person;
const newPerson = { age: 20 };
({ age } = newPerson);

// when you need add or give default values you can using destructuring
// destructuring cannot change the original object
const { name, age = 20, phone = 23323 } = person;
console.log(name, age, phone);
console.log(`======================`);
console.log(person);

// this way to destructuring nested object
const {
  name,
  age,
  address: {
    address,
    call: { fax },
  },
} = person;

console.log(name, age, address, fax);

// ====================== array destructuring ======================

const products = ["iphone", "a45", "ultra"];
const [apple, , samsung, lg = "new", ...rest] = products;
console.log(apple, samsung, lg, ...rest);

// you can swap values using array destructuring
let a = 30;
let b = 10;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

let numbers = [
  [
    [1, 2],
    [100, 200],
  ],
  [3, 4],
  [5, 6],
];

const [[first, first1], second, third] = numbers;

console.log(first, first1, second, third);

const person2 = [
  { id: 1, name: "herman", age: 30 },
  { id: 2, name: "salimah", age: 10 },
  { id: 3, name: "faid", age: 35 },
];

const [name1, name2, name3] = person2;
console.log(name1, name2, name3);

const [, { age = 100, her = "women" }] = person2;
console.log(age, her);
