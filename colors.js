const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', start); 
refs.stopBtn.addEventListener('click', stop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor(color) {
    document.body.style.backgroundColor = color;
}

let intervalColor = undefined;
function start () {
    intervalColor = setInterval(randomColor => {
        randomColor = randomIntegerFromInterval(0, 5);
        changeColor(colors[randomColor]); 
    }, 1000);
    refs.stopBtn.removeAttribute('disabled');
    refs.startBtn.setAttribute('disabled', true);
};

function stop() {
    clearInterval(intervalColor);
    refs.startBtn.removeAttribute('disabled');
    refs.stopBtn.setAttribute('disabled', true);
};
