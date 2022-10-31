import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('[data-start]');
let currentTime = new Date();
btnStart.setAttribute('disabled', true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);

     if (selectedDates[0] < currentTime) {
        alert ('Please choose a date in the future');
        btnStart.setAttribute('disabled', true);
     } else {
        btnStart.removeAttribute('disabled');
     }
     
    },
  };
  const calendar = flatpickr('#datetime-picker', options);
  

const timer = {
    start() {
        const startTime = calendar.selectedDates[0];

        setInterval(() => {
            
            const deltaTime = startTime - currentTime;
            const time = convertMs(deltaTime);
            
        }, 1000)
    }
}

timer.start();

function convertMs(ms) {
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }