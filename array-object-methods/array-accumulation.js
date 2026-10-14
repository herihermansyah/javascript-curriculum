// =============== array accumulation ===============
// the procces of iterating through an array to combine all its elements into a single cumulative value

let products = [
  { id: 1, name: "iphone", stock: 12, price: 100.0 },
  { id: 2, name: "25 ultra", stock: 2, price: 34.0 },
  { id: 3, name: "v27", stock: 5, price: 45.0 },
  { id: 4, name: "pad mini", stock: 1, price: 43.0 },
  { id: 5, name: "vivo", stock: 7, price: 43.0 },
];

let products2 = [
  { id: 1, name: "iphone", stock: 12, price: 21.0 },
  { id: 2, name: "25 ultra", stock: 2, price: 64.0 },
  { id: 3, name: "v27", stock: 5, price: 25.0 },
  { id: 4, name: "pad mini", stock: 1, price: 23.0 },
  { id: 5, name: "vivo", stock: 7, price: 33.0 },
];

{
  const totalStock = products.reduce((acc, cur) => {
    return acc + cur.stock;
  }, 0);
  console.log(totalStock);
}

{
  const totalPriceProduct = products.reduce((acc, curr) => acc + curr.price, 0);
  console.log(totalPriceProduct);
  const totalPriceProduct2 = products2.reduce(
    (acc, curr) => acc + curr.price,
    0,
  );
  console.log(totalPriceProduct2);
  const total = totalPriceProduct + totalPriceProduct2;
  console.log(total);
}

{
  function sumPrice(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr.price, 0);
    return sum;
  }

  const pro1 = sumPrice(products);
  const pro2 = sumPrice(products2);
  const total = pro1 + pro2;

  const combine = sumPrice(products) + sumPrice(products2);

  console.log(sumPrice(products));
  console.log(sumPrice(products2));
  console.log(`total = ${combine}`);
}

{
  let startIndex = 100;
  const combined = [...products, ...products2];
  const newArray = combined.map((item, index) => {
    return {
      ...item,
      id: startIndex + (index + 1),
    };
  });

  const totalPriceNewArray = sumPrice(newArray);
  console.log(newArray);
  console.log(totalPriceNewArray);
}
