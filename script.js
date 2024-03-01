
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
      // Assigns a random color to the count text
      countTextElement.style.color = getRandomColor();
      updateBackground();
    }

    // Function that generates a random color
    function getRandomColor() {
      return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    // Function that updates the background color
    function updateBackground() {
      // Generates a random color for the background
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      // Sets the background color of body
      document.body.style.backgroundColor = randomColor;
    }

    // Updates updateCount function every second
    setInterval(updateCount, 1000);
