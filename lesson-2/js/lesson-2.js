console.log('Lesson-2 JS');
// Створити змінні для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.
let Celc = prompt("Введіть значення у Цельсій");
if (Celc === null ){
    alert("Ви натиснули відміна")
}
else if (Celc.length === 0){
    alert("Ви нічого не ввели")
}
else {
    Celc = Number(Celc);
    if (isNaN(Celc)){
        alert("Неправильне значення")
    }
    else{
        const Farag = (Celc * (9 / 5) + 32).toFixed(2);
        console.log(Farag);
        alert("Ваше значення у Фаренгейтах = " + Farag);
    }
}
// Створити змінну для зберігання кількості днів у місяці. Обчислити кількість годин та хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.
const NumberDays = (Number(prompt("Введіть кількість днів у місяці")));
if (isNaN(NumberDays) || NumberDays > 31 || NumberDays < 28 ){
    alert("Неправильне значення або ви натиснули відміна . Введіть число від 28 до 31.")
}
else {
    const NumberOfHours = NumberDays * 24;
    const NumberOfMinutes = NumberOfHours * 60;
    alert (`У місяці із ${NumberDays} днів буде ${NumberOfHours} годин та ${NumberOfMinutes} хвилин`);
    console.log(`У місяці із ${NumberDays} днів буде ${NumberOfHours} годин та ${NumberOfMinutes} хвилин`);
}
// Створити змінні для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.
let Health = (Number(prompt("Введіть своє здоров'є")));
let Energy = (Number(prompt("Введіть свою енергію")));
const RandomMinus= Math.floor(Math.random() * 100) + 1;
Health = Health - RandomMinus;
if (Health < 0){
    alert ("Ви вмерли")
}
else{
    alert (`Після удару у вас залишилося ${Health} здоров'я`)
    console.log(`Після удару у вас залишилося ${Health} здоров'я`)
}
Energy = Energy - RandomMinus;
if (Energy < 0){
    alert ("Ви втомились і впали")
}
else{
    alert (`Після бігу у вас залишилося ${Energy} енергії`)
    console.log(`Після бігу у вас залишилося ${Energy} енергії`)
}
// Створити змінну для зберігання суми покупки в магазині. Застосувати знижку в розмірі 10% до цієї суми за допомогою оператора множення та вивести результат в консоль.
const Sum = (Number(prompt("Введіть ціну товару")));
const Discount = 0.10;
let NewSum = Sum - (Sum * Discount);
NewSum = NewSum.toFixed(0);
alert(`Після знижки в розмірі 10% , сума товару , яка була ${Sum}грн стала ${NewSum}грн`);
console.log(`Після знижки в розмірі 10% , сума товару , яка була ${Sum}грн стала ${NewSum}грн`);
// Створити змінну для зберігання числа з плаваючою комою. Використати метод Math.floor() для округлення числа до меншого та вивести результат в консоль.
const FloatNum = (Number(prompt("Введіть число з плаваючою комою")));
if (!isNaN(FloatNum)){
    const RoundedNum = Math.floor(FloatNum);
    console.log(RoundedNum);
    alert(RoundedNum);
}
else {
    alert("Відміна")
}




