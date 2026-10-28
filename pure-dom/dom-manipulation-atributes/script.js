const outer_square = document.getElementById("outer_square");
const allSquare = document.querySelectorAll(".square");
const desc1 = document.querySelector(".description_1");

for (let i = 0; i < allSquare.length; i++) {
  if (i % 3 === 0) {
    allSquare[i].style.backgroundColor = "red";
  } else {
    allSquare[i].style.backgroundColor = "yellow";
  }
}

const cue_card1 = document.createElement("p");
cue_card1.textContent = "ini penjelasan pertama :";
cue_card1.classList.add("myClass");

allSquare[0].appendChild(cue_card1);

const myButton = document.querySelector(".myButton");

myButton.addEventListener("click", () => {
  outer_square.classList.toggle("hidden");
});
