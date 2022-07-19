const buttonMinus = document.querySelectorAll(".minus");
const PlusButton = document.querySelectorAll(".plus");
const totalSum = document.querySelector("#sum");
const deleteButton = document.querySelectorAll(".btn-primary");
const quantitiesButton = document.querySelectorAll(".x");
const prices = document.querySelectorAll(".price");
const bigDivs = document.querySelectorAll(".card");
for (let i = 0; i < buttonMinus.length; i++) {
  buttonMinus[i].addEventListener("click", function (e) {
    if (quantitiesButton[i].innerHTML > 0) {
      quantitiesButton[i].innerHTML--;
      totalSum.textContent =
        parseInt(totalSum.textContent) - parseInt(prices[i].innerHTML);
    }
  });
}

for (let i = 0; i < buttonMinus.length; i++) {
  PlusButton[i].addEventListener("click", function (e) {
    quantitiesButton[i].innerHTML++;
    totalSum.textContent =
      parseInt(totalSum.textContent) + parseInt(prices[i].innerHTML);
  });
}
for (let i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener("click", function (e) {
    bigDivs[i].remove();
    totalSum.textContent =
      parseInt(totalSum.textContent) -
      parseInt(quantitiesButton[i].textContent) *
        parseInt(prices[i].textContent);
  });
}