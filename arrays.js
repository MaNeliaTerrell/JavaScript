// =============Challenge #1
// Create a variable called fourthItem and assign it the value of the fourth item in the horror array ('Ghostface'). 
// Then console.log fourthItem to see the output.
// const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

// const fourthItem = horror.at(3)
// console.log(fourthItem)

// =============Challenge #2
// Use a built-in JavaScript method to add another show to the netflixShows array. 
// Then log your updated array to the console.
// const  netflixShows1 = ["Orange is the New Black", "Black Mirror", "Chewing Gum"]
// const netflixShows2 = netflixShows1
 
// netflixShows2.push('Stranger Things')
// console.log(netflixShows1);

// ==============Challenge #3
// 1. Iterate through the synonyms array using a for loop, pushing a greeting string with the format
//  "Have a [synonym] day!" into the greetings array.
// 2. Use a second for loop to iterate through the greetings and console.log() each greetings.

// const synonyms = ['fantastic', 'wonderful', 'great'];
// const greetings = [];

// // // // // 1. Loop through the synonyms array. Each time, push a string into the greetings array. 
// // // // // The string should have the format 'Have a [synonym] day!'

// for (i = 0; i < synonyms.length; i++){
//     greetings.push(`Have a ${synonyms[i]} day!`) 
// }
// for (i - 0; i < greetings.length; i++){

// }
// console.log(greetings);

// // ============Challenge #4
// You are given an array of five numbers called increaseByTwo. 
// Use a for loop to iterate through the array and increase each number by two.

// const increaseByTwo = [1, 2, 3, 4, 5];

// for(let i = 0; i < increaseByTwo.length; i++){
//         (increaseByTwo[i] += 2)
// }
// console.log(increaseByTwo)

// =============Challenge #5
// Iterate through the array and multiply a number by 10 if it is greater than or equal to 5.

// const timesTenIfOverFive = [23, 9, 11, 2, 10, 6]

// for(let i = 0; i < 6; i++){
//     if(timesTenIfOverFive[i] >=5)
//     if(timesTenIfOverFive[i]*= 10){ 
//     }
//     }
// // Uncomment the line below to check your work!
// console.log(timesTenIfOverFive); 
// -> should print [230, 90, 110, 2, 100, 60]

//  =======map function


// Create a function subtractTwo that accepts a number and returns that number minus 2.

// Then create a function map that takes two inputs -

// an array of numbers (a list of numbers)
// a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
// Have your map function returns a new array filled with numbers that are the result of using 
// the 'callback' function on each element of the input array. Please do not use the native map or forEach method.

// function subtractTwo(num) {
//     return num - 2;
// }
//  function map(array, callback){
//     const newArray = []
//     for (let i = 0; i < array.length; i++) {
//     const result = callback(array[i])
//     newArray.push(result)
//     }
//     return newArray
//  }
// console.log(typeof subtractTwo); // should log: 'function'
// console.log(typeof map); // should log: 'function'
// console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3]

//  ---- ForEach Challenge----

// Create a function recreateforEach which takes an array and a callback, 
// and runs the callback on each element of the array. recreateforEach 
// does not return anything. Please do not use the native forEach or map method.

// const recreateForEach = (array, callback) => {
// for(i = 0; i < array.length; i++){
//     callback(array[i]); //call the callback function on
//                         //each element in array
// }
// }
// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// recreateForEach(letters, function(char) {
// alphabet += char;
// });
// console.log(alphabet); //prints 'abcd'
// console.log(typeof recreateForEach); // should log: 'function'
// recreateForEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
