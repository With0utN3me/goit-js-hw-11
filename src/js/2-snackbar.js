// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const delayInput = document.querySelector(`input[name="delay"]`);
const radioButtons = document.querySelectorAll(`input[type="radio"]`);
const form = document.querySelector(".form");

// Оголошення загальних функцій
let delay;
let shouldResolve;

// Функція створення промісів
const makePromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                if(shouldResolve) {
                    resolve(`Fulfilled promise in ${delay}ms`
                    )
                } else {
                    reject(`Rejected promise in ${delay}ms`
                    )
                }
            }, delay);
});
};

//Івент лісенер для форми
form.addEventListener("submit", (event) => {
    event.preventDefault()
    //Валідація інпуту делей
    if(delayInput.value.includes("+") || delayInput.value.includes("-")){
        return iziToast.error({
            message: "Should not include + or -",
            position: `topRight`,
        });
    }
    else{
        delay = delayInput.value;
    }
    //Алгоритми перевірки радіо-кнопки
    for (const radioButton of radioButtons) {
        if(radioButton.checked){
            if(radioButton.value === "fulfilled"){
                shouldResolve = true;
            }
            else{
                shouldResolve = false;
            }
            break;
        }
    }
    //Виклик функції з передачею значень
    makePromise(delay, shouldResolve)
    .then(value => {
        iziToast.success({
            message: value,
            position: `topRight`,
        });
    })
    .catch(error => {
        iziToast.error({
            message: error,
            position: `topRight`,
        });
    })
})
