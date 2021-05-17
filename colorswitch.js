const startEL = document.querySelector('[data-action = "start"]');
const stopEl = document.querySelector('[data-action="stop"]');
const NOTIFICATION_DELAY = 1000;
let timerId = null;


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startEL.addEventListener('click', pressStart);
stopEl.addEventListener('click', pressStop); 


function pressStart() {
   timerId =setInterval(() => {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, NOTIFICATION_DELAY);
  startEL.disabled = true;
};
  
function pressStop() {
    clearInterval(timerId);  
  startEL.disabled = false;
};

