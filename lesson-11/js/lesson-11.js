//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ Створіть об'єкт "bankAccount" з трьома властивостями:
//?  "ownerName", "accountNumber", "balance"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод "deposit",
//? який, використовуючи методи взаємодії з користувачем,
//? додає гроші на рахунок,
//? та виводить повідомлення про залишок на рахунку
//? дублюючи його в консоль.
//? ✴️ За допомогою додавання властивостей,
//? додайте до об'єкту метод "withdraw",
//? який, використовуючи методи взаємодії з користувачем,
//? дозволяє знімати гроші з рахунку,
//? якщо на рахунку достатньо коштів,
//? та виводить повідомлення про залишок на рахунку,
//? дублюючи його в консоль.
//? Якщо на рахунку не вистачає коштів, то він виводить повідомлення:
//? "⛔️ Не достатньо коштів на вашому рахунку!",
//? дублюючи його в консоль.
//? ✳️ За допомогою виклика методу "deposit" об'єкта "bankAccount" додай кошти на рахунок.
//? ✳️ За допомогою виклика методу "withdraw" об'єкта "bankAccount" зніми кошти з рахунку.
//! Код виконаного завдання

const bankAccount = {
    ownerName: "Михайло Попович",
    accountNumber: "UA1012564572",
    balance: 1015
}
bankAccount.deposit = function() {
    while (true) {
    let depositeSum = prompt("Введіть суму на поповнення рахунку:");
    if (depositeSum === null){
        alert("Скасування...")
        return;
    }
    else if (isNaN(depositeSum)){
        alert("Треба вводити числа")
        continue;
    }
    depositeSum = Number(depositeSum);
    if (depositeSum <= 0){
        alert("Поповнення не може бути на нуль або менше...");
        continue;
    }
    this.balance += depositeSum;
    alert("Поповнення пройшло успішно! На рахунку " + this.balance + " грн");
    console.log("Поповнення пройшло успішно! На рахунку " + this.balance + " грн");
    return;
}
}
bankAccount.withdraw = function() {
    while (true){
        let withdrawSum = prompt("Введіть скільки ви хочете зняти грошей (на рахунку " + this.balance + " грн)");
        if (withdrawSum === null){
            alert("Скасування...");
            return;
        }
        else if (isNaN(withdrawSum)){
            alert("Треба вводити числа")
            continue;
        }
        withdrawSum = Number(withdrawSum);
        if(withdrawSum <= 0){
            alert("Ви не можете зняти на нуль або мінусове значення...");
            continue;
        }
        else if (withdrawSum > this.balance){
            alert("Недостатньо коштів на рахунку...");
            continue;
        }
        this.balance -= withdrawSum;
        alert(`Ви зняли ${withdrawSum} грн , тепер на вашому рахунку ${this.balance} грн`);
        console.log(`Ви зняли ${withdrawSum} грн , тепер на вашому рахунку ${this.balance} грн`);
        return;
    }
}
const quest = prompt("Ви хочете поповнити або зняти гроші ?").toLocaleLowerCase();
if (quest === "зняти"){
    bankAccount.withdraw();
}
else if (quest === "поповнити"){
    bankAccount.deposit();
}
else{
    alert("Некоректний вибір.")
}
console.log("--------------------------------------------------");



//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ Створіть об'єкт "weather" з трьома властивостями:
//? "temperature", "humidity", "windSpeed"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод,
//? який, використовуючи методи взаємодії з користувачем,
//? отримує значення температури та повертає "true",
//? якщо температура нижче 0 градусів Цельсія,
//? та "false", якщо температура вище або дорівнює 0 градусів Цельсія.
//? ✳️ Якщо метод повернув "true" вивести повідомлення
//? “Температура нижче 0 градусів Цельсія” і навпаки,
//? дублюючи ці повідомлення  в консоль.
//! Код виконаного завдання

const weather = {
    temperature: 10,
    humidity: 60,
    windSpeed: 4
}
weather.lowerOrUpperCelcium = function() {
    while(true) {
    this.temperature = prompt("Введіть нове значення температури у вашій місцевості:");
    if (this.temperature === null){
        return;
    }
    else if (isNaN(this.temperature)){
        alert("Треба вводити числами...");
        continue;
    }
    this.temperature = Number(this.temperature);
    if (this.temperature >= 0){
        return false;
    }
    else if (this.temperature < 0){
        return true;
    }
}
}
const isBelowZero = weather.lowerOrUpperCelcium();
if (isBelowZero === true) {
    alert("Температура менше нуля");
    console.log("Температура менше нуля");
} else if (isBelowZero === false) {
    alert("Температура більше нуля");
    console.log("Температура більше нуля");
}
console.log("--------------------------------------------------");

