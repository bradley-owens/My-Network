// VARIABLES //////////////////////////////

const createLogin = document.getElementById("login");
const userName = document.querySelector(".input-username");
const userPin = document.querySelector(".input-password");
const userLanguage = document.querySelector(".input-language");
const languageChoice = document.querySelector(".input-language");
const userContainer = document.querySelector(".user-container");
const memberNumber = document.querySelector(".members-number");

export let createdUsers = [];
let members;
let verifiedUserName;
let verifiedPin;
let verifiedLanguage;
export let completedUsers;
let numbers = /[0-9]/g;
let upperCaseLetters = /[A-Z]/g;
let symbols = "!`@#$ %^&*()+=-[]\\';,./{}|\":<>? ~_";

// FUNCTIONS //////////////////////////////

// Reset input
const resetInput = () => {
  // resetting input values once submitted
  userName.value = "";
  userPin.value = "";
  languageChoice.value = "";
};

// Verify Username & Password & Language

const verifyUserName = function (username) {
  if (!username.match(upperCaseLetters)) {
    verifiedUserName = username;
  } else {
    alert("Username must not contain any uppercase letters");
    createLogin.href = "#";
  }
};
const verifyPassword = function (pin) {
  if (pin.match(numbers) && pin.length === 4) {
    verifiedPin = pin;
  } else {
    alert("pin must be a four digit number");
    createLogin.href = "#";
    resetInput();
  }
};

const verifyLanguage = function (language) {
  if (language === "") {
    alert("Please choose a language to complete login");
    createLogin.href = "#";
  } else {
    verifiedLanguage = language;
  }
};

//  Using class for created users
const user = class {
  //making password a private field (isntance)
  #password;
  constructor(userName, password, language) {
    this.userName = userName;
    this.#password = password;
    this.language = language;
  }
};

createLogin.addEventListener("click", function () {
  //Verfication
  verifyUserName(userName.value);
  verifyPassword(userPin.value);
  verifyLanguage(userLanguage.value);

  //Creates new user
  const newUser = new user(verifiedUserName, verifiedPin, verifiedLanguage);

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

  // Displaying number of members in DOM
  memberNumber.innerHTML = createdUsers.length;

  // createLogin.href = "#";

  finaliseUser();
});

export const finaliseUser = function () {
  completedUsers.push(createdUsers);
  return completedUsers;
};

// console.log(createdUsers);
