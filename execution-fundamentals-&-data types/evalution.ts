type ProdcutTypes = {
  id: number;
  name: string;
  brand: string;
  stock: number;
  price: number;
};

// let user = [];
// const addUser = {
//   name: "herman",
//   age: 23,
// };

// user.push(addUser);

// console.log(user);

// let products: ProdcutTypes[] = [
//   {
//     name: "iphone",
//     brand: "apple",
//     stock: 12,
//     price: 213123213,
//   },
//   {
//     name: "ultra",
//     brand: "samsung",
//     stock: 53,
//     price: 34234,
//   },
// ];

// let result: ProdcutTypes[] = [];

// function createObject(data: ProdcutTypes) {
//   return result.push(data);
// }

// let names = {
//   name: "apple",
//   brand: "apple",
//   stock: 324,
//   price: 34,
// };

// createObject(names);
// console.log(result);

interface DataStore {
  datas: ProdcutTypes[];
  createData: (
    id: number,
    name: string,
    brand: string,
    stock: number,
    price: number,
  ) => void;
  deleteData: (id: number) => void;
}

const dataStore: DataStore = {
  datas: [],
  createData(id, name, brand, stock, price) {
    const exist = this.datas.find(
      (item) => item.name === name || item.id === id,
    );

    if (exist) {
      console.log(`data already exist ${exist.name}`);
      {
        this.datas;
      }
    }
    this.datas.push({ id, name, brand, stock, price });
  },

  deleteData(id) {
    this.datas = this.datas.filter((item) => item.id !== id);
  },
};

dataStore.createData(23, "iphone", "apple", 3, 32);
dataStore.createData(423, "iphone", "apple", 3, 32);
dataStore.createData(54, "laptop", "apple", 3, 32);
dataStore.deleteData(54);
dataStore.deleteData(423);
console.log(dataStore.datas);
console.log(
  `======================================================================`,
);
