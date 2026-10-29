// const input_one = document.querySelector(".input-one");
// const myButton = document.querySelector(".myButton");
// let result = document.getElementById("result");

// myButton.addEventListener("click", function () {
//   const value = input_one.value;
//   if (value === "") {
//     result.textContent = "please input keyword";
//   } else {
//     result.textContent = "result : " + value;
//   }
//   input_one.value = "";
// });

const mySubmit = document.querySelector("#mySubmit");
const name = document.getElementById("name");
const number = document.getElementById("number");
let resultName = document.getElementById("resultName");
let resultNumber = document.getElementById("resultNumber");
const theButton = document.getElementById("theButton");

function updateField(inputElement, resultElement, label) {
  const value = inputElement.value.trim();

  if (value === "") {
    resultElement.textContent = "Enter : " + label;
  } else {
    resultElement.textContent = label + " : " + value;
  }
}

mySubmit.addEventListener("submit", (e) => {
  e.preventDefault();

  //   if (name.value === "") {
  //     resultName.textContent = "Enter Name";
  //   } else {
  //     resultName.textContent = "Name : " + name.value;
  //   }

  //   if (number.value === "") {
  //     resultNumber.textContent = "Enter Number";
  //   } else {
  //     resultNumber.textContent = "Number : " + number.value;
  //   }

  updateField(name, resultName, "Name");
  updateField(number, resultNumber, "Number");

  name.value = "";
  number.value = "";
});
