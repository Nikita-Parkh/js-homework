// Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік"
// . При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.

const selectOfThird = prompt("Введіть Каву , Чай або Сік :");
if (selectOfThird === null || selectOfThird.trim().length === 0 || isNaN(selectOfThird) === false){
    alert("Відміна");
}
else {
    switch(selectOfThird) {
        case "Каву" :
            console.log("Ви вибрали каву ");
            alert("Ви вибрали каву ")
        break;

        case "Кава" :
            console.log("Ви вибрали каву ");
            alert("Ви вибрали каву ")
        break;

        case "кава" :
            console.log("Ви вибрали каву ");
            alert("Ви вибрали каву ")
        break;

        case "каву" :
            console.log("Ви вибрали каву ");
            alert("Ви вибрали каву ")
        break;

        case "чай" :
            console.log("Ви вибрали чай ");
            alert("Ви вибрали чай ");
        break;

        case "Чай" :
             console.log("Ви вибрали чай ");
             alert("Ви вибрали чай ");
        break;

        case "Сік":
            console.log("Ви вибрали сік ");
            alert("Ви вибрали сік ");
        break;

        case "сік":
            console.log("Ви вибрали сік ");
            alert("Ви вибрали сік ");
        break;


        default :
            console.log("Ви вибрали неправильно або не те , що треба")
            alert("Ви вибрали неправильно або не те , що треба");
        break;
    
    }
}

// Створити розмітку з полем введення, що приймає рядок та кнопкою. 
// При натисканні на кнопку перевіряти, чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.

let day = prompt("Введіть день неділі : ");
if ( day === null || day.trim().length === 0 ){
    alert("Відміна");
}
else if ( isNaN(day) === false ){
    alert("Треба вводити за допомогою букв");
}
else {
    day = day.toLowerCase();
    switch (day){

        case "понеділок" :
            console.log("понеділок - це робочий день");
            alert("понеділок - це робочий день");
        break;

        case "вівторок" :
            console.log("вівторок - це робочий день");
            alert("вівторок - це робочий день");
        break;

        case "середа" :
            console.log("середа - це робочий день");
            alert("середа - це робочий день");
        break;

        case "четвер" :
            console.log("четвер - це робочий день");
            alert("четвер - це робочий день");
        break;

        case "п'ятниця" :
            console.log("п'ятниця - це робочий день");
            alert("п'ятниця - це робочий день");
        break;

        case "субота" :
            console.log("субота - це вихідний день");
            alert("субота - це вихідний день");
        break;

        case "неділя" :
            console.log("неділя - це вихідний день");
            alert("неділя - це вихідний день");
        break;

        default :
            console.log("Ви неправильно ввели щось. ");
            alert("Ви неправильно ввели щось. ");
        break   
    }
}

// Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць.

