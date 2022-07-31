import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form')

form.addEventListener('submit', createPromisesOnSubmit);
//1
function createPromisesOnSubmit(event) {
  event.preventDefault()

  const { delay, step, amount } = event.target;

  const delayTime = Number(delay.value);
  const stepTime = Number(step.value);
  const amountNumber = Number(amount.value);

  setTimeout(() => {
    createPromises(amountNumber, stepTime);
  }, delayTime);
}
//2
  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;

    setInterval(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay)
    });
  }
//3
function createPromises(counter, stepTime) {
    
  let time = 0;
  
    for (let i = 0; i <= counter; i += 1){
      time += stepTime;

  createPromise(i, time)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.success(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
  }