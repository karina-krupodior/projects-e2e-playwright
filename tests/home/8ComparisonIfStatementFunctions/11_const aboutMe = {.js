const aboutMe = {
    firstName: 'Karina',
    lastName:'Krupodor', // key value
    age: 25,
    fullName: function ()  { return  `${this.firstName}  ${this.lastName}`  }
}
// add to array
aboutMe['motoInLife'] = 'I can do everything'
aboutMe['sex'] = 'girl'
console.log(aboutMe)
console.log(aboutMe.fullName())
// для перебору ключів в обьекті використовується цикл for in 
for(const key in aboutMe) {
    console.log(key)
    console.log(aboutMe[key])
}

// масив це формат данних який дає зберігати дані в форматі індекс дані  індекс дані   індекс дані   індекс дані 
// у кожного значення є свій індекс індекси починаються від 0 
// lenght - повертає довжину масиву 
// шоб ініілізувати ерей 
const someArray = [10,12,13,15,20]
new Array(1,'2,3')
console.log(new Array(1,'2',3)) // index value 
console.log(someArray[3])

for(items of someArray ) {
    console.log(items)
}
// перевіряємо чи існує свойство в обьекте 
console.log('age' in aboutMe)

// коли обьекті створюються на основі других обьектів називаються прототипування 



// ДЗ №11

// ДЗ  #object

// 1. Напишіть код, виконавши завдання з кожного пункту окремим рядком:

// Створіть порожній об’єкт user.
// Додайте властивість name зі значенням senpai.
// Додайте властивість surname зі значенням qa.
// Змініть значення name на ваше імʼя.
// Видаліть властивість name з об’єкта.
// Створіть порожній об’єкт user.

const emptyUser = {

}
console.log(emptyUser)
// Додайте властивість name зі значенням senpai.

emptyUser['name'] = 'senpai'
console.log(emptyUser)
// Додайте властивість surname зі значенням qa.
emptyUser['surname'] = 'qa'
console.log(emptyUser)
// Змініть значення name на ваше імʼя.
emptyUser.name = 'Karina'
console.log(emptyUser)

// Видаліть властивість name з об’єкта.

delete emptyUser.name
console.log(emptyUser)


// 2. Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false.
// Має так працювати:


// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "Вставай";

// alert( isEmpty(schedule) ); // false


function isEmpty (obj) {
    if(Object.keys(obj).length === 0) {
        return true
    }
   return false
}

let schedule = {name:'kar'};
console.log(isEmpty(schedule))

// 3. Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.

// Наприклад:

// до виклику функції
// let menu = {
//     width: 200,
//     height: 300,
//     title: "Моє меню"
//   };
  
  // multiplyNumeric(menu);
  
  // після виклику функції
//   menu = {
//     width: 400,
//     height: 600,
//     title: "Моє меню"
//   };
  // Зверніть увагу, що multiplyNumeric не потрібно нічого повертати. Слід безпосередньо змінювати об’єкт.
  
  // P.S. Використовуйте typeof для перевірки, що значення властивості числове.
  let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
  };
  function multiplyNumeric(obj) {
    console.log('obj inside',obj)

        for(key in obj) {
            if(typeof obj[key] === 'number') { 
                obj[key] = obj[key] * 2
                 }
        }
    }

console.log(multiplyNumeric(menu))
  console.log('menu',menu)


  