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

const {count , employeePerformanceLists: [{ann , david: davidFirst , helen , lorence } , {poly , mango , ajax}, {lux , david: davidSecond , kiwi , chelsy}]} = employeePerformance
console.log(count);      
console.log(ann);        
console.log(davidFirst); 
console.log(helen);      
console.log(lorence);    
console.log(poly);       
console.log(mango);      
console.log(ajax);       
console.log(lux);        
console.log(davidSecond);
console.log(kiwi);       
console.log(chelsy);     

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
const {count: NewCount , employeeSalaryLists: [{mango:salarMango , poly:salarPoly , alfred} , {kiwi:salarKiwi , lux:salarLux , chelsy:salarChelsy}]} = employeeSalaries;
console.log(NewCount);   
console.log(salarMango); 
console.log(salarPoly);  
console.log(alfred);     
console.log(salarKiwi);  
console.log(salarLux);   
console.log(salarChelsy);
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
const [{name:firstName , price , quantity} , {name:secondName , price:secondPrice , quantity:secondQuantity} , {name:thirdName , price:thirdPrice , quantity:thirdQuantity} , {name:fourthName , price:fourthPrice , quantity:fourthQuantity}] = products;
console.log(firstName, price, quantity); 
console.log(secondName, secondPrice, secondQuantity); 
console.log(thirdName, thirdPrice, thirdQuantity); 
console.log(fourthName, fourthPrice, fourthQuantity); 
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
        const id = account.transactions.length + 1;
        return {
            id ,
            amount ,
            type 
        }
    },
    deposit(amount) { 
        const ToTransactionDep = this.createTransaction(amount , Transaction.DEPOSIT);
        this.transactions.push(ToTransactionDep);
        this.balance += amount;
        return this.getBalance();
    },

    withdraw(amount) {
        if (amount > this.balance){
            alert("Недостатньо коштів");
            console.log("Недостатньо коштів");
            return
        }
        const ToTransactionWith = this.createTransaction(amount , Transaction.WITHDRAW);
        this.transactions.push(ToTransactionWith);
        this.balance -= amount;
        return this.getBalance();
     },
    getBalance() { 
        console.log(`Ваш поточний баланс : ${this.balance}`);
        return this.balance;
    },

    getTransactionDetails(id) { 
        for (const list of this.transactions) {
            if (id === list.id) {
                return list;
            }
        }
        return null;  
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
console.log(account.transactions);
console.log("--------------------------------------------------");