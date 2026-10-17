// =============== object static methods ===============
// object.keys : extract an array of an object's property names
// object.values : extract an array of an object's propery values
// object.entries : convert an object into an array of [key, value] pairs
// object.assign : copies property from source objects into a target object
// object.freeze : permanently locks down an object, preventing modifications

let person = { name: "herman", age: 32 };
let person2 = { name: "salimah", age: 2 };
let person3 = { name: "faid", age: 30 };
let person4 = { name: "salim", age: 13 };

const obj1 = { a: 1, b: 1 };
const obj2 = { b: 2, c: 2 };
const obj3 = { c: 3, d: 4 };

{
  {
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      name() {
        // console.log(
        //   `hello my name is : ${this.name} and i am ${this.age} years `,
        // );
      }
    }

    let p1 = new Person("herman", 32);
    // console.log(p1.name());
  }

  {
    class Car {
      constructor(brand, model) {
        this.brand = brand;
        this.model = model;
      }

      displayCar() {
        console.log(
          `car brand : ${this.brand}... and the model is : ${this.model}`,
        );
      }
    }

    let car1 = new Car("toyota", "avanza");
    console.log(car1.displayCar());
  }
}

{
  // const checkKey = Object.keys(person);
  // console.log(checkKey);

  // const checkValue = Object.values(person);
  // console.log(checkValue);

  // const checkEntries = Object.entries(person);
  // console.log(checkEntries);

  const checkAssign = Object.assign({}, person, person2, person3, person4);
  // console.log(checkAssign);

  // const merged = Object.assign({}, obj1, obj2, obj3);
  // console.log(merged);
}

{
  Object.freeze(person);
  person.name = "saya";
  // console.log(person);
}
