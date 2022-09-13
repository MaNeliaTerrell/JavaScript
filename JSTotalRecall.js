// // I. Variables & Datatypes

// // A. Q + A
// // How do we assign a value to a variable?
//                 //  We use an assignment (=) operator.
// // How do we change the value of a variable?
//                 // Declare using let and reassign a value.
// // How do we assign an existing variable to a new variable?
//                 // We use the = to give the variable a new value.
// // Remind me, what are declare, assign, and define?
//                 // Declare - creating a variable (in camelCase) ex. studentArr; Use let, const
//                 // Assign - to give value to the variable using an assignment operator =.
//                 // Define - use keywords such as function to define a function.
// // What is pseudocoding and why should you do it?
//                 // It is a written outline of codes; It helps your plan and develop your codes 
//                 //  before you actually write it.
// // What percentage of time should be spent thinking about how you're going to solve a problem 
// // vs actually typing in code to solve it? 90%



// // B. STRINGS
// // 1. Create a variable called firstVariable.
// // 2. Assign it the value of the string "Hello World"
// // 3. Change the value of this variable to some number
// // 4. Store the value of firstVariablein a new variable called secondVariable
// // 5. Change the value of secondVariable to any string.
// // 6. What is the value of firstVariable?   ===  14
// // 7. Create a variable called yourNameand set it equal to your name as a string. 
// // Then, write an expression that takes the string "Hello, my name is " 
// // and the variable yourName so that it returns a new string with them concatenated.

let firstVariable = "Hello World"
firstVariable = 14
let secondVariable = firstVariable
secondVariable = "Hello Georgia"
let yourName = "Nelia"
console.log("Hello, my name is " + yourName + ".")


// // C. Booleans
// // Using the provided variable definitions, replace the blanks so that all log 
// // statements print true in the console. Answers should be all be valid JS syntax 
// // and not weird things that don't make sense but happen to print trueto the console

// const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

// // D. The farm
// // 1. Declare a variable animal. Set it to be either "cow" or something else
// // 2. Write code that will print out "mooooo" if the it is equal to cow
// // 3. Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// // 4. Commit

// let animal = 'cow'

// if (animal === 'cow') {
//     console.log("mooooo");
// }else {
//     console.log("Hey! You're not a cow.");
// }

// // E. Driver's Ed
// // Make a variable that holds a person's age; be semantic
// // Write code that will print out "Here are the keys!", if the age is 16 years or older, or, 
// // if the age is younger than 16, a message should print "Sorry, you're too young."

// let age = 18
// if (age >= 16) {
//     console.log("Here are the keys!");
// }else {
//     console.log("Sorry, you're too young.");
// }


// // II. Loops

// // A. The basics
// // 1. Write a loop that will print out all the numbers from 0 to 10, inclusive

// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// // 2. Write a loop that will print out all the numbers from 10 up to and including 400

// for(let i = 10; i <= 400; i++){
//     console.log(i);
// }
// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000

// for(let i = 12; i <= 4000; i+=3){
//     console.log(i);
// }

// B. Get even
// 1. Print out the numbers that are within the range of 1 - 100
// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for(i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(`${i} <-- is an even number`);
//     }else {
//         console.log(i);
//     }
// }

// C. Give me Five
// 1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// 2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// 3. For numbers divisible by both three and five, be sure your code prints both messages.

// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
        // console.log(`I found a ${i}. High five! There is a crowd`);
//     }else if(i % 5 === 0) {
        // console.log(`I found a ${i}. High five!`);
//     }else if(i % 3 === 0){
//         console.log(`I found a ${i}. Three is a crowd`);
//     } else {
      // console.log(i);
//     }
// }

// // D. Savings account
// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
//  Check your work! Your bank_account should have $55 in it.

// let bank_account = 0
// for(i = 0; i <= 10; i++){
// bank_account += i
// }
      // console.log(bank_account)

// // 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers 
// // between 1 - 100 multiplied by 2.
// // Check your work! Your bank_account should have $10,100 in it.

// let bank_account2 = 0
// for(i = 0; i <= 100; i++){
// bank_account2 += i*2
// }
    // console.log(bank_account2)

// III. Arrays & Control flow

// A. Talk about it:
// What are the things in an array called?
        // elements
// Do Arrays guarantee those things will be in order?
        //  No
// What real-life thing could you model with an array?
        // a row of books, a column of chairs

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes

// let quotes = ["Life is what happens when you're busy making other plans.",
//             "Life is either a daring adventure or nothing at all.",
//             "Love the life you live. Live the life you love."
// ]

