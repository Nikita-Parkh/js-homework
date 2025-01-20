// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
let arrayFirst = [1 , 2 , 3];
arrayFirst[1] = 10;
console.log(arrayFirst);

// Створити масив із трьох рядків. Додати до масиву ще одну рядків.
let arraySecond = ["перший" , "другий" , "третій"];
arraySecond[3] = "четвертий";
console.log(arraySecond);

// Створити скрипт який поверне суму всіх чисел в масиві.
let sum = 0 ;
for (let i = 0; i < arrayFirst.length; i++) {
   sum = sum + arrayFirst[i];
}
console.log(sum);

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
const arrayThird = [1 , 2 , 3 , 4 , 5];
for (let a = 0 ; a < arrayThird.length ; a++){
    console.log(arrayThird[a]);
}

// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
const arrayFourth = ["один" , "два" , "три" , "чотири" , "п'ять"];
for (let o = 0 ; o < arrayFourth.length ; o++){
    if (arrayFourth[o].length >= 5){
        console.log(arrayFourth[o]);
    }
}

// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const arrayFifth = [9 , 3 , 5 , 18 , 11 , 190 , 0 , 65 , 1 , 102];
let max = 0;
for (let p = 0 ; p < arrayFifth.length ; p ++){
    if (max < arrayFifth[p]){
        max = arrayFifth[p]
    }
}
console.log(max);

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
let arraySixth = [13 , 12 , 10 , 55 , 50 , 78 , 2 , 4 , 5 , 9];
let doubleArr = [];
for (let few = 0 ; few < arraySixth.length ; few++){
    if (arraySixth[few] % 2 === 0){
        doubleArr.push(arraySixth[few])
    }
}
doubleArr = doubleArr.join(" , ")
console.log(`Парні числа : ${doubleArr}`);
