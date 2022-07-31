import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
const disabled = 'disabled';
let chosenDate = null;

const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        chosenDate = selectedDates[0].getTime();
        const dDate = chosenDate - Date.now();
       if (dDate <= 0) {
            alert('Please choose a date in the future');
            return;
        }
        startBtn.removeAttribute(disabled);
    },
};

flatpickr('#datetime-picker', options);
const inputDate = document.querySelector('#datetime-picker')._flatpickr;

//-таймер-------------------------
startBtn.addEventListener('click', onClickTimer);

function onClickTimer() {
    
    setInterval(() => {
        const today = Date.now();
        const elTime = chosenDate - today;
        if (elTime <= 0) {
                return
            }
        const convertedElTime = convertMs(elTime);
        const { days, hours, minutes, seconds } = convertedElTime;

        daysEl.textContent = days 
        hoursEl.textContent = hours 
        minutesEl.textContent = minutes 
        secondsEl.textContent = seconds 
    
    }, 1000)
}
//----------------------------
function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}




