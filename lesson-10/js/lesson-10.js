//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши функцію вищого порядку яка буде виводити 
//? на екран повідомлення “Hello World!”. 
//? Зроби 2 варіанта виклика функції вищого порядку:
//? - з використання стрілкової колбек-функції
//? - з використання анонімної стрілкової колбек-функції з неявним поверненням.
//! Код виконаного завдання

function callback (callback){
    callback();
}
// first var
const firstVar = () => {
    console.log("Hello world")
}
callback(firstVar);
// second var
callback(() => console.log("Hello world"));
console.log("--------------------------------------------------");

//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Створи стрілкову колбек-функцію generatesRandomNumber з неявним поверненням, 
//? яка генерує та повертає випадкове число від min = 1 до max = 10.
//? Зроби функцію вищого порядку guessNumber, яка приймає чотири аргумента:
//? - дві змінні, які визначають диапазон випадкових чисел, це min та max,
//? - будь яке число число randomNumber від 1 до 10 і 
//? - колбек-функцію generatesRandomNumber,
//? та повертає повідомлення: "✅ Ви вгадали число!",
//? якщо число randomNumber дорівнює числу, 
//? яке генерує та повертає колбек-функція generatesRandomNumber.
//? Якщо числа не дорівнюють одне одному,
//? повертається повідомлення: "❌ Ви НЕ вгадали число"
//! Код виконаного завдання
const min = 1;
const max = 10;
const generatesRandomNumber = (min , max) => Math.floor(Math.random()*(max - min + 1)) + min;
function guessNumber(min , max , randomGuestNumber , callbackGeneratesRandomNumber){
    const randomNum = callbackGeneratesRandomNumber(min , max);
    if (randomGuestNumber === randomNum){
       const consoleText = "✅ Ви вгадали число!";
       return consoleText;
    }
    else if (randomGuestNumber != randomNum){
       const consoleText = "❌ Ви НЕ вгадали число. Було " + randomNum + " , а ваш варіант: " + randomGuestNumber;
       return consoleText;
    }
}
const guestVariant = Number(prompt(`Введіть число від ${min} до ${max}`));
console.log(guessNumber(min , max , guestVariant , generatesRandomNumber));
console.log("--------------------------------------------------");

//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Створи стрілкову колбек-функцію generatesRandomNumber1to5 з неявним поверненням,
//? яка генерує та повертає випадкове число від 1 до 5.
//? Створи стрілкову колбек-функцію convertSize з неявним поверненням,
//? яка приймає будь яке числове значення, додає до нього "px" 
//? та повертає результат у такому вигляді:
//? наприклад, приймає 2 -> повертає 2px, або приймає 5 -> повертає 5px.
//? Зроби функцію вищого порядку convertRandomNumberSize, 
//? яка приймає два аргумента:
//? функцію generatesRandomNumber1to5 та функцію convertSize яка приймає
//? випадкове число від 1 до 5 від функції generatesRandomNumber1to5.
//? Функція convertRandomNumberSize повертає результат 
//? перетворення випадкового числа від 1 до 5 від функції convertSize.
//! Код виконаного завдання
const generatesRandomNumber1to5 = () => Math.floor(Math.random()*(5)) + 1;
const convertSize = (num) => num = num + "px";
function convertRandomNumberSize(generateNum , convertNum){
    const randomNum1to5 = generateNum();
    return convertNum(randomNum1to5);
}
console.log(convertRandomNumberSize(generatesRandomNumber1to5 , convertSize));
console.log("--------------------------------------------------");

//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши функцію, applyCallbackToEachElement яка приймає масив чисел і колбек-функцію.
//? Функція повинна застосовувати колбек-функцію
//? до кожного елементу масиву та повертати новий масив,
//? що містить результати застосування колбек-функції до кожного елементу.
//! Код виконаного завдання
const applyCallbackToEachElement = (array, callback) => {
    return callback(array);
};
const array = [1, 2, 3, 4, 5];
const squareCallback = (array) => {
    for (let i = 0 ; i < array.length ; i++){
        array[i] = array[i] * array[i]
  }
  return array;
}
const result = applyCallbackToEachElement(array, squareCallback);
console.log("result:", result); //! [1, 4, 9, 16, 25]

console.log("--------------------------------------------------");

//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Розрахунок дисконтної ціни.
//? Створіть функцію, яка розраховує та повертає
//? дисконтну ціну на товар з урахуванням знижки.
//? Функція повинна приймати вартість товару,
//? відсоток знижки, та колбек-функцію як аргументи.
//? В якості функції вищого порядку використайте стрілкову функцію,
//? останнім аргументом якої є стрілкова колбек-функція.
//! Код виконаного завдання
const price = 100;
const discount = 10;
const calculateDiscountedPrice = (price, discount, callback) => {
    return callback(price , discount);
};
const showDiscountedPrice = (price , discount) => {
    return price - (price * discount / 100) ;
};
const discountPrice = calculateDiscountedPrice(price, discount, showDiscountedPrice);
console.log(discountPrice); //! Discount price: 90

console.log("--------------------------------------------------");