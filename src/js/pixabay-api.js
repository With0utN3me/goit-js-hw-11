// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
const startButton = document.querySelector(`button[type="button"]`);
const daysHTML = document.querySelector(`span[data-days]`);
const hoursHTML = document.querySelector(`span[data-hours]`);
const minutesHTML = document.querySelector(`span[data-minutes]`);
const secondsHTML = document.querySelector(`span[data-seconds]`);
const dataTimeInput = document.querySelector("#datetime-picker");
function addLeadingZero(value){
    return String(value).padStart(2, '0');
}
let timerInterval = null;
startButton.disabled = true;
startButton.classList.add("disabled");
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    clickOpens: true,
    onClose(selectedDates) {
        if(Date.now() < selectedDates[0].getTime()){
            console.log(selectedDates[0]);
            userSelectedDate = selectedDates[0].getTime();
            startButton.classList.remove("disabled")
            startButton.disabled = false;
        }
        else{
            startButton.disabled = true;
            startButton.classList.add("disabled");
            iziToast.error({
                message: "Please choose a date in the future",
                position: `topRight`,
                progressBar: false,
            });
        }
    },
};
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
    const fp = flatpickr("#datetime-picker", options);
    let userSelectedDate;
    startButton.addEventListener("click", () => {
        startButton.disabled = true;
        startButton.classList.add("disabled");
        dataTimeInput.disabled = true;



        timerInterval = setInterval (()=>{
            if(userSelectedDate < Date.now()){
                clearInterval(timerInterval);
                return;
            }
            const timeValues = convertMs(userSelectedDate - Date.now());
            daysHTML.innerHTML = addLeadingZero(timeValues.days);
            hoursHTML.innerHTML = addLeadingZero(timeValues.hours);
            minutesHTML.innerHTML = addLeadingZero(timeValues.minutes);
            secondsHTML.innerHTML = addLeadingZero(timeValues.seconds);
        }, 1000)

    })
