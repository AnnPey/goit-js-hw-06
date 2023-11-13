const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueSpan = document.querySelector("#value");

let counterValue = 0;

function updateValue() {
  valueSpan.textContent = counterValue;
}

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateValue();
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  updateValue();
});

updateValue();
