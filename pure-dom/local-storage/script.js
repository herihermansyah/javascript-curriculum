const myButton = document.getElementById("myButton");
const inputName = document.getElementById("name");
let result = document.getElementById("result");

const saveName = localStorage.getItem("name");
if (saveName) {
  result.textContent = saveName;
}

myButton.addEventListener("click", () => {
  const valueToSave = inputName.value;
  localStorage.setItem("name", valueToSave);
  result.textContent = valueToSave;
});
