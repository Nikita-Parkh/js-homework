//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби деструктуризацію об’єкта
//? та виведи в консоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const userA = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};
//! Код виконаного завдання
const {name , age , hobby , premium} = userA;
console.log(name);   
console.log(age);    
console.log(hobby);  
console.log(premium);

console.log("--------------------------------------------------");

//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби деструктуризацію об’єкта
//? та виведи в консоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const userB = { name: 'Mango', age: 2 };
//! Код виконаного завдання
const {name: newName, age: newAge} = userB;
console.log(newName);
console.log(newAge);

console.log("--------------------------------------------------");

//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи в консоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const employeePerformance = {
    count: 11,
    employeePerformanceLists: [
        {
            ann: 29,
            david: 35,
            helen: 1,
            lorence: 99,
        },
        {
            poly: 12,
            mango: 17,
            ajax: 4,
        },
        {
            lux: 147,
            david: 21,
            kiwi: 19,
            chelsy: 38,
        }
    ],
};
//! Код виконаного завдання

const {count , employeePerformanceLists} = employeePerformance
console.log(count);
employeePerformanceLists.forEach(list => {
    for (const key in list) {
        const value = list[key];
        console.log(`${key}: ${value}`);
    }
});
console.log("--------------------------------------------------");


//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи в консоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const employeeSalaries = {
    count: 6,
    employeeSalaryLists: [
        {
            mango: 100,
            poly: 150,
            alfred: 80,
        },
        {
            kiwi: 200,
            lux: 50,
            chelsy: 150,
        }
    ],
};
//! Код виконаного завдання
const {count: NewCount , employeeSalaryLists} = employeeSalaries;
console.log(NewCount);
employeePerformanceLists.forEach(list =>{
    for (const key in list) {
        console.log(`${key} : ${list[key]}`);
    }
})
console.log("--------------------------------------------------");

//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const products = [
    {
        name: 'Радар',
        price: 1300,
        quantity: 4
    },
    {
        name: 'Сканер',
        price: 2700,
        quantity: 3
    },
    {
        name: 'Дроїд',
        price: 400,
        quantity: 7
    },
    {
        name: 'Захоплення',
        price: 1200,
        quantity: 2
    },
];
//! Код виконаного завдання

products.forEach(list =>{
    const {name , price , quantity} = list;
    console.log(`${name} , ${price} , ${quantity}`);
})

console.log("--------------------------------------------------");


//todo [6]
console.log(
    "%c [6] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ Напиши сценарій керування особистим кабінетом інтернет-банку.
//? Є об'єкт account в якому необхідно реалізувати методи 
//? для роботи з балансом та історією транзакцій.
//? ✳️ Типів транзацкій всього два.
//? Можна покласти або зняти гроші з рахунку.
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

//todo: Кожна транзакція - це об'єкт з властивостями: id, type і amount

const account = {
    balance: 0,
    transactions: [],
    createTransaction(amount, type) { 
        const id = Math.floor(Math.random() * 1000000000);
        return {
            id ,
            amount ,
            type 
        }
    },
    deposit(amount) { 
        const ToTransactionDep = this.createTransaction(amount , Transaction.DEPOSIT);
        this.transactions.push(ToTransactionDep);
        return this.balance += amount;
    },

    withdraw(amount) {
        const ToTransactionWith = this.createTransaction(amount , Transaction.WITHDRAW);
        this.transactions.push(ToTransactionWith);
        if (amount > this.balance){
            alert("Недостатньо коштів");
            console.log("Недостатньо коштів");
            return
        }
        return this.balance -= amount;
     },
    getBalance() { 
        console.log(`Ваш поточний баланс : ${this.balance}`);
        return this.balance;
    },

    getTransactionDetails(id) { 
        let idResult = undefined;
        this.transactions.forEach(list => {
            if (id === list.id){
                idResult = list;
            }
        })
        return idResult;
    },

    getTransactionTotal(type) {
        let total = 0;
        this.transactions.forEach(transaction =>{
            if (transaction.type === type){
                total += transaction.amount;
            }
        })
        return total;
     },
};
account.deposit(10000);
account.deposit(15000);
account.withdraw(1000);
account.withdraw(5000);
console.log(account.getBalance());
console.log(account.transactions);
console.log("--------------------------------------------------");