// ДЗ №10

// ДЗ  #array

// Завдання 1

// Дано масив міст, використовуючи метод map(), поверніть/створіть масив,
// який включатиме всі міста, у яких лише перша літера кожної назви міста написана з великої літери.

const cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris",
];

const citiesCapitalized = cities.map((city) => {
  return city.replace(city[0], city[0].toUpperCase());
});

// console.log(citiesCapitalized);

/* Expected Ouput: 
[
  "Miami",
  "Barcelona",
  "Madrid",
  "Amsterdam",
  "Berlin",
  "Sao paulo",
  "Lisbon",
  "Mexico city",
  "Paris"
 ];
*/

// Завдання 2

// Використовуючи цикл forEach(), console.log записує назви всіх елементів
//  у масиві citiesCapitalized, включаючи число, яке представляє позицію елемента,
//  починаючи з 1 для першого (індексного) елемента.

// Task 2

/* Expected Ouput: 
[
  "1. Miami",
  "2. Barcelona",
  "3. Madrid",
  "4. Amsterdam",
  "5. Berlin",
  "6. Sao paulo",
  "7. Lisbon",
  "8. Mexico city",
  "9. Paris"
 ];
 */

citiesCapitalized.forEach((value, index, array) => {
  // console.log(`${index + 1}. ${value}`);
});
