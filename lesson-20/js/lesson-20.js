// /todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? 🔸 Створити галерею зображень, яку можна прогортати
//? за допомогою клавіш клавіатури (наприклад, вліво / вправо)
let nextButton = document.querySelector('.next')
let prevButton = document.querySelector('.prev')
let imgSlader = document.querySelectorAll('li')
let arrOfImages = [...imgSlader]
for (let i = 0; i < arrOfImages.length; i++) {
    arrOfImages[i].style.order = i
}
let currentOrder = 0
nextButton.addEventListener('click' , function(){
    arrOfImages[currentOrder].style.order = currentOrder
    currentOrder = (currentOrder + 1) % arrOfImages.length
    if (currentOrder === 1){
        arrOfImages[0].style.order = 1
    }
    arrOfImages[currentOrder].style.order = 0
})
prevButton.addEventListener('click' , function(){
    if (currentOrder === 0){
        arrOfImages[arrOfImages.length - 1].style.order = 0
        arrOfImages[0].style.order = 1
    }
    currentOrder = (currentOrder - 1 + arrOfImages.length) % arrOfImages.length;
    if (arrOfImages[currentOrder + 1]) {
        arrOfImages[currentOrder + 1].style.order = currentOrder + 1;
    }
    arrOfImages[currentOrder].style.order = 0
})


//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? 🔸 Напиши скрипт створення і очищення колекції елементів.
//? Користувач вводить кількість елементів в input 
//? і натискає кнопку Створити, після чого рендериться колекція. 
//? При натисканні на кнопку Очистити, колекція елементів очищається.
//? 🔸 Створи функцію createBoxes(amount), 
//? яка приймає 1 параметр amount - число.
//? Функція створює стільки div, 
//? скільки вказано в amount і додає їх в div#boxes.
//? 🔸 Кожен створений div:
//? - Має випадковий rgb колір фону
//? - Розміри найпершого div — 30px на 30px
//? - Кожен наступний div після першого, 
//?   повинен бути ширше і вище попереднього на 10px
//? 🔸 Створи функцію destroyBoxes(), яка очищає div#boxes.
//? ✴️ В HTML є такі елементи:
/*
<div id="controls">
    <input type="number" min="0" max="100" step="1" />
    <button type="button" data-action="render">Створити</button>
    <button type="button" data-action="destroy">Очистити</button>
</div>

<div id="boxes"></div>
*/
//! Код виконаного завдання
let inputRenderingNumbers = document.querySelector('input')
let createButton = document.querySelector('[data-action="render"]')
let destroyButton = document.querySelector('[data-action="destroy"]')
let renderContainer = document.getElementById('boxes')
let infoMessage = document.getElementById('infoMessage')
infoMessage.style.display = 'none'
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const createBoxes = (amount) => {
    for (let o = 0; o < amount; o++) {
        renderContainer.appendChild(document.createElement('div'))
    }
    let counterDivs = 0
    const divs = [...renderContainer.children]
    divs.forEach(div => {
        counterDivs += 1
        Object.assign(div.style , {
            width: `${30 + counterDivs * 10}px`,
            height: `${30 + counterDivs * 10}px`,
            backgroundColor: getRandomColor()
        })
    });
    return renderContainer
}
const destroyBoxes = (amount) => {
    let NumberOfDivs = renderContainer.children.length
    if (amount > NumberOfDivs) {
        infoMessage.textContent = `Було видалено ${NumberOfDivs} елементів , а не ${amount}`
        infoMessage.style.display = 'inline'
        infoMessage.classList.add("blinkEffect")
        setTimeout(() => {
            infoMessage.style.display = 'none';
        }, 4000);
    }
    for (let index = 0; index < amount; index++) {
        if (renderContainer.children.length === 0){
            return
        }
        renderContainer.removeChild(renderContainer.lastChild)
    }
}
createButton.addEventListener('click' , function(){
    createBoxes(inputRenderingNumbers.value)
})
destroyButton.addEventListener('click' , function(){
    destroyBoxes(inputRenderingNumbers.value)
})
console.log("--------------------------------------------------");
