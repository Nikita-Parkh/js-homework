//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ В HTML є список категорій ul#categories:
/*
    <ul id="categories">
        <li class="item">
            <h2>Тварини</h2>
            <ul>
                <li>Кіт</li>
                <li>Хом'як</li>
                <li>Кінь</li>
                <li>Папуга</li>
            </ul>
        </li>
        <li class="item">
            <h2>Продукти</h2>
            <ul>
                <li>Хліб</li>
                <li>Петрушка</li>
                <li>Сир</li>
            </ul>
        </li>
        <li class="item">
            <h2>Технології</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
            </ul>
        </li>
    </ul>
*/
//? 🔸 Напиши скрипт, який виконає наступні операції:
//todo: Крок-1
//? 🔸 - Порахує і виведе в консоль
//?  кількість категорій в ul#categories,
//?  тобто елементів li.item.
//? Вийде так: 
//* 'У списку 3 категорії.'
//todo: Крок-2
//? 🔸 - Для кожного елемента li.item в списку ul#categories,
//? знайде і виведе в консоль текст заголовка елемента (тега h2)
//? і кількість елементів в категорії
//? (всіх вкладених в нього елементів li).
//? Наприклад, для першої категорії вийде так:
//* Категорія: Тварини
//* Кількість елементів: 4
//! Код виконаного завдання
//todo: Крок-1
const liElements = document.querySelectorAll('.item')
console.log(`у списку ${liElements.length} категорій`)
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//todo: Крок-2
let arrayOfLi = [...liElements]
for (let i = 0; i < arrayOfLi.length; i++) {
    console.log(`Категорія: ${arrayOfLi[i].firstElementChild.textContent} \n 
    Кількість елементів: ${arrayOfLi[i].lastElementChild.getElementsByTagName('li').length}` )
}
console.log("----------------------------------------------------------------");


//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ В HTML є пустий список ul#ingredients:
/*
<ul id="ingredients"></ul> 
*/
//? ✴️ В JS є масив рядків:
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
//? 🔸 Напиши скрипт, який
//? для кожного елемента масиву ingredients
//? створить окремий li,
//? після чого вставить всі li за одну операцію
//? в список ul.ingredients.
//? 🔸 Для створення DOM-вузлів використовуй document.createElement().
//! Код виконаного завдання
const emptyList = document.getElementById('ingredients')
ingredients.forEach(ingredient => {
    const listItem = document.createElement('li')
    listItem.textContent = ingredient
    emptyList.appendChild(listItem)
});
emptyList.style.listStyle = 'none'
console.log("----------------------------------------------------------------");


//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? 🔸 Напиши скрипт для створення галереї зображень по масиву даних.
//? ✴️ В HTML є список ul#gallery:
/*
<ul id="gallery"></ul> 
*/
//? ✴️ Використовуй масив об'єктів images
//? для створення тегів img вкладених в li:
const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
//? 🔸 Для створення розмітки використовуй шаблонні рядки
//? і insertAdjacentHTML().
//? 🔸 Всі елементи галереї повинні додаватися
//? в DOM за одну операцію вставки.
//? 🔸 Додай мінімальне оформлення галереї флексбоксами
//? або грід через css-класи.
//! Код виконаного завдання
const gallery = document.getElementById('gallery')
Object.assign(gallery.style ,{
    display:'flex',
    flexDirection:'column',
    listStyle:'none',
    gap:'50px'
})
let stringOfLi = '';
images.forEach(li => {
    stringOfLi += `<li><img src="${li.url}" alt="${li.alt}" width="300px"></li>`
});
gallery.insertAdjacentHTML('beforeend' , stringOfLi)
console.log("----------------------------------------------------------------");
