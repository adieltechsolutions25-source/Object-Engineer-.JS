let count = 0;
const countDisplay = document.getElementById('count');

function updateDisplay() {
  countDisplay.textContent = count;
}

document.getElementById('increment').addEventListener('click', () => {
  count++;
  updateDisplay();
});

document.getElementById('decrement').addEventListener('click', () => {
  count--;
  updateDisplay();
});

document.getElementById('reset').addEventListener('click', () => {
  count = 0;
  updateDisplay();
});