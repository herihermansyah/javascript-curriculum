export {};

// main difference betwen two code is how they handle data structure;;

// ================================ class ================================
// a reusable blueprint used to manufacture objects.
// you can make infinite independent carts
// requires the new keyword
// uses custom types wrapped inside the new products class instance

{
  class Products {
    name: string;
    stock: number;
    constructor(name: string, stock: number) {
      this.name = name;
      this.stock = stock;
    }

    static calculate(newArray: Products[]): number {
      return newArray.reduce((acc, cur) => acc + cur.stock, 0);
    }
  }

  class Cart {
    items: Products[] = [];

    addProduct(name: string, stock: number) {
      this.items.push(new Products(name, stock));
    }

    getProducts(): Products[] {
      return this.items;
    }
  }

  const addItem = new Cart();
  addItem.addProduct("iphone", 1);
  addItem.addProduct("samsung", 1);
  addItem.addProduct("axio", 1);

  const result = JSON.parse(JSON.stringify(addItem.getProducts()));

  const totalStock = Products.calculate(result);
  console.log(result);
  console.log(totalStock);
}

// ================================ object litereal ================================
// a single, unique object created directly on the fly
// you cannot easily make a second cart you would have to copy-paste the whole stucture
// uses standard brackets {}
// uses basic javasctipt object {name, stock}
{
  interface ItemsTypes {
    name: string;
    stock: number;
  }

  interface CartTypes {
    items: ItemsTypes[];
    addData: (name: string, stock: number) => void;
    calculate: (items: ItemsTypes[]) => void;
  }

  const cart: CartTypes = {
    items: [],
    addData(name, stock) {
      return this.items.push({ name, stock });
    },
    calculate() {
      return this.items.reduce((total, current) => total + current.stock, 0);
    },
  };

  cart.addData("iphone", 1);
  cart.addData("samsung", 1);
  cart.addData("axio", 1);

  const result = cart.items;
  const totalStock = cart.calculate(result);

  console.log(result);
  console.log(totalStock);
}
