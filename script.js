"use strict";

const createLogin = document.getElementById("login");

const userName = document.querySelector(".input-username");

const pin = document.querySelector(".input-password");

const languageChoice = document.querySelector(".input-language");

const userContainer = document.querySelector(".user-container");

const memberNumber = document.querySelector(".members-number");

let createdUsers = [];
let members;
let verifiedPin;

//  Using class for created users
const user = class {
  constructor(userName, password, language) {
    this.userName = userName;
    this.password = password;
    this.language = language;
  }
};

createLogin.addEventListener("click", function () {
  //Creates new user
  const newUser = new user(userName.value, pin.value, languageChoice.value);

  console.log(newUser);
  console.log(createdUsers);
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

  // resetting input values once submitted
  userName.value = "";
  pin.value = "";
  languageChoice.value = "";

  // Displaying number of members in DOM
  memberNumber.innerHTML = createdUsers.length;
});

// Setters for followers in future

// const account = {
//   owner: 'jonas',
//   movements: [100, 200, 300, 400],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     return this.movements.push(mov);
//   },
// };

// //get
// console.log(account.latest);

// // set
// account.latest = 500;

// console.log(account.latest); // setting 500 at end
