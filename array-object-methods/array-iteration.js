// ============= iteration =============
// the procces of repeating a block of code multiple times, or stepping through a collection of data(like an array or an object)

{
  let products = [
    { id: 1, name: "iphone", stock: 12, price: 21 },
    { id: 2, name: "samsung", stock: 3, price: 42 },
    { id: 3, name: "lg", stock: 6, price: 3 },
    { id: 4, name: "vivo", stock: 3, price: 2 },
  ];

  let nameProducts = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].name === "iphone" || products[i].stock < 6) {
      continue;
    }
    nameProducts.push({
      name: products[i].name,
      price: products[i].price,
    });
  }

  console.log(nameProducts);
}

{
  let persons = [
    { id: 1, name: "herman", age: 30, hobbies: ["ball", "ride"] },
    { id: 2, name: "salimah", age: 2, hobbies: ["eat", "watching"] },
    { id: 3, name: "faid", age: 27, hobbies: ["eat", "watching"] },
    { id: 4, name: "salim", age: 15, hobbies: ["eat", "watching"] },
  ];

  let newPerson = [];
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age < 18) {
      continue;
    } else {
      newPerson.push({
        name: persons[i].name,
        age: persons[i].age,
        hobbies: persons[i].hobbies,
      });
    }
  }

  console.log(newPerson);
  const [, indexOne] = newPerson;
  console.log(indexOne);
}

{
  const users = [
    { id: 1, name: "herman", pass: 1234 },
    { id: 2, name: "salimah", pass: 4321 },
  ];

  let newUser = [];
  let index = 0;

  while (index < users.length) {
    newUser.push(users[index].name);
    index++;
  }

  console.log(newUser);
}

// === the difference betwen .map and .foreach ===
// The core difference is that map transforms an array and returns a brand new array,
// while forEach executes a function on each element and returns undefined

{
  let fruits = [
    { name: "banana", stock: 3 },
    { name: "apple", stock: 2 },
    { name: "mango", stock: 1 },
  ];

  let totalStock = 0;
  fruits.forEach((i) => (totalStock += i.stock));
  console.log(totalStock);

  fruits.map((item) => {
    return item.name;
  });
  console.log(fruits);

  fruits.map((i) => i.name).forEach((i) => console.log(i));
}
