 //todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку з кнопкою та текстовим полем. 
//? За допомогою JavaScript отримати доступ до кнопки 
//? та текстового поля за їх ідентифікаторами 
//? та змінити текст на кнопці на значення текстового поля.
//! Код виконаного завдання
const button = document.getElementById('input-container__button')
const input = document.getElementById('input-container__input')
button.addEventListener('click' , function(){
    button.textContent = input.value
    input.value = null
})
input.addEventListener('click' , function(){
    button.textContent = 'Натисніть після введеня значення у інпут'
})
console.log("--------------------------------------------------");


//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку з заголовком та зображенням. 
//? За допомогою JavaScript отримати доступ до зображення 
//? та змінити значення атрибута "src" на шлях до іншого зображення.
//! Код виконаного завдання
const image = document.querySelector('.img-container__image')
const title = document.querySelector('.img-container__title')
title.addEventListener('click' , function(){
    image.src = '/images/mustang.png'
})
console.log("--------------------------------------------------");


//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку  з посиланням та зображенням. 
//? За допомогою JavaScript отримати доступ до посилання 
//? та змінити значення атрибута "href" на нову URL-адресу. 
//? Також отримати доступ до зображення 
//? та додати новий атрибут "alt" з описом зображення.
//! Код виконаного завдання
const link = document.querySelector('.link-container__link')
const linkImg = document.querySelector('.link-container__image')
linkImg.addEventListener('click' , function(){
    link.textContent = 'Now click here'
    link.target = '_blank'
    link.href = 'https://uk.javascript.info/'
    linkImg.alt = 'Посилання і атрибут картинки змінені'
})
console.log("--------------------------------------------------");


//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку  зі списком елементів. 
//? За допомогою JavaScript отримати доступ 
//? до першого елемента списку 
//? та змінити його вміст на новий текст. 
//! Код виконаного завдання
document.querySelector('.list-container-list__item-zero').addEventListener('click' , function(){
    let randomizer = Math.floor(Math.random() * 4) + 0
    let moreNumbers = Math.floor(Math.random() * 10) + 1
    let items = document.querySelectorAll('.list-container-list__item')
    let item = items[randomizer]
    item.textContent = moreNumbers
})
console.log("--------------------------------------------------");