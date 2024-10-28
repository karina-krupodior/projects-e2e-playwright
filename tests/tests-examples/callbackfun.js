// Write a simple program where a callback function
// is used to greet someone after saying
//  "Hello". The callback should say "How are you?" after the greeting.

function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

greet("Karina", function () {
  console.log("How are you?");
});

// You have two functions:
// one that checks if a number is even or odd,
//  and another function that prints a message after the check.
//   Use a callback function to print "This number is even" or "This number is odd.

function checkNumber(number, callback) {
  if (number % 2 === 0) {
    callback("This number is even");
  } else {
    callback("This number is odd");
  }
}

checkNumber(9, function (message) {
  console.log(message);
  // Add your callback code here to print the message
});

// Exercise 3:
// Imagine you are baking cookies.
// Write a function that starts baking and uses
// a callback function to print "Cookies are done!"
//  after the baking process is complete.

function bakeCookies(callback) {
  console.log("Baking cookies...");
  // After 3 seconds, call the callback function
  setTimeout(callback, 3000); // Simulating the baking time
}

bakeCookies(function () {
  // Add your callback code here to print when cookies are done
});

function bakeCookies(callback) {
  console.log("Baking cookies...");
  setTimeout(callback, 3000);
}
bakeCookies(function () {
  console.log("Cookies are done!");
});

// Create a function that greets someone with their name,
// but the greeting should appear after 2 seconds.

function delayedGreet(name, callback) {
  setTimeout(() => {
    console.log(`Hello,${name}`);
    callback();
  }, 2000);
  // Add code here to delay the greeting using setTimeout
}

delayedGreet("Karina", function () {
  // This should print "Hello, Karina!" after 2 seconds
  console.log("How are you ?");
});

// Exercise 5: Math Operations with Callbacks
// Write a function performOperation that takes two numbers and a callback function.
// The callback will either add, subtract, multiply, or divide the two numbers.

function performOperation(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(
  performOperation(5, 5, function () {
    return 5 + 5;
  })
);

console.log(
  performOperation(2, 4, function () {
    return 2 * 4;
  })
);

console.log(
  performOperation(10, 2, function () {
    return 10 / 2;
  })
);

// Exercise 6: Simulate Loading
// Create a function that simulates a loading process (e.g., "Loading...") and uses a callback to print "Loading complete!" after 4 seconds.

function simulateLoading(callback) {
  console.log("Loading...");
  setTimeout(() => {
    callback();
  }, 4 * 1000);
  // Print "Loading..." and after 4 seconds call the callback
}

simulateLoading(function () {
  console.log("Loading complete!");
  // This should print "Loading complete!" after 4 seconds
});

function countdown(number, callback) {
  for (let i = number; i <= 0; i--) {
    callback();
  }
  // Implement the countdown logic
}

countdown(5, function () {
  console.log("Countdown finished!"); // Should print after reaching 0
});

function countdown(number, callback) {
  for (let i = number; i <= 0; i--) {
    return callback();
  }
  // Implement the countdown logic
}

countdown(5, function () {
  console.log("Countdown finished!"); // Should print after reaching 0
});

// ### **Exercise 7: Array Filter with Callbacks**
// Create a function `filterArray` that takes an array and a callback function. +
// The callback should return `true` or `false`, and based on that, +
// the function should return a new array with only the elements that meet the condition.

function filterArray(arr, callback) {
  let newArray = [];
  // Use the callback to filter the array
  for (let i = 0; i <= arr.length; i++) {
    if (callback(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

const numbers = [1, 2, 3, 4, 5, 6];

// Example: Filter out even numbers
const evenNumbers = filterArray(numbers, function (number) {
  return number % 2 === 0; // Return true for even numbers
});

console.log("filterArray fun:", evenNumbers);

// ### **Challenge: Chain of Callbacks (Optional)**

// Create a function that takes a number and performs multiple operations (e.g., add, multiply) using chained callbacks. For example:

// 1. Start with a number (e.g., `10`).
// 2. Add `5` to the number.
// 3. Multiply the result by `2`.
// 4. Print the final result.

// 10
function chainCallbacks(number, callbackFirst, callbackSecond) {
  console.log("number:", number);
  let result1 = callbackFirst(number);
  console.log("result1", result1);
  let result2 = callbackSecond(result1);
  console.log("result2:", result2);
  return result2;
  // Add your logic here to perform multiple operations with callbacks
}

function addFive(num) {
  return num + 5; // 15
}

function multipleByTwo(num) {
  return num * 2; // 30
}

let finalResult = chainCallbacks(10, addFive, multipleByTwo);

console.log("Final result:", finalResult); // Should print 30 (10 + 5) * 2;

//  function countdown(number, callback) {

//   if(number > 0) {
//       console.log(number)
//       setTimeout(()=>{
//           console.log(number)
//           countdown(number -1,callback)
//       },1000)
//   }
//   else{
//       callback()
//   }
//   // Implement the countdown logic
// }

// console.log(countdown(5, function() {
//   console.log("Countdown finished!"); // Should print after reaching 0
// }))

//   Challenge: Chain of Callbacks (Optional)
//   Create a function that takes a number and performs multiple operations (e.g., add, multiply) using chained callbacks. For example:

//   Start with a number (e.g., 10).
//   Add 5 to the number.
//   Multiply the result by 2.
//   Print the final result.

function chainCallbacks(number, callback) {
  // Add your logic here to perform multiple operations with callbacks
}

chainCallbacks(10, function (result) {
  console.log("Final result:", result); // Should print 30 (10 + 5) * 2
});

// ### **Exercise 7: Array Filter with Callbacks**
// Create a function `filterArray` that takes an array and a callback function. +
// The callback should return `true` or `false`, and based on that, +
// the function should return a new array with only the elements that meet the condition.

// function filterArray(arr, callback) {
//   console.log(arr);
//   console.log(callback);
//   let newArray = [];
//   // Use the callback to filter the array
//   for (let i = 0; i <= arr.length; i++) {
//     if (callback(arr[i])) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }

// const numbers = [1, 2, 3, 4, 5, 6];

// // Example: Filter out even numbers
// const evenNumbers = filterArray(numbers, function (number) {
//   return number % 2 === 0; // Return true for even numbers
// });

// console.log(evenNumbers);
