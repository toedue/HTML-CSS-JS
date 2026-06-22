// const x = document.querySelector(".card");
// x.addEventListener("click", function () {
//   x.style.transform = "rotate(180deg)";
// });

const user = {
  name: "naruto",
  age: 12,
  hasMoney: true,
  moneyValue: 10,
  bank: 500,
};

const input = document.getElementById("money");
const form = document.getElementById("submit");

let value;

input.addEventListener("input", (e) => {
  value = e.target.value;
  console.log(value);
});

const ui = document.querySelector("#bank");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  user.bank += Number(value);
  ui.innerHTML = `<span>${user.name} current bank is: ${user.bank} </span>`;
  console.log(user.bank)
});


