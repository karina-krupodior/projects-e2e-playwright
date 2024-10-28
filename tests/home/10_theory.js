

// - Виведіть в консоль числа від 1 до 345 (while)

let numbers = 0
while(numbers <= 345) {
    numbers++
    console.log(numbers)
}
// - Знайти суму чисел від 1 до 100 (тобто  1 + 2 + 3 + 4 + 5 + 6....)
let sum = 0
for(let i = 1; i <= 100; i++) {
    sum = sum + i
    console.log(i)
    console.log(sum)

}

// - Виведіть в консоль числа від 241  до 1 (do while)
let num = 241
do{
   
    console.log(num)
    num--
} while(num >= 1)

    // - Напишіть програму  яка відображає найбільше ціле число з двох цілих чисел. (if.. + покрийте тестами)

    function biggerNumber(num1,num2){
        if(num1 > num2) {
            console.log(`first number ${num1} is bigger `)
            return num1
        }else if( num2 > num1) {
            console.log(`second number ${num2} is bigger`)
            return num2
        }else if (num1 === num2) {
            console.log(`Numbers ${num1} and ${num2} equal`)
            return null
        }
    }

console.log(biggerNumber(5,10))

const arrayOfNumbers = [1,3,6,7,4,4343,5464,21,43,4,1,333,]
arrayOfNumbers.forEach(element => {
    console.log(arrayOfNumbers)
    console.log(element)
});