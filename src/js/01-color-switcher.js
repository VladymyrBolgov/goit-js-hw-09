const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', startChanging);
stopBtn.addEventListener('click', stopChanging);

function startChanging() {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  startBtn.setAttribute('disabled', true);
  stopBtn.disabled = false;
  };
  
function stopChanging() {
    clearInterval(timerId);
    stopBtn.setAttribute('disabled', false);
    startBtn.disabled = false;
};
  
