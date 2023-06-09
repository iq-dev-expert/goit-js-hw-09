import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSabmit);

function onFormSabmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.target.elements;
  let delayValue = Number(delay.value);

  for (let i = 1; i <= Number(amount.value); i += 1) {
    createPromise(i, delayValue).then(successNotify).catch(failureNotify);
    delayValue += Number(step.value);
  }
  form.reset();
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}

function successNotify({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function failureNotify({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
