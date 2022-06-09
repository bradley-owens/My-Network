"use strict";

// VARIABLES //////////////////////////////

const createLogin = document.getElementById("login");
const userName = document.querySelector(".input-username");
const userPin = document.querySelector(".input-password");
const languageChoice = document.querySelector(".input-language");
const userContainer = document.querySelector(".user-container");
const memberNumber = document.querySelector(".members-number");

let createdUsers = [];
let members;
let verifiedPin;
var numbers = /[0-9]/g;

// FUNCTIONS //////////////////////////////

// Reset input
const resetInput = () => {
  // resetting input values once submitted
  userName.value = "";
  userPin.value = "";
  languageChoice.value = "";
};

// Verify Password
const verifyPassword = function (pin) {
  if (pin.match(numbers) && pin.length === 4) {
    verifiedPin = pin;
  } else {
    alert("pin must be a four digit number");
    createLogin.href = "#";
    resetInput();
  }
};

//  Using class for created users
const user = class {
  constructor(userName, password, language) {
    this.userName = userName;
    this.password = password;
    this.language = language;
  }
};

createLogin.addEventListener("click", function () {
  // Password Verfication
  verifyPassword(userPin.value);

  //Creates new user
  const newUser = new user(userName.value, verifiedPin, languageChoice.value);

  //Adds to user group
  createdUsers.push(newUser);

  // gets each users name
  createdUsers.forEach(function (member) {
    members = member.userName;
  });

  // adds to display of memebers
  let users = document.createElement("p");
  users.classList.add("my-users");
  users.innerText = members;
  userContainer.appendChild(users);

  //isMember prototype
  user.prototype.isMember = true;

  resetInput();

  // Displaying number of members in DOM
  memberNumber.innerHTML = createdUsers.length;
});
