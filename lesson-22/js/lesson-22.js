// Створіть HTML-сторінку з кількома зображеннями, які будуть підлягати лінійному завантаженню. Наприклад, можна використовувати зображення з високою роздільною здатністю або зображення з важкими форматами.
// 
// 1.  Додайте data-src атрибут до тегів img, який містить посилання на зображення, яке необхідно завантажити.
// 2.  Додайте CSS стилі, які забезпечують мінімальну висоту тегів img та фоновий колір для видимих зображень, які ще не завантажені. 
// 3.  img { height: 200px; background-color: #f0f0f0; }
// 4.  Створіть JavaScript-файл та імпортуйте IntersectionObserver.
// 5.  Встановіть IntersectionObserver для кожного зображення з data-src атрибутом, яке потрібно завантажити.
// 6.  Для кожного зображення, яке стає видимим, змініть його src атрибут на data-src та перестаньте спостерігати його.
// 7.  Додайте додаткову функціональність, таку як анімацію завантаження або зображення-заповнювач, щоб покращити користувацький досвід.
// 8.  Додатково, не обов’язково! Оптимізуйте завантаження зображень за допомогою WebP формату або скейлінга зображень до відповідної роздільної здатності, щоб зменшити обсяг завантажуваної інформації.
// 9.  Перевірте результати за допомогою інструментів розробника браузера, таких як "Network" або "Performance", щоб переконатися, що зображення завантажуються тільки тоді, коли вони стають видимими на сторінці.
// 10.  Додайте можливість завантажувати зображення тільки при натисканні на кнопку або при іншій дії користувача.
// 11.  Запустіть сайт на різних пристроях та перевірте, чи працює лінійне завантаження зображень, коли користувач прокручує сторінку.
// 12.  Залиште коментарі в коді, щоб пояснити, як він працює та як можна його покращити в майбутньому.
import { galleryItems } from "./gallery-items.js"
const linearSladerItems = document.querySelectorAll(".slader__li")
const massiveOfItems = [...linearSladerItems]
let counter = 0
massiveOfItems.forEach(item => {
    const linearSladerImg = document.createElement("img")
    linearSladerImg.dataset.src = galleryItems[counter].original;
    linearSladerImg.alt = galleryItems[counter].description
    linearSladerImg.classList.add("slader__img")
    item.appendChild(linearSladerImg)
    counter++
});
const observe = new IntersectionObserver((entries , observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const img = entry.target;
            img.src = img.dataset.src;
            img.onload = () => img.classList.add("loaded"); 
            observer.unobserve(img); 
        }
    });
})
document.querySelectorAll("img[data-src]").forEach(img => {
    observe.observe(img);
});