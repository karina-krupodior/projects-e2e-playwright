// Exercise 1:
// Write a simple program where a callback function is used to greet someone after saying "Hello". The callback should say "How are you?" after the greeting.

// A function passed into another function and gets called when the first function finishes its work

function greet(name, callback) {
  // console.log(`Hello, ${name}`);
  callback();
}

greet("Karina", function () {
  console.log("How are you?");
});

// Exercise 2:
// You have two functions: one that checks if a number is even or odd,
// and another function that prints a message after the check.
// Use a callback function to print "This number is even" or "This number is odd."

function checkNumber(number, callback) {
  if (number % 2 === 0) {
    callback("This number is even");
  } else {
    callback("This number is odd");
  }
}

checkNumber(7, function (message) {
  console.log(message);
});

// Exercise 3:
// Imagine you are baking cookies. Write a function that starts baking and uses a callback function to print "Cookies are done!" after the baking process is complete.

function bakeCookies(callback) {
  // console.log("Baking cookies...");
  // After 3 seconds, call the callback function
  setTimeout(callback, 3000); // Simulating the baking time
}

bakeCookies(function () {
  console.log("Cookies are done!");

  // Add your callback code here to print when cookies are done
});

// Create a function that greets someone with their name, but the greeting should appear after 2 seconds.

function delayedGreet(name, callback) {
    // console.log(`Hello, ${name}`)

  setTimeout(function () {
    callback();
  }, 2 * 1000);
}

delayedGreet("Karina", function () {
  // This should print "Hello, Karina!" after 2 seconds
  console.log("How are you");
});
