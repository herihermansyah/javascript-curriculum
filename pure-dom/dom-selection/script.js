//      NodeList vs Array
// The core difference between a NodeList and an Array in JavaScript lies in their architectural origin and built-in capabilities.
// Array :  is a native, global JavaScript object designed to store any data type
// NodeList : on the other hand, is not part of the core JavaScript language; it is a collection of DOM nodes

const myButton = document.querySelectorAll(".myButtons");

myButton.forEach((element, index) => {
  element.textContent = `Button ${index + 1}`;

  if (index % 2 === 0) {
    element.style.color = "red";
    element.style.backgroundColor = "yellow";
  } else {
    element.style.color = "yellow";
    element.style.backgroundColor = "red";
  }

  element.addEventListener("click", () => {
    alert("success");
  });
});

