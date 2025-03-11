//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши скрипт, який, для об'єкта user, послідовно:
//? - додає поле mood зі значенням 'happy'
//? - замінює значення hobby на 'skydiving'
//? - замінює значення premium на false
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};
//! Код виконаного завдання
user.mood = "happy";
for (const key in user){
    if (key === "hobby"){
        user.hobby = "skydiving";
    }
    if (key === "premium"){
        user.premium = false;
    }
}
console.log(user);
console.log("--------------------------------------------------");


//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши функцію countProps(obj),
//? яка рахує кількість властивостей в об'єкті.
//? Функція повертає число — кількість властивостей.
//! Код виконаного завдання
const newObject = {
    name:"Nikita",
    hobby:"html",
    age:123,
    city:"Kyiv"
}
const countProps = function (obj) {
   let numOfkeys = Object.keys(obj).length;
   return numOfkeys;
};
console.log(`Кількість властивостей в об'єкті:`);
console.table(newObject);
console.log(`Складає: ${countProps(newObject)} штуки`);
console.log("--------------------------------------------------");


//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши функцію findBestEmployee(employees), 
//? яка приймає об'єкт співробітників 
//? і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). 
//? Співробітники і кількість виконаних завдань містяться 
//? як властивості об'єкта в форматі "ім'я":"кількість задач".
//! Код виконаного завдання
const findBestEmployee = function (employees) {
    let theBestResult = 0;
    let theNameOfTheBestResult = "";
    for (const key in employees) {
        if (employees[key] > theBestResult){
            theBestResult = employees[key];
            theNameOfTheBestResult = key;
        }
    }
    return console.log(`Найкращий співробітник - ${theNameOfTheBestResult} із результатом ${theBestResult}`);
};

//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); //! lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); //! mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); //! lux
console.log("--------------------------------------------------");


//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. 
//? Функція рахує загальну суму зарплати працівників і повертає її. 
//? Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
//! Код виконаного завдання
const countTotalSalary = function (employees) {
    let totalSalary = 0;
    let nameOf = [];
    for (const key in employees) {
       totalSalary += employees[key];
       nameOf.push(key);
    }
    return(`загальна зарплата працівників : ${nameOf.join(" , ")} = ${totalSalary}`);
};

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
); 

console.log(
    countTotalSalary({
        kiwi: 200,
        lux: 50,
        chelsy: 150,
    }),
); 
console.log("--------------------------------------------------");


//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши функцію getAllPropValues(arr, prop), 
//? яка отримує масив об'єктів і ім'я властивості. 
//? Повертає масив значень певної властивості prop 
//? з кожного об'єкта в масиві.
//! Код виконаного завдання
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
    let valuesArray = [];
    let propertyExists = false; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].hasOwnProperty(prop)) {
            valuesArray.push(arr[i][prop]); 
            propertyExists = true;  
        }
    }

    if (!propertyExists) {
        alert("Немає такої властивості");
        console.log("Немає такої властивості");
    }

    return valuesArray.join(" , "); 
};


//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(getAllPropValues(products, 'name')); //! ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
console.log(getAllPropValues(products, 'quantity')); //! [4, 3, 7, 2]
console.log(getAllPropValues(products, 'category')); //! []
console.log("--------------------------------------------------");


//todo [6]
console.log(
    "%c [6] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши функцію calculateTotalPrice(allProdcuts, productName), 
//? яка отримує масив об'єктів та ім'я продукту (значення властивості name). 
//? Повертає загальну вартість продукту (ціна * кількість).
//? Викличи функції для перевірки працездатності твоєї реалізації.
//! Код виконаного завдання
const calculateTotalPrice = function (allProducts, productName) {
    for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i].name === productName) {
            return allProducts[i].price * allProducts[i].quantity;
        }
    }
};

//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(calculateTotalPrice(products, 'Радар')); //! 5200
console.log(calculateTotalPrice(products, 'Дроїд')); //! 2800
console.log("--------------------------------------------------");
