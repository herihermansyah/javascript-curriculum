// default paramter : it is used to give the default values to the arguments.
// spread operator : it is another operator provided through ES6 it generally spreads data of array/list
// rest operator : it allows a function to accept an indefinite number of arguments

function defaultParamter(a, b = 1) {
  return a + b;
}
console.log(defaultParamter(5, 5));

let data = [1, 4, 5, 8, 2, 4];

function restParameter(...arr) {
  const indexRandom = Math.floor(Math.random() * arr.length);
  const result = arr[indexRandom];
  return result;
}

console.log(restParameter(...data));

const product = [
  {
    name: "iphone",
    brand: "apple",
    stock: 5,
    price: 10,
  },
  {
    name: "a5",
    brand: "samsung",
    stock: 12,
    price: 20,
  },
];

function calculate() {
  const getStock = product.filter((p) => p.stock > 7);
  const mapping = getStock.map((item) => item.stock);
  const calculateStock = mapping.reduce((acc, item) => acc + item);
  return console.log(calculateStock);
}
calculate();

const data1 = [
  { name: "apple", stock: 12, price: 123214 },
  { name: "oppo", stock: 2, price: 4353252 },
];

const data2 = [
  { name: "lg", stock: 9, price: 345345 },
  { name: "axios", stock: 43, price: 243432 },
];

const combineData = [...data1, ...data2];
// console.log(combineData);

const calculatePice = (arr) =>
  (mappingPrice = arr
    .map((item) => item.price)
    .reduce((acc, item) => acc + item));

console.log(calculatePice(combineData));

const users = [
  { name: "herman", age: 30 },
  { name: "salimah", age: 2 },
  { name: "faid", age: 5 },
];

const activeUsers = users.map((item) => {
  //   const allItem = { ...item };
  //   if (allItem.age > 7) {
  //     allItem.status = "active";
  //   } else {
  //     allItem.status = "non-active";
  //   }
  //   return { ...allItem };

  //   if (item.age > 7) {
  //     item.status = "active";
  //   } else {
  //     item.status = "non-active";
  //   }
  //   return { ...item };

  item.age > 7 ? (item.status = "active") : (item.status = "non-active");

  return { ...item };
});
console.log(activeUsers);
console.log(users);
