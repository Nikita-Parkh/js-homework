console.log('Lesson-1 JS');

//? Створити змінну з іменем age і присвоїти їй значення свого віку.
//?  Вивести значення цієї змінної в консоль.

//! Код виконаного завдання
let age;
age = 17;
console.log(age)

//? Створити змінну з іменем name і присвоїти їй значення свого імені.
//? Вивести значення цієї змінної в консоль.

//! Код виконаного завдання
const name = "Nikita";
console.log(name);

//? Створити змінну з іменем isStudent і присвоїти їй значення true або false,
//? залежно від того, чи є студентом. Вивести значення цієї змінної в консоль.

//! Код виконаного завдання
const isStudent = true;
console.log("Is this person a student ? " + isStudent);


//? Створити змінну з іменем myString і присвоїти їй рядок з вашої улюбленою цитатою.
//? Вивести цей рядок в консоль.

//! Код виконаного завдання
let myString;
myString = "Якщо спочатку у вас не виходить, спробуйте ще раз";
console.log(myString);

//? Створити змінну з іменем myNumber і присвоїти їй довільне числове значення.
//? Потім присвоїти цій змінній результат додавання до неї числа 10. Вивести значення myNumber в консоль.

//! Код виконаного завдання
let myNumber;
myNumber = 5;
myNumber += 10;
console.log(myNumber);

//? Створити змінну з іменем myNull і присвоїти їй значення null. Вивести значення цієї змінної в консоль.

//! Код виконаного завдання
const myNull = null;
console.log(myNull);


//? Створити скрипт який виводить спливаюче вікно з запитом на введення імені користувача за допомогою prompt().
//? Після введення імені вивести повідомлення привітання з використанням введеного імені.

//! Код виконаного завдання
let PromtName;
PromtName = prompt("Введіть своє ім'я");
if (PromtName == null){
    alert("Ви натиснули отмена")
}
else if (PromtName.length == 0){
    alert("Ви нічого не ввели")
}
else {
    alert("hello " + PromtName)
}
//? Створити скрипт який виводить спливаюче підтвердження за допомогою confirm().
//? Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!".
//? Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!".

//! Код виконаного завдання
function Confirm(){
const ConfirmText = confirm("Підтвердіть");
if (ConfirmText == false){
    alert("Дію відмінено!")
}
else {
    alert("Дякую за підтвердження!")
}
};
Confirm();

//? Створити скрипт який виводить спливаюче попередження за допомогою alert().
//? Вивести повідомлення про те, що дія небезпечна та попросити користувача підтвердити дію за допомогою confirm().
//? Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!".
//? Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!"

//! Код виконаного завдання
alert("Попередження! Дія небезпечна")
Confirm();
