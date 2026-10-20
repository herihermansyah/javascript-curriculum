// =========================== closure ===========================
// closure is feature where an inner function retains access to the variables and scope of its outer function
// even after the outer funciton has finished executing

{
  function func1(outer) {
    function func2(inner) {
      console.log(`outer : ${outer}`);
      console.log(`inner : ${inner}`);
    }
  }

  const newFunc = func1("outer");
  newFunc("inner");
}

const products = [
  { name: "apple", stock: 12, price: 123 },
  { name: "samsung", stock: 7, price: 435 },
  { name: "lg", stock: 8, price: 768 },
  { name: "axios", stock: 3, price: 325 },
];

{
  // it is work but its not good for performance O(1)
  function newArray(propertyToCount) {
    let stock = [];
    return function createStock(key, arr) {
      const category = key;
      const total = arr.reduce((acc, item) => acc + item[propertyToCount], 0);
      stock.push({ category, total });
      return stock;
    };
  }

  const totalStock = newArray("stock");
  totalStock("electronik", products);
  totalStock("homeliving", products);
  totalStock("accesories", products);

  const finalResult = totalStock("phone", products);
  console.log(finalResult);
}

{
  function accumulation(propertyCount) {
    return function check(arr) {
      return arr.reduce((acc, item) => acc + item[propertyCount], 0);
    };
  }

  const totalStock = accumulation("stock");
  const totalPrice = accumulation("price");
  console.log(totalStock(products));
  console.log(totalPrice(products));
}
