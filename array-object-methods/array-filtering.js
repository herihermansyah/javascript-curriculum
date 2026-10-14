// ======================= array filtering =======================
// filter : keeps all elements that match the condition, return new array and loops through everey single element
// find: looks for the first element that matches, return element value and stops immeadiately upon finding the first match
// some : checks if at least one element matches, return true and false and stop immediately and return true on first match
// every : checks if all elements without exception match, return true and false and stop immediately and return false on the first match failure
// findIndex : find the position of one item, returns the index number of the first element that passes the test
// findLast : extracts one item from the end, searches backward from the last element and return the first match it hits
// findLastIndex : find the position from the end . searches backward and return the index number of that match

let products = [
  { id: 1, name: "iphone", stock: 12, price: 100.0 },
  { id: 2, name: "25 ultra", stock: 2, price: 34.0 },
  { id: 3, name: "v27", stock: 56, price: 45.0 },
  { id: 4, name: "pad mini", stock: 1, price: 43.0 },
  { id: 5, name: "vivo", stock: 7, price: 43.0 },
];

{
  let checkSome = products.some((item) => item.stock % 2 === 0);
  console.log(checkSome);
}

{
  let checkEvery = products.every((item) => item.stock % 2 === 0);
  console.log(checkEvery);
}

{
  let checkFiltering = products.filter((item) => item.stock < 5);
  console.log(checkFiltering);
}

{
  let checkFind = products.find((item) => item.stock < 5);
  console.log(checkFind);
}
{
  let findIndex = products.findIndex((item) => item.stock > 5);
  console.log(findIndex);
}

// the main difference betwen findlast and findlastindex
// findLast : return the actual item/object
// findLastIndex : return the index number

{
  let lastIndex = products.findLast((item) => item.stock > 5);
  console.log(lastIndex);
}
{
  let findLastIndex = products.findLastIndex((item) => item.stock > 5);
  console.log(findLastIndex);
}
