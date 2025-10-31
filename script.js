let selectedCard = null;

function selected(id) {

  if (selectedCard) {
    selectedCard.style.border = "none";
  }
  selectedCard = document.getElementById(id);
  selectedCard.style.border = "2px solid blue";
}

let nextbtn = document.getElementById("next-btn");
let step = document.querySelector(".cards");
let step2 = document.getElementById("step2");
let step1banner = document.querySelector("#banner1");

nextbtn.addEventListener("click", function () {

  step2.style.display = "flex";
  step1banner.style.display = "none";
  step.style.display = "none";

})
