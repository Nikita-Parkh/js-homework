// Створити розмітку з двома текстовими полями та кнопкою. При натисканні на кнопку перевіряти, чи обидва поля містять значення, якщо так, то виводити повідомлення
//  "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".
const FirstMes = prompt("Введіть в перше поле : ");
const SecondMes = prompt("Введіть друге поле : ");
if ( FirstMes === null || SecondMes === null ||FirstMes.length === 0 || SecondMes.length === 0 ){
    alert("Відміна . Не всі поля заповнені")
}
else{
    alert("Добре . Всі поля заповнені")
}
// Створити розмітку з двома числовими полями та кнопкою. При натисканні на кнопку перевіряти, чи сума значень полів більша за 10, якщо так, то виводити повідомлення 
// "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".
let FirstNum = prompt("Введіть першу цифру : ");
let SecondNum = prompt("Введіть другу цифру : ");
if (FirstNum === null || SecondNum === null || FirstNum.length === 0 || SecondNum.length === 0 || isNaN(FirstNum) || isNaN(SecondNum) ) {
    alert("Відміна")
}
else {
    FirstNum = Number(FirstNum);
    SecondNum = Number(SecondNum);

    if (FirstNum + SecondNum < 10){
        alert("Сума менша 10")
    }
    else if (FirstNum + SecondNum === 10){
        alert("Сума дорівнює 10")
    }
    else if (FirstNum + SecondNum > 10){
        alert("Сума більше 10")
    }
}
// Створити розмітку з текстовим полем та кнопкою. При натисканні на кнопку перевіряти, чи введений текст містить слово "JavaScript", якщо так, то виводити повідомлення "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript"
const IncludeJs = prompt("Введіть текст із словом JavaScript : ");
if (IncludeJs === null || IncludeJs.trim().length === 0 || IncludeJs.includes("JavaScript") === false){
    alert("Відміна")
}
else {
    alert ("Все правильно і ваш текст містить JavaScript")
}
// Створити розмітку з формою з полями введення та кнопкою.
//  При натисканні на кнопку перевіряти, чи введене число більше за 10 та менше за 20, якщо так, то виводити повідомлення 
// "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".
let RangeNum = prompt("Введіть число : ");
if (RangeNum === null || isNaN(RangeNum)){
    alert("Відміна")
}
else {
    RangeNum = Number(RangeNum);
    
    if (RangeNum > 10 && RangeNum < 20){
        alert(`${RangeNum} входить у діапазон від 10 до 20`)
    }
    else {
        alert("Не входить в діапазон від 10 до 20")
    }
}
// Створити розмітку з формою з полями введення та кнопкою. 
// При натисканні на кнопку перевіряти, чи введені дані правильно заповнені, якщо так, то перенаправляти на іншу сторінку, якщо ні — виводити повідомлення про помилку. 
// Правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.
const TrueName = prompt("Введіть правильне ваше ім'я : ");
const TrueEmail = prompt("Введіть ваш email : ");
const TruePasw = prompt("Введіть пароль , який містить не менше 6 символів : ");
if (TrueName === null || TrueEmail === null || TruePasw === null ){
    alert("Відміна")
}
else {
    if (TrueName.trim().length < 3 || !isNaN(TrueName)){
        alert("Неправильне ім'я");
    }
    else if (TrueEmail.includes("@") === false || TrueEmail.includes(".") === false ){
        alert ("Неправильний email")
    }
    else if (TruePasw.trim().length < 6 ){
        alert ("Неправильний пароль")
    }
    else {
        alert("Всі ваші дані вірні")
    }
}
