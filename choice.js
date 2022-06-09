"use strict";

const imgSelect = document.querySelectorAll(".img-container");

const confirmImgButton = document.querySelector(".confirm-button");
// Choose display IMG selection
let chosenImg;

imgSelect.forEach((selection) => {
  selection.addEventListener("click", function () {
    this.classList.toggle("chosen");
    let chosenImg = selection;
  });
});

confirmImgButton.addEventListener("click", function () {
  console.log(chosenImg);
});
