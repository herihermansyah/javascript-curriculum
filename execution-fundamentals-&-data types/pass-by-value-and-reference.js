// ============= pass by value and pass by reference =============
// pass by value : when you pass a primitive value to a function or assign it to a new varibale, javascript createa a completely independent copy of that value
// pass by reference : when you create an object or an array, the variable does not hold the actual data.
// the exact different is that pass by value copies the actual data to create an independent duplicate, while pass by reference copies only a pointer address

// ============= what is memory management =================
// - allocating : giving a program space in RAM
// - automatic and manual : javascript use automated tools like garbage collection

// ============= what is an object reference =================
// - connection : a reference acts like an address label or a remote control
// - reference counting : many memory  management systems count
// - cleanup trigger : when the reference count drops to zero
// - string vs weak : standard reference keep object

let person2 = {
  name: "patrick",
  age: 30,
  tools: { tws: 2, hp: 3, laptop: 5 },
  calculate() {
    const values = Object.values(this.tools);
    const total = values.reduce((acc, item) => {
      return acc + item;
    }, 0);

    return total;
  },
  mappingTools() {
    const keys = Object.keys(this.tools).map((item) =>
      console.log(`name keys: ${item}`),
    );
  },
};

person2.mappingTools();

console.log(person2);
console.log(person2.calculate());

console.log(Object.values(person2.tools));

let objectA = {};
let objectB = {};
console.log(objectA === objectB);
console.log(`===========`);
let objectC = objectA;
console.log(objectA === objectC);

let person = {
  id: 1,
  userName: "heri hermansyah",
  firstName: "heri",
  lastName: "herman",
  age: 30,
};

let coba = Object.entries(person);

delete Object.assign(person, { age: person.age })["umur"];
console.log(person);

let keys = Object.keys(person);
let values = Object.values(person);

console.log(keys);
console.log(values);

const todoApp = {
  todos: [],
  addTodo(taskText) {
    const newTodo = { id: Date.now(), text: taskText, completed: false };
    this.todos.push(newTodo);
    return newTodo;
  },
};

let todo1 = todoApp.addTodo("java");
let todo2 = todoApp.addTodo("javascript");
let todo3 = todoApp.addTodo("php");

let todo4 = todoApp.addTodo("laptop");
let todo5 = todoApp.addTodo("hp");
let todo6 = todoApp.addTodo("monitor");

let fistTodo = [todo1, todo2, todo3];
let secondTodo = [todo4, todo5, todo6];
let allTodo = [...fistTodo, ...secondTodo];

console.log(fistTodo);
console.log(`=======`);
console.log(secondTodo);
console.log(`======`);
console.log(allTodo);
