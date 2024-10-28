const someArray = [1,5,'strsome',null,undefined,{},[]]

// index
console.log(someArray.indexOf(null))
// length 
console.log(someArray.length)

// 
console.log(new Array)
console.log(new Array(8))
console.log(new Array(1,2,3,'kir',{},144,[]))

const dataOfBirth = [1999,9,14]
const fruits= ['apple','orange','banana']
// join arrays 
const fullFruits = dataOfBirth.concat(fruits,someArray)
console.log(fullFruits)

for(const fruit of fruits) {
    console.log(fruit + 10)
    // всередині масив змінився 
//     адже в середині ітерації я виконую дії не над самим елементом 
// а над змвнною const fruit  яка була створенна з цього елементу 
// тому майте на увазі шо ви виконуете дії не в середині масиву а над зміною яка була створенна 
// і ця змінна існує лише всередині цього массиву 
}

console.log(fruits) // не змінився массив фрутс 
// якщо вам потрібно повторити якусь дію кілька разів 
// можно строворити клік 10 разів по кофе експресо 

for(let coffee of new Array(10)) {
    console.log(coffee)
}
console.log(fruits[2]) 

let numbers = [1,2,345,676,9876,123,766,864,24,756,435,888]
// звертаємося до останняго елементу знаходимо останий елемент массива 
console.log(numbers[numbers.length -1])


function greeting (name) {
    console.log(`Hello ${name}`)
return `Hello ${name}`
}

console.log(greeting("Karina"))
// callback - це аргумент який каже шо в середині цієї функції буде передаватися інша функція 
function userInput(callback) {
    // const name = prompt("Please enter your name")
    // ми можемо викикати цей колбек як функцію 
    callback()


}

userInput(greeting)
// коли я викликав userInput пердав туда greeting 
// Воно викликало функцію яку я передав всередині з тими даними які я вказав 
// callback це функція яка передаеться в іншу функцію в якості аргумента 
// in node js we dont have a prompt 


// forEach ()

// виконує дії над кожним елементом массива на якому він викликаеться 
// forEach () це нативний метод масиву якщо цикл forE можно окремо викликати то forEach  можно викликати в середині масиву 

// за допомогою forEach можно робити дії над кожним елементом массива 
// він приймає колбек функцію яка в якості параметрів (елемент над яким буде виконуватися дія індекс цього елементу і сам ерей )
// функція може бити оьична або стрілочна анонімна не мати свого 

// arrayOfNumbers.forEach((value,index) => {
//     // console.log('value:',value)
//     // console.log('index:', index)
//     let result = value * 10
//     console.log('result:',result)
//     arrayOfNumbers[index] = value * 10
//     console.log('value:',value)

// });
// це теж саме шо і через forEach 
// forEach нічого не повертає він виконує дії над кожним елементом в середині масиву але не повертає сам масив 

for (const[index,value] of numbers.entries()){
    // console.log('value:',value)
    // console.log('index:', index)
}
//  не дуже добре працює з асинхроншинами for of добре працює 
// find
// допомагає знайти перший елемент який підпадає під умови пошуку 
// обовязкого в цьому виразі повинні бути оператори порівняння < >
const arrayOfNumbersforFind = [1,3,6,7,4,4343,5464,21,43,4,1,333,]
const find_result  = arrayOfNumbersforFind.find((item,index) => item > 5)
console.log(find_result)

const students = [{
    name:'Alex',age:29
},
{name:'Oleg',age:20},
{name:'Igor',age:55}]

let student = students.find((student)=>student.age < 30 )
console.log(student)
// вираз повинен повертати true or false 
// find є важливим якщо ви проходите тестове завдання 
// push add elemet to the end of array 
const cars = ['BMW',"Mazda"]
cars.push("Honda")
console.log(cars)
// pop 
// delete element from the end of array 
console.log(cars.pop())
console.log('cars:',cars)
// тест має короткий цикл життя і дуже рідко буває шо вам потрібно змінювати якось массив видалятти з нього 

// includes 
// схожий с методом find але працює набагато простіше 
// .. чи присутній в нашому array якийсь елемент 
// якщо елемент присутній в масиві повертпє тру як шо не має елемента в масиві поверає false 
console.log(cars.includes('BMW',0 ))
// також можно вказати індекс з якого можно шукати 
// почне шукати з першого індексу 
// includes регулярно використовується шоб дізнатися є якийсь елемент в массиві 
// на віебі якись стрінгу достаємо і перевіряємо чи є в середині цієї стрінги якийсь елемент
// includes також працюю з стрінгой 

let str = 'Test some 1'
console.log(str.includes('Test'))
// includes повертає  true or false 

// map повертає новий массив 

let numbersForMap = [123,567,34,98,34,66,12,77,10,56]

let newNumbersForMap = numbersForMap.map((number)=> { 
    return number + 1
})

console.log(newNumbersForMap)
//  + map можно заюзать шоб склонувати array 
