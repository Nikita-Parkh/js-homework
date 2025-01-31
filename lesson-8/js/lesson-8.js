//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
 );
 //? Перетворюємо масив на рядок:
 //? Напиши скрипт, який об'єднує всі елементи массиву [friends] в один рядок.
 //? Або створи свій масив де елементів може бути довільна кількість. 
 //? Нехай елементи массива в створеному рядку будут розділені комою.
 //? Зроби два варіанта створеня такого рядку:
 //?  - Спочатку за допомогою циклу for (var.1)
 //?  - Потім за допомогою метода join() (var.2)
 const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
 let string = '';
 let stringItem = ' , '
 console.log("string:", string);
 console.log("friends:", friends);
 console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");
 
 //todo: var.1 - через for
 console.warn("var.1 - через for");
 for (let i = 0 ; i < friends.length ; i++){
    string = friends[i] + stringItem + string;
 }
 string = string.slice(0 , -3);
 //! Код виконаного завдання
 console.log(string);
 console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");
 
 //todo: var.2 - через join()
 console.warn("var.2 - через join()");
 string = friends.join(" , ")
 //! Код виконаного завдання
 console.log(string)
 console.log("--------------------------------------------------");
 
 
 
 //todo [2]
 console.log(
     "%c [2] ",
     "color: yellow; background-color: #2274A5",
  );
 //? Створюємо колекцією карток:
 //? Використовуючи будь який з вивчених методів масивів 
 //? створи масив [cards] такий як в цьому прикладі:
 //? Можна використовувати будь-які з вивчених методів,
 //? наприклад, рush(), splice(), concat() або інші методи.
 //! Код виконаного завдання
 const cards = ['Картка-1', 'Картка-2', 'Картка-3', 'Картка-4', 'Картка-5'];
 console.log("---------------------------------------------");

 //todo [3]
 console.log(
     "%c [3] ",
     "color: yellow; background-color: #2274A5",
 );
 //? Видаляємо картку за її їндексом:
 //? Знайди їндекс цієї картки за допомогою метода indexOf():
 let cardToRemove = 'Картка-3';
 //? та видали її з існуючого вже масив [cards] за допомогою метода масиву.
 //! Код виконаного завдання
 cards.splice(cards.indexOf(cardToRemove) , 1);
 console.log("---------------------------------------------");
 console.log(cards);
 
 
 
 //todo [4]
 console.log(
     "%c [4] ",
     "color: yellow; background-color: #2274A5",
 );
 //? Додаємо картку за її їндексом:
 //? Додай таку картку: 
 const cardToInsert = 'Картка-6';
 //? в кінець існуючого вже масиву [cards]
 //?  за допомогою будь-якого метода масиву.
 //! Код виконаного завдання
 cards.push(cardToInsert);
 console.log(cards);
 console.log("---------------------------------------------");
 
 
 //todo [5]
 console.log(
     "%c [5] ",
     "color: yellow; background-color: #2274A5",
 );
 //? Оновлення картки за її їндексом:
 //? Знайди таку картку в існуючому вже масиві [cards].
 const cardToUpdate = 'Картка-4';
 //? Потім онови її, змінивши на 'Картка-4_new'.
 //! Код виконаного завдання
 cards[cards.indexOf(cardToUpdate)] = 'Картка-4_new';
 console.log(cards);
 console.log("---------------------------------------------");
 