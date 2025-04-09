//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? 🔸 Напиши скрипт в якому є три радіобатони зі значенями кольрів.
//? При обиранні на будь якого, колір фону боді змінюється відповідно.
//? ✴️ В HTML є така форма:
/*
<form class="form">
    <p>Choose a color:</p>
    <label>
    <input type="radio" name="color" value="red" />
    Red
    </label>
    <label>
    <input type="radio" name="color" value="white" checked />
    White
    </label>
    <label>
    <input type="radio" name="color" value="green" />
    Green
    </label>
</form>
*/
//! Код виконаного завдання
let inputs = document.querySelectorAll('input')
let redInput = inputs[0]
let whiteInput = inputs[1]
let greenInput = inputs[2]
let restartInput = inputs[3]
let bodyElement = document.querySelector('body')
let methodOfColors = (color) => {
    color.addEventListener('click' , function(){
        bodyElement.style.background = 'none'
        if(color.value ==='red'){
            bodyElement.style.backgroundColor = 'red'
        }
        else if(color.value === 'green'){
            bodyElement.style.backgroundColor = 'green'
        }
        else if(color.value === 'white'){
            bodyElement.style.backgroundColor = 'white'
        }
        else if(color.value === 'restart'){
            bodyElement.style.background = 'var(--linear-color)'
        }
    })
}
methodOfColors(redInput)
methodOfColors(whiteInput)
methodOfColors(greenInput)
methodOfColors(restartInput)
console.log("--------------------------------------------------");


//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? 🔸 Напиши скрипт який,
//? при наборі тексту в інпут input#name-input (подія input), 
//? підставляє його поточне значення в span#name-output. 
//? Якщо інпут порожній, в спані повинен відображатися рядок "НЕЗНАЙОМЕЦЬ".
//? ✴️ В HTML є такі елементи:
/*
<input type="text" placeholder="Ваше ім'я?" id="name-input" />
<h1>Привіт, <span id="name-output">незнайомець</span>!</h1>
*/
//! Код виконаного завдання
let inputName = document.getElementById('name-input')
let textName = document.getElementById('name-output')
inputName.addEventListener('input' , function(){
    if (inputName.value.trim().length != 0){
        textName.textContent = inputName.value
    }
    else if (inputName.value.trim().length === 0){
        textName.textContent = 'НЕЗНАЙОМЕЦЬ'
    }
})
inputName.style.marginTop = '50px'
console.log("--------------------------------------------------");


//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? 🔸 Напиши скрипт, який би при втраті фокуса на інпут,
//? перевіряв його вміст на правильну кількість символів.
//? ✴️ В HTML є такий input:
/*
<input
    type="text"
    id="validation-input"
    data-length="6"
    placeholder="Введи 6 символів"
/>
*/
//? 🔸 Скільки символів має бути в інпут, 
//? вказується в його атрибуті data-length.
//? 🔸 Якщо введена відповідна кількість або більше, 
//? то border інпут стає зеленим, 
//? якщо неправильне - червоним.
//! Код виконаного завдання
let inputOfValidation = document.getElementById('validation-input')
inputOfValidation.style.outline = 'none'
inputOfValidation.addEventListener('input' , function(){
    if(inputOfValidation.value.trim().length >= 6){
        inputOfValidation.style.border = '1px solid green'
    }
    else if (inputOfValidation.value.trim().length < 6){
        inputOfValidation.style.border = '1px solid red'
    }
})
console.log("--------------------------------------------------");


//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? 🔸 Напиши скрипт, який реагує 
//? на зміну значення input#font-size-control (подія input) 
//? і змінює інлайн-стиль span#text, 
//? оновлюючи властивість font-size. 
//? В результаті при перетягуванні повзунка змінюватиметься розмір тексту.
//? ✴️ В HTML є такі елементи:
/*
<span id="text">Абракадабра!</span>
<br />
<input id="font-size-control" type="range" />
*/
//! Код виконаного завдання
document.querySelector('.range-div').style.marginTop = '50px'
let textForRange = document.getElementById('text')
let inputRange = document.getElementById('font-size-control')
textForRange.style.fontSize = inputRange.value + 'px'
Object.assign(inputRange.style , {
    position:'absolute',
    top:'65%',
})
inputRange.addEventListener('input' , function(){
    textForRange.style.fontSize = inputRange.value + 'px'
})
console.log("--------------------------------------------------");