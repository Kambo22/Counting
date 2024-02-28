
let count = 0;


const countTextElement = document.getElementById('countText');

const nextNumberElement = document.getElementById('nextNumber');

// Function to update the count and the "Next number"
function updateCount() {
  count++;
  // Updates the the count element
  countTextElement.textContent = count;
  // Updates the "Next number" element
  nextNumberElement.textContent = count + 1;
  updateBackground();
}

// Function that updates the background color
function updateBackground() {
  // Array of colors
  const colors = ['#FF5733', '#FFC300', '#DAF7A6', '#C70039', '#900C3F'];
  // Choose a random color from colors[]
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  // Set the background color of body
  document.body.style.backgroundColor = randomColor;
}

// Updates updateCount function every second
setInterval(updateCount, 1000);
