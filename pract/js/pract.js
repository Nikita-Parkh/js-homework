//! ПРАКТИКА-7 (Урок-07_JS)
//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
  );
  //? 1-1.Створити змінну <array> значення якої
  //? є масив із п'яти елементів,
  //? де упереміш присутні числа та рядки.
  //? Вивести в консоль значення змінної <array>.
  //? Вивести в консоль значення кожного єлемента змінної(масиву) <array>.
  console.log(
    "%c [1-1] ",
    "color: #2274A5; background-color: yellow",
  );
  //! Код виконаного завдання


  const array = ["Nikita" , 3 , "Valera" , 5 , "Vladik"];
  console.log("Наш масив: ", array);
  console.log(array[0]);
  console.log(array[1]);
  console.log(array[2]);
  console.log(array[3]);
  console.log(array[4]);

  console.log("-------------------------------------------");
  
  //? 1-2.Додати до 2-го(другого) та 3-го(третього)
  //? елемента 1 і вивести їх значення в консоль.
  //? Вивести в консоль значення змінної(масиву) <array>.
  console.log(
    "%c [1-2] ",
    "color: #2274A5; background-color: yellow",
  );
  //! Код виконаного завдання

  array[1] = array[1] + 1;
  array[2] = array[2] + 1;
  console.log(array[1]);
  console.log(array[2]);


  console.log("-------------------------------------------");
  
  //? 1-3.Виміряти довжину масиву [array]
  //? та вивести це значення в консоль.
  console.log(
    "%c [1-3] ",
    "color: #2274A5; background-color: yellow",
  );
  //! Код виконаного завдання


  const arrayLenght = array.length;
  console.log("Довжина нашого массива = " , arrayLenght); 


  console.log("-------------------------------------------");
  
  //? 1-4.Отримати индекс та значення
  //? останнього елемента масиву <array>.
  //? Вивести ці значення в консоль.
  console.log(
    "%c [1-4] ",
    "color: #2274A5; background-color: yellow",
  );
  //! Код виконаного завдання


  const LastElement = arrayLenght - 1;
  console.log(array[LastElement]);

  console.log("-------------------------------------------");
  
  //? 2-1.Вивести в консоль значення кожного
  //? елемента масиву [array] за допомогою цикла for.
  console.log(
    "%c [2-1] ",
    "color: #2274A5; background-color: yellow",
  );
  //! Код виконаного завдання


  for (let i = 0 ; arrayLenght > i ; i++){
    console.log(`Єлемент номер ${i + 1} = ` , array[i])
  }

  console.log("-------------------------------------------");
  
  //? 2-2.Додати до 2-го(другого) та 3-го(третього)
  //? елемента 1 за допомогою цикла for
  //? і вивести їх значення в консоль.
  //? Вивести в консоль значення масиву [array].
  console.log(
    "%c [2-2] ",
    "color: #2274A5; background-color: yellow",
  );
  //! Код виконаного завдання




  for (let i = 0 ; arrayLenght > 1 ; i++ ){

    if(array[i] = 1){
        console.log(`Другий єлемент = ${i}`);
        continue
    }
    else if (array[i] = 2){
        console.log(`Ваш третій єлемент = ${i}`);
        break
    }
  }




  console.log("-------------------------------------------");
  
  //? 2-3.Вивести в консоль значення кожного
  //? елемента масиву [array] за допомогою цикла for...of.
  console.log(
    "%c [2-3] ",
    "color: #2274A5; background-color: yellow",
  );
  //! Код виконаного завдання
  console.log("-------------------------------------------");
  
  //? 2-4.Знайти ПЕРШЕ ЧИСЛОВЕ значення
  //? елемента масиву [array] за допомогою цикла for...of
  //? та використовуючи оператор break.
  //? Вивести це значення в консоль.
  console.log(
    "%c [2-4] ",
    "color: #2274A5; background-color: yellow",
  );
  //! Код виконаного завдання
  console.log("-------------------------------------------");
  
  //? 2-5.Знайти ПЕРШЕ РЯДКОВЕ значення
  //? елемента масиву [array] за допомогою цикла for...of
  //? та використовуючи оператор break.
  //? Вивести це значення в консоль.
  console.log(
    "%c [2-5] ",
    "color: #2274A5; background-color: yellow",
  );
  //! Код виконаного завдання
  console.log("-------------------------------------------");
  
  //? 2-6.Знайти ВСІ ЧИСЛОВІ значення
  //? елементів масиву [array] за допомогою цикла for...of
  //? та використовуючи оператор continue.
  //? Вивести ці значення в консоль.
  console.log(
    "%c [2-6] ",
    "color: #2274A5; background-color: yellow",
  );
  //! Код виконаного завдання
  console.log("-------------------------------------------");
  
  //? 2-7.Знайти ВСІ РЯДКОВІ значення
  //? елементів масиву [array] за допомогою цикла for...of
  //? та використовуючи оператор continue.
  //? Вивести ці значення в консоль.
  console.log(
    "%c [2-7] ",
    "color: #2274A5; background-color: yellow",
  );
  //! Код виконаного завдання
  console.log("-------------------------------------------");
  
  //? 2-8.Знайти ВСІ тільки ЧИСЛОВІ значення
  //? елемента масиву [array] за допомогою цикла for...of,
  //? змінити їх ти на рядковий та додати 1.
  //? Вивести ВСІ значення масиву [array] в консоль,
  //? використовуючи оператор continue.
  //? Вивести в консоль значення масиву [array].
  console.log(
    "%c [2-8] ",
    "color: #2274A5; background-color: yellow",
  );
  //! Код виконаного завдання
  console.log("-------------------------------------------");
  