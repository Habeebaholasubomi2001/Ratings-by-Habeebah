"use strct";
const button = document.querySelector(".button");
const firstBox = document.querySelector(".div-1");
const secondBox = document.querySelector(".div-2");
const numbers = document.querySelectorAll(".span");
const thank = document.querySelector(".thank-paragraph");

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', openModal);
// }

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    thank.textContent = `You selected ${i + 1} out of 5`;
  });
}

button.addEventListener("click", function () {
  secondBox.classList.toggle("hidden");
  firstBox.classList.toggle("hidden");
});
