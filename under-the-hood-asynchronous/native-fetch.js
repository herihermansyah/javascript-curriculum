const BASE_URL = "https://dummyjson.com/";
const PRODUCTS_API = "products";
const USER_API = "users";
const POST_API = "posts";

{
  async function product(target, categoryProduct) {
    try {
      const response = await fetch(`${BASE_URL}${target}/?limit=0`);
      if (!response.ok) {
        throw new Error(`HTTP error : ${response.status}`);
      }
      const data = await response.json();
      const allProduct = data.products;

      if (categoryProduct && target === PRODUCTS_API) {
        const filterProduct = allProduct
          .filter((item) => item.category === categoryProduct)
          .map((item) => {
            return {
              title: item.title,
              price: item.price,
            };
          })
          .sort((a, b) => b.price - a.price);
        console.log(target, filterProduct);
        return filterProduct;
      }

      console.log(target, data);
    } catch (error) {
      console.log(error);
    }
  }

  product(PRODUCTS_API, "beauty");
  product(USER_API);
}

{
  async function fetchData(target) {
    try {
      const response = await fetch(`${BASE_URL}${target}/`);
      if (!response.ok) {
        throw new Error(`HTTP error : ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  function globalData(target) {
    return fetchData(target);
  }

  const data = await globalData(PRODUCTS_API);
  console.log(data);

  function calculate(arr) {
    return arr.reduce((acc, item) => acc + item.stock, 0);
  }

  const productBeauty = data.products
    .filter((item) => item.category === "beauty")
    .map((item) => {
      return {
        title: item.title,
        price: item.price,
        stock: item.stock,
      };
    });

  const allStock = calculate(productBeauty);
  console.log(productBeauty);
  console.log(allStock);
}

{
  function baseData() {
    const url = BASE_URL;

    async function fetchData(target) {
      try {
        const response = await fetch(`${url}${target}/`);

        if (!response.ok) {
          throw new Error("failed fetch data" + response.status);
        }

        return await response.json();
      } catch (error) {
        console.log(`error : ${error.message}`);
      }
    }
    return fetchData;
  }

  const getData = baseData();

  // use destructuring
  const { products: allProducts } = await getData(PRODUCTS_API);
  console.log(allProducts);

  {
    const response = await getData(PRODUCTS_API);
    const data = `${response}.${PRODUCTS_API}`;
    console.log(data);
  }

  // wrapper function to get target
  {
    const data = async (target) => {
      return await getData(target);
    };

    const users = await data(USER_API);
    const allUsers = users.users;
    console.log(allUsers);

    const Products = await data(PRODUCTS_API);
    const allProducts = Products.products;
    console.log(allProducts);
  }
}
