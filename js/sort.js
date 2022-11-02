"use strict";
console.log("main.js");
const users = [
  {
    name: "James",
    age: 65,
    gender: "male",
    town: "London",
  },
  {
    name: "Jane",
    age: 27,
    gender: "female",
    town: "Kaunas",
  },
  {
    name: "Mike",
    age: 35,
    gender: "male",
    town: "Kaunas",
  },
  {
    name: "June",
    age: 47,
    gender: "female",
    town: "London",
  },
];

// console.table(users);

// console.log(users[0].age - users[1].age);

// users.sort((a, b) => a.age - b.age);

// console.table(users);

//users.sort((a, b) => (a.town > b.town ? 1 : -1));

//users.sort((a, b) => a.gender.localeCompare(b.gender));

//console.table(users);

users.sort((a, b) => a.name.localeCompare(b.name));
console.table(users);

// users.sort((a, b) => b.name.localeCompare(a.name));
// console.table(users);

const nums = [5, 10, 1, 50, 12];

const numsEl = document.getElementById("nums");
numsEl.textContent = nums.join(", ");
document.body.append(numsEl);

numsEl.addEventListener("click", () => {
  numsEl.textContent = nums.sort((a, b) => a - b).join(", ");
  document.body.append(numsEl);
});

const colors = ["red", "green", "blue", "yellow"];

const olEl = document.getElementById("list");
colors.map((el) => {
  olEl.innerHTML += `<li>${el}</li>`;
});
document.body.append(olEl);

const btnEl = document.getElementById("btn");
btnEl.addEventListener("click", () => {
  olEl.innerHTML = "";
  colors.sort();
  colors.forEach((el) => {
    olEl.innerHTML += `<li>${el}</li>`;
  });
  document.body.append(olEl);
});
