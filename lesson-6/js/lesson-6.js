// Вивести на екран всі числа від 1 до 10 за допомогою циклу while.
let NumTen = 0; 
while(NumTen <= 10){
    console.log(NumTen);
    NumTen++;
}

// Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число не парне, пропустити його за допомогою continue.
let arrayOfTwenty = [];
for (let i = 0 ; i <= 20 ; i++){
    if (i % 2 === 0){
        console.log(i);
        arrayOfTwenty.push(i);
    }
    else {
        continue;
    }
}
const Name = " Парні числа з двадцяти : ";
alert(Name + arrayOfTwenty.join(" , "));

// Вивести на екран таблицю множення числа 7 за допомогою циклу for.
let arraySeven = [];
for (let a = 0 ; a < 10 ; a++){
    let result = a * 7;
    arraySeven.push(result);
    console.log(`7 помножити на ${a} дорівнює ${result}`);
    alert(`7 помножити на ${a} дорівнює ${result}`);
}

// Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.
let array = [1 , 2 , 3 , 4 , 5];
let y = 0;
while (y <= (array.length) - 1 ){
    alert(array[y]);
    console.log(array[y]);
    y++;
}

// Створити масив із числами від 1 до 10. За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7. Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.
let arrayTen = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
for ( let l = 0 ; l < arrayTen.length ; l++){
    if (l === 6){
        alert("Число сім не виводиться і цикл закінчується");
        break;
    }
        alert(arrayTen[l]);
        console.log(arrayTen[l]);

}

// Створити скрипт, який виводить на екран всі числа, які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.
let n = prompt("Введіть число чи цифру : ");
if (n === null || isNaN(n) || n.trim().length === 0){
    alert("Відміна");
}
else {
    n = Number(n);
    let arraySmallerThanN = [];
    let value; 
    if (n > 9){
         value = "числа";
    }
    else if (n < 10){
         value = "цифри";
    }
    for (let b = 1 ; b < n ; b++){
        arraySmallerThanN.push(b);
    }
    alert(`Ваші значення до ${value} ${n} = ${arraySmallerThanN.join(" , ")}`);
    console.log(`Ваші значення до ${value} ${n} = ${arraySmallerThanN.join(" , ")}`);
}

// За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.
let x = 0;
while (x < 20){
    if (x % 3 === 0 ){
        x++;
        continue;
    }
    alert(x);
    console.log(x);
    x++;
}