//  C. Accessing elements
// Given the following array;

// const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?

// randomThings.at(0)

// // Change the value of "Hello"to "World"

// randomThings.splice(2, 1, "World")

// // Check the value of the array to make sure it updated the array. 
// // How? Why, yes! console.log();

// console.log(randomThings);


// // D. Change values
// // Given the following array; 

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// // 1. What would you write to access the 3rd element of the array?

// ourClass.at(2)

// // 2. Change the value of "Github" to "Octocat"

// ourClass.splice(4, 1, "Octocat")

// // 3. Add a new element, "Cloud City" to the array

// ourClass.push("Cloud City")


// console.log(ourClass);

// // E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: 

// const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.

// myArray.push("Aegon")

// Remove the 5 from the beginning of the array.

myArray.shift()

// Add the string "Bob Marley"to the beginning of the array.

myArray.unshift("Bob Marley")

// Remove the string of your choice from the end of the array.

myArray.pop()

// Reverse this array using Array.prototype.reverse(). 

// myArray.reverse()

// console.log(myArray);
// // Did you mutate the array? 
//         //    Yes
// // What does mutate mean? 
//         // change or manipulate
// // Did the .reverse()method return anything?
//         //  Yes, it reverses the arrangement of elements - first to last

// // F. Biggie Smalls
// // Create a variable that contains an integer.

// let integer = 300

// // Write an if ... elsestatement that:

// // console.log()s "little number" if the number is entered is less than 100


// if (integer < 100) {
//     console.log("little number");
// }

// // console.log()s big numberif the number is greater than or equal to 100.

// else {
//     console.log("big number");
// }

// // G. Monkey in the Middle
// // Write an if ... else if ... elsestatement:
// // console.log()little numberif the number entered is less than 5.
// // If the number entered is more than 10, log big number.
// // Otherwise, log "monkey".

// let y = 22

// if(y < 5){
//     console.log("little number");
// }else if(y > 10){
//     console.log("big number");
// }else {
//     console.log("monkey");
// }

// // H. What's in Your Closet?
// // Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

// // 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
// // log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

// console.log("Kristyn is rocking that " + (kristynsCloset[2]) + " today!")

// // 2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

// kristynsCloset.splice(6, 0, "raybans")

// // 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

// kristynsCloset[5] = "stained knit hat"

// // 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

// thomsCloset[0][0]
// // console.log(thomsCloset[0][0]);

// // 5. In the same way, access one item from Thom's pants array.

// thomsCloset[1][1]
// // console.log(thomsCloset[1][1]);

// // 6. Access one item from Thom's accessories array.

// thomsCloset[2][1]
// // console.log(thomsCloset[2][1]);

// // 7. Log a sentence about what Thom's wearing. 
// // Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// // console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}!`);

// // Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

// thomsCloset[1][2] = "Footie Pajamas"

// // console.log(thomsCloset[1]);

// // IV. Functions


// // A. printGreeting
// // Do you think you could write a function called printGreeting with a parameter name that returns a 
// // greeting with the argument interpolated into the greeting?

// function printGreeting(name) {
//     return `Hello there, ${name}!`
// }
// console.log(printGreeting("Slimer"))

// // B. printCool
// // Write a function printCool that accepts one parameter, name as an argument. 
// // The function should print the name and a message saying that that person is cool.

// function printCool(name) {
//     return `${name} is cool.`
// }
// console.log(printCool("Captain Reynolds"));

// // C. calculateCube
// // Write a function calculateCubethat takes a single number and prints the 
// // volume of a cube made from that number.

// function calculateCube(num) {
//     return num * num * num
// }
// console.log(calculateCube(5));

// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) 
// and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. 
// Test your function on every vowel and make sure it's working. In general, when you write 
// functions, take a minute to test them with different values to make sure they behave the way you want.

// function isVowel(char) {
//     if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
//       return true
//     }else {
//       return false;
//     }
//   }
//   console.log(isVowel('W'));

// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). 
// The function should return an array of numbers where each number is the 
// length of the corresponding string.

// function getTwoLengths(a, b) {
//     return [a.length, b.length]
// }
//  console.log(getTwoLengths("Hank", "Hippopopalous"))

// // F. getMultipleLengths
// // Write a function getMultipleLengths that accepts a single parameter 
// // as an argument: an array of strings. The function should return an array of numbers 
// // where each number is the length of the corresponding string.