//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Створіть об’єкт "user" з трьома властивостями:
//? "name", "email", "password"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод "login",
//? який який буде перевіряти правильність
//? введеного name, email та password на такі умови:
//?  - ім'я <name> містить не менше 3 символів,
//?  - електронна пошта <email> містить символ @ та крапку після неї,
//?  - пароль <password> містить не менше 6 символів.
//? ❌ Якщо введені дані не пройшли ці перевірки
//? треба вивести в консоль відповідні повідомлення з помилками(помилкою).
//? ✅ Якщо ВСІ введені дані пройшли перевірки,
//? треба послідовно вивести в косоль значення ВСІХ цих даних.
//! Код виконаного завдання

const user = {
    name:"Нікіта",
    email:"nikita0@gmail.com",
    password:12345678
}
user.login = function(){
    while (true){
        const nameOfUser = prompt("Введіть ваше ім'я");
        if (nameOfUser === null){
            alert("Відміна...")
            return;
        }
        else if (isNaN(nameOfUser) === false){
            alert("Треба вводити літери...");
            continue;
        }
        else if (nameOfUser.length < 3){
            alert("Ім'я має бути більше за три символи");
            continue;
        }

        const emailOfUser = prompt("Введіть ваш email");
        if (emailOfUser === null){
            alert("Відміна...")
            return;
        }
        else if (emailOfUser.includes("@") === false || emailOfUser.includes(".") === false){
            alert("Немає головних єлементів email...");
            continue;
        }

        const passwordOfUser = prompt("Введіть ваш пароль:");
        if (passwordOfUser === null){
            alert("Відміна...")
            return;
        }
        else if (passwordOfUser.length < 6){
            alert("Пароль не може містити менше 6 єлементів...");
            continue;
        }

        this.name = nameOfUser;
        this.email = emailOfUser;
        this.password = passwordOfUser;

        return user;
    }
}
user.login();
for (const value in user){
    if (typeof user[value] !== "function"){
        console.log(`${value} : ${user[value]}`)
    }
}
console.log("--------------------------------------------------");

//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ Створіть об'єкт "movie" з чотирма властивостями:
//? "title", "director", "year", "rating".
//? ✴️ За допомогою додавання властивостей,
//? додайте до об'єкту метод,
//? який повертає "true",
//? якщо рейтинг фільму вище 8,
//? та "false",
//? якщо рейтинг фільму 8 або нижче.
//? Послідовно вивести значення ВСІХ властивостей в косоль
//? Якщо метод повернув "true",
//? то колір тексту поля title в консолі повинен бути зелений.
//? Якщо метод повернув "false",
//? то колір тексту поля title в консолі повинен бути червоний.
//! Код виконаного завдання

const movie = {
    title:"Intestellar" , 
    director:"Nolan Cristofer" , 
    year:"2014" ,
    rating:"" 
}
movie.ratingOfFilm = function() {
    this.rating = prompt(`Як би ви оцінили фільм від ${this.director} - ${this.title} , ${this.year} року ?`);
    if (this.rating === null){
        alert("Відміна...");
        return;
    }
    while(true){
        if (isNaN(this.rating)){
            alert("Треба оцінювати у вигляді чисел");
            continue;
        }
        this.rating = Math.round(Number(this.rating));
        if (this.rating > 8){
            return false;
        }
        else if (this.rating <= 8){
            return true;
        }
    }
}
const rateOfFilm = movie.ratingOfFilm();
if (rateOfFilm === true){
    for (const b in movie){
        if (typeof movie[b] !== "function"){
            if (b === "rating"){
                console.log(`%c${b} : ${movie[b]}`, "color: red;");
            }
            else {
                console.log(`${b} : ${movie[b]}`);
            }
        }
    }
}
else if (rateOfFilm === false){
    for (const b in movie){
        if (typeof movie[b] !== "function"){
            if (b === "rating"){
                console.log(`%c${b} : ${movie[b]}`, "color: green;");
            }
            else {
                console.log(`${b} : ${movie[b]}`);
            }
        }
    }
}
console.log("--------------------------------------------------");