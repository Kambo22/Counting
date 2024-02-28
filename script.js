let count = 0;
const countTextElement = document.getElementById('countText');
const nextNumberElement = document.getElementById('nextNumber');

function updateCount() {
  count++;
  countTextElement.textContent = count;
  nextNumberElement.textContent = count + 1;
  updateBackground();
}

function updateBackground() {
  const colors = ['#FF5733', '#FFC300', '#DAF7A6', '#C70039', '#900C3F'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

setInterval(updateCount, 1000);
