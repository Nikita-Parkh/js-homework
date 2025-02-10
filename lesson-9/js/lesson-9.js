// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
let array=[];
for (let i = 0; i < 3; i++ ){
    array[i] = prompt(`Ваше ${i+1} значення массиву :`);
}
function logItems(array){
    for (let o = 0 ; o < array.length; o++){
        console.log(`елемент ${o+1} буде мати значення - ${array[o]}`);
    }
}
logItems(array);

// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
const message = prompt("Введіть ваше речення:").trim().split(" ").length;
const pricePerWord = Number(prompt("Введіть скільки буде коштувати ваше слово:"))
function calculateEngravingPrice(message, pricePerWord){
    console.log(message * pricePerWord + " буде ціна вашого гравіювання");
}
calculateEngravingPrice(message, pricePerWord);

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає ПЕРШЕ найдовше слово в цьому рядку.
const string = prompt("Введіть якийсь текст :");
function findLongestWord(string){
    let newString = []
    newString = string.trim().split(" ");
    let longestWord = "";
    for (let i = 0 ; i < newString.length ; i++){
        if(newString[i].length > longestWord.length){
            longestWord = newString[i];
        }
    }
    return longestWord;
}
const longestWord = findLongestWord(string);
console.log(`в тексті : ${string} найдовше слово буде - ${longestWord}`);

// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// •  Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// •  Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.
const longString = prompt("Введіть якийсь небудь довгий текст : ");
function formatString(longString) {
    if (longString.length <= 40) {
        return longString;  
    } 
    else {
        return longString.slice(0, 40) + "..."; 
    }
}
console.log(formatString(longString));

// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam або sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false.
//  Слова в рядку можуть бути в довільному регістрі.
const newMessage = prompt("Введіть англ текст:").toLowerCase();
function checkForSpam(message){
    if (message.includes("spam") || message.includes("sale")){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkForSpam(newMessage));

// Напиши скрипт з наступним функціоналом:
// •  При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// •  Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// •  Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
const numbers = [];
while(true) {
let input = prompt("Введіть число:");
if (input === null){
    break
}
else if (input.trim().length === 0 || isNaN(Number(input))){
    alert("Неправильно ввели число");
    continue;
}
numbers.push(Number(input));
}
let total = 0;
for (let i = 0 ; i < numbers.length ; i++){
    total = total + numbers[i];
}
console.log(`Сума єлементів в вашому массиві - ${total}`);










