let month = prompt("Введіть номер місяця :");
if (month === null || month.length === 0){
    alert("Відміна");
}
else if (isNaN(month)){
    alert("Треба вводити місяць числом")
}
else if (Number(month) > 12 || Number(month) < 1 ){
    alert("Неправильний діапазон ")
}
else {
    month = Number(month);
    switch (month) {
        case 1:
            alert("Січень - це зима");
            console.log("Січень - це зима");
        break;
        case 2:
            alert("Лютий - це зима");
            console.log("Лютий - це зима");
        break;
        case 3:
            alert("Березень - це весна");
            console.log("Березень - це весна");
        break;
        case 4:
            alert("Квітень - це весна");
            console.log("Квітень - це весна");
        break;
        case 5:
            alert("Травень - це весна");
            console.log("Травень - це весна");
        break;
        case 6:
            alert("Червень - це літо");
            console.log("Червень - це літо");
        break;
        case 7:
            alert("Липень - це літо");
            console.log("Липень - це літо");
        break;
        case 8:
            alert("Серпень - це літо");
            console.log("Серпень - це літо");
        break;
        case 9:
            alert("Вересень - це осінь");
            console.log("Вересень - це осінь");
        break;
        case 10:
            alert("Жовтень - це осінь");
            console.log("Жовтень - це осінь");
        break;
        case 11:
            alert("Листопад - це осінь");
            console.log("Листопад - це осінь");
        break;
        case 12:
            alert("Грудень - це зима");
            console.log("Грудень - це зима");
        break;
        default:
            alert("Неправильний номер місяця.");
            console.log("Неправильний номер місяця.");
        break;
    }
}
// Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити кількість днів у цьому місяці.
let dayMonth = prompt("Введіть місяць , щоб дізнатися скільки днів у ньому ");
if (dayMonth === null || dayMonth.trim().length === 0 || isNaN(dayMonth) === false){
    alert("Відміна");
}
else {
    dayMonth = dayMonth.toLowerCase();
    switch (dayMonth) {
    case "січень":
        alert("У Січні 31 день");
        console.log("У Січні 31 день");
        break;
    case "лютий":
        alert("У Лютому 28 або 29 днів (у високосному році)");
        console.log("У Лютому 28 або 29 днів (у високосному році)");
        break;
    case "березень":
        alert("У Березні 31 день");
        console.log("У Березні 31 день");
        break;
    case "квітень":
        alert("У Квітні 30 днів");
        console.log("У Квітні 30 днів");
        break;
    case "травень":
        alert("У Травні 31 день");
        console.log("У Травні 31 день");
        break;
    case "червень":
        alert("У Червні 30 днів");
        console.log("У Червні 30 днів");
        break;
    case "липень":
        alert("У Липні 31 день");
        console.log("У Липні 31 день");
        break;
    case "серпень":
        alert("У Серпні 31 день");
        console.log("У Серпні 31 день");
        break;
    case "вересень":
        alert("У Вересні 30 днів");
        console.log("У Вересні 30 днів");
        break;
    case "жовтень":
        alert("У Жовтні 31 день");
        console.log("У Жовтні 31 день");
        break;
    case "листопад":
        alert("У Листопаді 30 днів");
        console.log("У Листопаді 30 днів");
        break;
    case "грудень":
        alert("У Грудні 31 день");
        console.log("У Грудні 31 день");
        break;
    default:
        alert("Неправильна назва місяця.");
        console.log("Неправильна назва місяця.");
        break;
    }
}
// Створити розмітку з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.) та кнопкою. 
// При натисканні на кнопку виводити відповідне повідомлення про дію: якщо це "червоний" — "стоп", якщо "зелений" — "йти", якщо "жовтий" — "чекати".
const color = prompt("Введіть кольор світлофора : ").toLowerCase();
if (color === null || color.trim().length === 0 ){
    alert("Відміна");
}
else {
    switch(color){
        case "жовтий":
            console.log("чекати");
            alert("чекати");
        break;

        case "червоний" :
            console.log("стояти");
            alert("стояти");
        break;

        case "зелений" :
            console.log("йти");
            alert("йти");
        break;

        default :
            console.log("неправильний колір");
            alert("неправильний колір");
        break;
    }
}
// Створити розмітку з двома полями введення, що приймають числа та список (select) з варіантами вибору операцій: "+", "-", "*", "/". При натисканні на кнопку виводити результат обраної операції над цими числами. 
// Користувач повинен бути попереджений про можливість ділення на нуль.

let firstNum = prompt("Введіть перше число для операції : ");
let secondNum = prompt("Введіть друге число для операції : ");
const operationNum = prompt("Введіть операцію , тобто + , - , * або / :");
if (firstNum === null || firstNum.trim().length === 0 || secondNum === null || secondNum.trim().length === 0 || operationNum === null || operationNum.trim().length === 0 ){
    alert("Відміна");
}
else if (isNaN(firstNum) || isNaN(secondNum)){
    alert("Рядок повинний бути заповнений цифрами ")
}
else if (operationNum === "/" && secondNum === "0"){
    alert("на 0 ділити неможна");
}
else{
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    switch(operationNum){
        case "+" :
            alert(firstNum + secondNum);
            console.log(firstNum + secondNum);
        break;

        case "-" :
            alert(firstNum - secondNum);
            console.log(firstNum - secondNum);
        break;

        case "*" :
            alert(firstNum * secondNum);
            console.log(firstNum * secondNum);
        break;

        case "/" :
            alert(firstNum / secondNum);
            console.log(firstNum / secondNum);
        break;
        
        default :
            alert("неправильно вводиш")
            console.log("неправильно вводиш")
    }
}