// const getMultipleLengths = ([a, b, c, d, e]) => {
//     return [a.length, b.length, c.length, d.length, e.length]
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the 
// largest of them. If all numbers are the same, it doesn't matter which one is returned. 
// If the two largest numbers are the same, one of them should be returned. 
// Be sure to test it with larger values in each of the three locations.

const maxOfThree = (a, b, c) => {

// return Math.max(a, b, c );

//  but preferred: 
  if (a > b && a > c){
    return a;
  } else if(a < c && b < c) {
    return c;
  }else if(a == b || a === c || b === c){
    return a || b || c
  }else{
    return b;
  };
}
// console.log(maxOfThree(6, 9, 1));

// H. printLongestWord
// Write a function printLongestWord that accepts a 
// single argument, an array of strings. The method should 
// return the longest word in the array. In case of a tie, 
// the method should return the word that appears first in the array.

    function printLongestWord(array) {
      return array.reduce((a, b) => {
      if(a.length == b.length) {
        return (a.length)
      }else{
        a.length >= b.length ? b : a
      }
      }
    }
  // const printLongestWord = ([a, b, c, d, e, f, g, h]) => {
  //   return Math.max(a.length, b.length, c. length, d.length, e.length, f.length, g.length, h.length) 
  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));




// Objects

// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. 
// Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

const user = {
  name: 'Mikaela',
  email: 'MTgirl@gmail.com',
  age: 18,
  purchased: [],

}

// B. Update the user
// Our user has changed his or her email address. Without changing the original user object, 
// update the emailvalue to a new email address.

user.email = 'MyMT@gmail.com'
// console.log(user.email);

// Our user has had a birthday! Without changing the original userobject, 
// increment the age value using the postfix operator. Hint: age++

user.age++
// console.log(user.age);

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.

// Without changing the original user object, add a new key location to the object, 
// and give it a value or some-or-other location (a string).

user.location = "Atlanta"
// console.log(user.location)

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.

user.purchased.push("carbohydrates")
user.purchased.push("peace of mind")
user.purchased.push("Merino jodhpurs")

// console.log(user.purchased[2]);

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// If we want to give our user a friend with a nameand age, we could write:

// user.friend = {
//   name: "Grace Hopper",
//   age: 85
// }
// When we console.log user, we would see the friend object added to our user object.

// console.log(user);

// Write a friend object into your userobject and give the friend a name, age, location, and purchased array (empty for now)

user.friend ={
  name: "Gabby",
  age:  17,
  location: "Asheville",
  purchased: [],
}

// Console.log just the friend's name

// console.log(user.friend);

// Console.log just the friend's location

// console.log(user.friend.location);

// CHANGE the friend's age to 55

user.friend.age = 55

// console.log(user.friend.age);

// The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchased array.

user.friend.purchased.push("The One Ring")

// The friend has purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.

user.friend.purchased.push("A Latte")

// Console.log just "A latte" from the friend's purchasedarray.

// console.log(user.friend.purchased[1]);

// F. Loops
// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.

// for(let i = 0; i <= user.purchased.length -1; i++)
  // console.log(user.purchased[i]);

// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

// for(let i = 0; i <= user.friend.purchased.length -1; i++)
  // console.log(user.friend.purchased[i]);

  // G. Functions can operate on objects
  // Write a single function updateUser that takes no parameters. When the function is run, it should:
  // it should increment the user's age by 1
  // make the user's name uppercase

// function updateUser(){
//   // user.age++
//   // user.name.toUpperCase()
// }
// console.log(user.age++);
// console.log(user.name.toUpperCase());

// Write a function oldAndLoud that performs the exact same tasks as updateUser, 
// but instead of hard-coding it to only work on our user object, 
// make it take a parameter person, and have it modify the object that is 
// passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.

// function oldAndLoud(person){

//   return person.name.toUpperCase()
// }
// console.log(oldAndLoud(user));



// Cat Combinator



// 1. Mama cat
// Define an object called cat1 that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed

const cat1 = {
  name: "Misty",
  breed: "Persian",
  age: 5
}
  // console.log(cat1.age);
  // console.log(cat1.breed);

  // 2. Papa cat
  // Define an object called cat2 that also contains the properties:
  
const cat2 = {
  name: "Oreo",
  breed: "Ragdoll",
  age: 6
}

// 3. Combine Cats!
// The cats are multiplying!
// Write a function combineCats that has two parameters mama, and papa. 
// The function will take two arguments -- each a cat object.
// Pass cat1 and cat2as arguments to the combineCats function. The function should console.log them.

function combineCats(mama, papa){
  return [mama, papa]
}
//  console.log(combineCats(cat1, cat2))






















