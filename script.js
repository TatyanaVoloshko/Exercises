//1 - Variables and Conditionals:

/*1. Create a variable to store your age. 
    Write a conditional statement to check if you are old 
    enough to vote(age >= 18), and log a message accordingly.* /

// let age = 38;

// if (age >= 18) {
//     console.log('You are adult person.')
// } else {
//     console.log('You are not adult person!')
// }


/*2.Write a program that prompts the user for their name. 
    If the name is "John," log "Hello, John!" to the console; otherwise,
    log "You are not John."*/

// let userName = prompt('What is your name?');

// if (userName.toLowerCase() === 'john') {
//     console.log("Hello, John!");
// } else {
//     console.log("You are not John.");
// }



//2 - Functions:

/*1 Write a function that takes two numbers as parameters 
    and returns their sum. 
    Call the function with different numbers to test it.*/

// function sumNumbers(num1, num2) {
//         return num1 + num2
// }

// console.log(sumNumbers(-100, 200));



/*Create a function that accepts a string as a parameter 
    and returns the string reversed. 
    For example, "hello" should become "olleh."*/

// function reverseString(string) {
//     let newString = '';

//     for (let i = string.length - 1; i >=  0; i--) {
//         newString += string[i];
//     }
//     console.log(newString);
// }
    
// reverseString('Hello')


//3 Arrays and Loops:

/*Create an array of your favorite fruits.
  Use a `for` loop to log each fruit to the console.*/

// let arr = ['banana', 'apple', 'ananas', 'peach', 'orange'];
  
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

/*Write a function that takes an array of numbers as a parameter 
and returns the average of those numbers.*/

// let sumNum = 0;
// let averNumber = 0;

// function averageNum(arr) {
//     for (let i = 0; i < arr.length; i++) {

//         sumNum += arr[i];
//         averNumber = sumNum / arr.length;


//     }
//     console.log(averNumber);
// }

// averageNum([1, 2, 3, 4, 5, 6, 7, 8, 9]);


/*Given an array of numbers, 
use a loop to find and log the largest number in the array.*/

// let largNum = 0;

// function largestNum(arr) {
//     for (let i = 0; i < arr.length; i++) {

//         if (largNum <= arr[i]) {
            
//             largNum = arr[i];
//         }
//     }

//     console.log(largNum);

   
// }

// largestNum ([100, 2000, 2, 500, 459]);

/*Create an array of words. Use a `for` loop to construct
 a sentence by concatenating these words and log it to the console.*/

// let newSentence = '';

// function sentence(arr) {
//     for (let i = 0; i < arr.length; i++) {

//         newSentence = newSentence + ' ' + arr[i]
//     }

//     console.log(newSentence)
// }
 
// sentence(['Hello', 'how', 'are', 'you', 'doing', '?'])


/*Write a function that takes an array of names and a name as a parameter. 
    The function should check if the given name exists 
    in the array and return true or false.*/

// function includeName(arr, name) {

//     const includName = arr.includes(name);
    
//     if (includName) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// includeName(["Tanya", "Olya", "Yeva", "Anya", "Nata"], "Olya")


/*Create an array of even numbers from 1 to 20 using 
    a `for` loop and the `if` statement. 
    Log the resulting array to the console.*/

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// let newArr = []

// function createArr(arr) {

//     for (let i = 0; i < arr.length; i += 1) {
        
//         if (arr[i] % 2 === 0) {
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr)
// }

// createArr(arr)


// 4- Objects:

/*Create an object representing a book with properties like title, 
    author, and year. 
    Print the book's details to the console.*/


// const book = {
//     title: "My book",
//     author: "Tanya",
//     year: 2024
// }
    
// console.log(book)

/*Define an object to represent a person with properties like name, 
age, and gender. Create a function that takes a person's object 
as a parameter and prints a message with their information.*/


// const user = {
//     name: 'Yeva',
//     age: 11,
//     gender: 'female'
// }

// function userInform(user) {
//     const keys = Object.keys(user);

//     for (const key of keys) {

//         console.log(`${key}: ${user[key]}`);
//     }
    

// }

// userInform(user)

//5- Objects as Classes:

/*Create an object that simulates a class representing a car 
with properties like make, model, and year. 
Add a method to start the car.*/

// const Car = {
//   make: "",
//   model: "",
//   year: "",
//   start: function () {
//     console.log("Starting the car.");
//   },
 
// };

// const myCar = Object.create(Car);
// myCar.make = "Nissan";
// myCar.model = "Micra";
// myCar.year = 2021;

// myCar.start();

/*Extend the previous car class object with a method to drive the car. 
Print a message when you start and drive the car instance.*/

// const Car = {
//   make: "",
//   model: "",
//   year: "",
//   start: function () {
//     console.log("Starting the car.");
//   },
//   drive: function () {
//     console.log("Driving the car.");
//   },
// };

// const myCar = Object.create(Car);
// myCar.make = "Nissan";
// myCar.model = "Micra";
// myCar.year = 2021;

// myCar.start();
// myCar.drive();

//6- Window Object:

/*Use the `window.alert` method to display an alert dialog with 
a message of your choice when a button is clicked on a webpage.*/

// let btnChois = document.getElementById("btn")


// btnChois.addEventListener('click', function() {
//     window.alert('I am your chois');
    
// })

/*Create a function that uses `window.prompt` 
to ask the user for their name, 
then use `window.alert` to greet them with their name.*/

// const askName = window.prompt('What is your name?')
// const windowAlert = window.alert(`Hello ${askName}`);

//7- DOM Manipulation:

/*Create an HTML page with a button and a div element. 
Write a JavaScript function that changes the text content 
of the div when the button is clicked.*/

// document.getElementById('click-me').addEventListener('click', function () {
//     document.getElementById("change-text").textContent = 'Text change';
// })

/*In an HTML page, create a list of items (e.g., a to-do list) 
using an unordered list (`<ul>`) and list items (`<li>`).
 Write JavaScript to add a new item to the list when a button is clicked.*/

// document.getElementById('add-todo').addEventListener('click', function () {
//     let li = document.createElement('li');
//     let ul = document.getElementById('list')
//     li.textContent = 'Todo'
//     ul.appendChild(li)
//  })


/*Create a web page with an image and a button. 
Write JavaScript to change the image source when the button is clicked.*/

// document.getElementById("change-img").addEventListener('click', function () {
//     document.getElementById("img").src = "image/Visa-card.png";

// });

/*Build an interactive form in HTML (e.g., a simple login form) 
with input fields for username and password. 
Write JavaScript to validate the form when submitted. 
Display a message based on whether the login was successful or not.*/

//  let userName = "Tanya";
//  let userPassword = "Tanya123";

// document.getElementById("submit").addEventListener("click", function () {
//   let name = document.getElementById("name").value;
//   let password = document.getElementById('password').value;

//   if (name === userName && password === userPassword) {
//     alert("Login possible");
//   } else {
//     alert("Incorrect password or user");
//   }
// });