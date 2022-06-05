"use strict";

const createLogin = document.getElementById("login");

const userName = document.querySelector(".input-username");

const pin = document.querySelector(".input-password");

const userContainer = document.querySelector(".user-container");

const memberNumber = document.querySelector(".members-number");

//constructor function to create user object
const user = function (userName, password) {
  this.userName = userName;
  this.password = password;
};

const createdUsers = [];
let members;

createLogin.addEventListener("click", function () {
  //Creates new user
  const newUser = new user(userName.value, pin.value);

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

  user.prototype.isMember = "yes";

  userName.value = "";
  pin.value = "";

  memberNumber.innerHTML = createdUsers.length;
  console.log(newUser);
});
