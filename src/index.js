const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startButton = document.querySelector("[data-action='start']");

const stopButton = document.querySelector("[data-action='stop']");

let timer;

const callBack = () => {
  const randomValue = randomIntegerFromInterval(0, colors.length - 1);
  const randomColor = colors[randomValue];
  document.body.style = `background-color:${randomColor}`;
  timer = setTimeout(callBack, 1000);
};
startButton.addEventListener('click', () => {
  timer = setTimeout(callBack, 1000);
  startButton.disabled = true;
});
stopButton.addEventListener('click', () => {
  clearTimeout(timer);
  startButton.disabled = false;
});
