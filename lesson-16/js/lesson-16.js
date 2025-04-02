//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши клас Account з властивостями login і email.
//? Додай метод getInfo(), 
//? який виводить в консоль значення полів 
//? login і email об'єкта який його викликав.
//! Код виконаного завдання ⤵️
class Account {
    constructor({login , email}){
        this.login = login
        this.email = email
    }
    getInfo (){
         console.log(`Login : ${this.login} , Email: ${this.email}`);
    }
}
//! Код виконаного завдання ⤴️

console.log(Account.prototype.getInfo); //! function

const mango1 = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});

mango1.getInfo(); //! Login: Mangozedog, Email: mango@dog.woof

const poly1 = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
});

poly1.getInfo(); //! Login: Poly, Email: poly@mail.com
console.log("--------------------------------------------------");


//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши клас User для створення користувача 
//? з наступними властивостями:
//? 🔸 name - рядок
//? 🔸 age - число
//? 🔸 followers - число
//? Додай метод getInfo(), який, виводить рядок: 
//? User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers
//! Код виконаного завдання ⤵️
class User {
    constructor ({name , age , followers}){
        this.name = name
        this.age = age
        this.followers = followers
    }
    getInFo(){
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers.`)
    }
}
//! Код виконаного завдання ⤴️

const mango2 = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
});

console.log(mango2.getInFo()); //! User Mango is 2 years old and has 20 followers

const poly2 = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
});

console.log(poly2.getInFo()); //! User Poly is 3 years old and has 17 followers
console.log("--------------------------------------------------");


//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши клас Storage, 
//? який буде створювати об'єкти для управління складом товарів. 
//? При виклику буде отримувати один аргумент 
//? - початковий масив товарів, і записувати його у властивість items. 
//? Додай методи класу:
//? 🔸 getItems() - повертає масив поточних товарів
//? 🔸 addItem(item) - отримує новий товар і додає його до поточних
//? 🔸 removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
//! Код виконаного завдання ⤵️
class Storage {
    constructor (items) {
        this.items = items.map(item => item);
    }
    getItems(){
        console.log(this.items)
    }
    addItem(item){
        this.items.push(item)
        console.log(this.items)
    }
    removeItem(item){
        const finderItem = this.items.indexOf(item);
        this.items.splice(finderItem , 1)
        console.log(this.items)
    }
}
//! Код виконаного завдання ⤴️

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); //! [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); //! [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); //! [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
console.log("--------------------------------------------------");


//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши клас StringBuilder. 
//? На вхід він отримує один параметр 
//? - рядок, який записує у властивість _value. 
//? Додай класу наступний функціонал:
//? 🔸 Геттер value - повертає поточне значення поля _value
//? 🔸 Метод append(str) - отримує параметр str (рядок) і додає його в кінець _value
//? 🔸 Метод prepend(str) - отримує параметр str (рядок) і додає його на початок _value
//? 🔸 Метод pad(str) - отримує параметр str (рядок) і додає його на початок і в кінець _value
//! Код виконаного завдання ⤵️
class StringBuilder {
    constructor (value) {
        this._value = value
    }
    append(str){
        this._value += str
    }
    prepend(str) {
        let arrNew = this._value.split(''); 
        arrNew.splice(0, 0, str); 
        this._value = arrNew.join(''); 
       }
    pad(str){
        let arrNew = this._value.split('');
        arrNew.splice(0, 0, str)
        arrNew.push(str); 
        this._value = arrNew.join('');
    }
    get value(){
        return this._value
    }
}
//! Код виконаного завдання ⤴️

const builder = new StringBuilder('.');
console.log(builder.value); //! '.'

builder.append('^');
console.log(builder.value); //! '.^'

builder.prepend('^');
console.log(builder.value); //! '^.^'

builder.pad('=');
console.log(builder.value); //! '=^.^='
console.log("--------------------------------------------------");


//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши клас Car із зазначеними властивостями і методами.
class Car {
    /*
     * Додай статичний метод `getSpecs(car)`,
     * який приймає об'єкт-машину як параметр і виводить
     * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
     */
    //! твій код
    static getSpecs (car){
        console.log(`max-speed : ${car.maxSpeed} , speed : ${car.speed} , isOn : ${car.isOn} , distance : ${car.distance} , price : ${car.price}.`)
    }
    /*
     * Конструктор отримує об'єкт налаштувань.
     *
     * Додай властивості майбутнього екземпляра класу:
     *  speed - поточна швидкість, початкова 0
     *  price - ціна автомобіля
     *  maxSpeed - максимальна швидкість
     *  isOn - заведений автомобіль, значення true або false. Спочатку false
     *  distance - загальний кілометраж, спочатку 0
     */
    //! твій код
    constructor ({speed = 0 , price = 0 , maxSpeed = 0 , isOn = false , distance = 0}) {
        this.speed = speed
        this.price = price
        this.maxSpeed = maxSpeed
        this.isOn = isOn
        this.distance = distance
    }
    /*
     * Записує у властивість isOn значення true
     */
    turnOn() {
        this.isOn = true
    };
    /*
     * Додай код для того, щоб заглушити автомобіль
     * Записує у властивість isOn значення false,
     * і скидає поточну швидкість в 0
     */
    turnOff() {
        this.isOn = false
        this.speed = 0
    };
    /*
     * Додає до властивості speed отримане значення,
     * за умови, що результуюча швидкість
     * не більше, ніж значення властивості maxSpeed
     */
    accelerate(value) {
        while (this.speed + value > this.maxSpeed){
            alert("Не матиме допускати більшу швидкість за" + this.maxSpeed)
            console.log("Не матиме допускати більшу швидкість за" + this.maxSpeed)
            break
        }
        this.speed += value
        return this.speed
    };
    /*
     * Забирає від властивості speed отримане значення,
     * за умови, що результуюча швидкість не менше нуля
     */
    decelerate(value) {
        while (this.speed - value < 0){
            alert("Не матиме допускати меншу швидкість за 0" )
            console.log("Не матиме допускати меншу швидкість за 0")
            break
        }
        this.speed -= value
        return this.speed
    };
    /*
     * Додає в поле distance кілометраж (hours * speed),
     * але тільки в тому випадку, якщо машина заведена!
     */
    drive(hours) {
        if (this.isOn === false){
            alert("Машина має бути заведена")
            console.log("Машина має бути заведена")
        }
        this.distance = hours * this.speed
        return this.distance
    };
};

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang); //! maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang); //! maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); //! 2000
mustang.price = 4000;
console.log(mustang.price); //! 4000
console.log("--------------------------------------------------");
