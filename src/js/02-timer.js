import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

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
        const deltaDate = chosenDate - Date.now();
        if (deltaDate <= 0) {
            startBtn.classList.add(disabled);
            alert('Please choose a date in the future');
            return;
        }
        startBtn.classList.remove(disabled);
        return chosenDate;
    },
};

flatpickr('#datetime-picker', options);
const inputDate = document.querySelector('#datetime-picker')._flatpickr;

//-таймер-------------------------
setInterval(() => {
    const today = Date.now();
    const elTime = chosenDate - today;
    if (elTime <= 0) {
            return
        }
    const convertedElTime = convertMs(elTime);
    const { days, hours, minutes, seconds } = convertedElTime;

    daysEl.textContent = days //< 10 ? `0${days}` : days;
    hoursEl.textContent = hours //< 10 ? `0${hours}` : hours;
    minutesEl.textContent = minutes //< 10 ? `0${minutes}` :minutes;
    secondsEl.textContent = seconds //< 10 ? `0${seconds}` : seconds;

}, 1000)

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

