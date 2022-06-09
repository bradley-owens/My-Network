"use strict";

const imgSelect = document.querySelectorAll(".img-container");

const confirmImgButton = document.querySelector(".confirm-button");

// Choose display IMG selection
let chosenImg;

imgSelect.forEach((selection) => {
  selection.addEventListener("click", function () {
    selection.classList.toggle("chosen");
    chosenImg = selection;
  });
});

confirmImgButton.addEventListener("click", function () {
  // console.log(chosenImg.id);

  console.log(chosenImg);
  if (chosenImg.classList == "img-container chosen") {
    //  choosen img is users display imgs
  } else {
    alert("Make sure you select one display picture before confirming!");
  }
});
