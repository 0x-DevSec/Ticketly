// =====================
// Global Variable
// =====================
let selectedCard = null; // hna ghadi nkhzn card li luser ikhtarha

// =====================
// Function bach n3arf ach men card tkhtrat
// =====================
function selected(id) {
  // Ila kan chi card mkhtara mn 9bl, nhydo menha lborder
  if (selectedCard) {
    selectedCard.style.border = "none";
  }

  // Daba nkhdu card jdida khtar  luser
  selectedCard = document.getElementById(id);
  selectedCard.style.border = "2px solid blue"; // nzidoha border bach tbayan selected
}

// =====================
// Ndozo men step 1 l step 2
// =====================
let nextbtn = document.getElementById("next-btn");
let step1 = document.querySelector(".cards");
let step2 = document.getElementById("step2");
let step1banner = document.getElementById("banner1");

nextbtn.addEventListener("click", function () {
  // Ila luser ma khtar walou, n3tiwh message
  if (!selectedCard) {
    alert("Choisissez un événement avant de continuer !");
    return;
  }

  // Njiibo les informations men card li tkhtrat
  let image = selectedCard.querySelector("img").src;
  let title = selectedCard.querySelector("h3").textContent;
  let date = selectedCard.querySelector(".info p:nth-child(1)").textContent;
  let place = selectedCard.querySelector(".info p:nth-child(2)").textContent;
  let price = selectedCard.querySelector(".price").textContent;

  // N3mr bihom step 2
  let eventBox = step2.querySelector(".selected-event");
  eventBox.querySelector("img").src = image;
  eventBox.querySelector("h3").textContent = title;
  eventBox.querySelector("p:nth-child(2)").textContent = date;
  eventBox.querySelector("p:nth-child(3)").textContent = place;
  eventBox.querySelector("p:nth-child(4)").innerHTML =
    "<strong>" + price + "</strong> par personne";

  // Nbdlo thaman total f step 2
  step2.querySelector(".total-price").innerHTML = "<strong>" + price + "</strong>";

  // n khabiw step 1 o nbayno step 2
  step1.style.display = "none";
  step1banner.style.display = "none";
  step2.style.display = "flex";
});

// =====================
// Retour men step 2 l step 1
// =====================
function goBackToStep1() {
  // Nkhabyw step 2 o nbayno step 1
  step2.style.display = "none";
  step1.style.display = "flex";
  step1banner.style.display = "flex";
}