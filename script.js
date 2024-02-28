let count = 0;

function countUp() {
    count++;
    document.getElementById('countText').textContent = count;
    changeBackground();
}

function changeBackground() {
    let colors = ['#FF5733', '#33FF57', '#5733FF', '#FF3357', '#33B5FF'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

setInterval(countUp, 1000);
