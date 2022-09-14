////////////////////////////////
// Easy Going
////////////////////////////////

// Write a for loop that will log the numbers 1 through 20

for(let i = 1; i <= 20; i++){
    // console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////

// Write a for loop that will log only the even numbers in 0 through 200.

// for(let i = 0; i <= 200; i++){
//     if(i % 2 === 0)
//      console.log(i);
// }

////////////////////////////////
// Fizz Buzz
////////////////////////////////


// This is a classic problem that you should get really comfortable solving. 
// If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log ("FizzBuzz")
//     }
//     else if ( i % 3 === 0) {
//         console.log("Fizz");
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz")
//     }
//     else {
//         console.log(i);
//     }
// }


////////////////////////////////
// Wild Wild Life
////////////////////////////////

// Use the following arrays to answer the questions below (name,species ,age, hometown): 
// You should be modifying the elements by accessing them. It is up to you which methods to use.

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.

// plantee.forEach(function(plantee) {
//     plantee = ("Plantee2", "plant2", 5001, "Mordor2")
// 	console.log(plantee);
// });
//   >>>>>>>>>OR

// plantee.forEach((element, index) => {
//     plantee[index] = element + index;
//   });

plantee.splice(0, 4, "Plantee2", "plant2", 5001, "Mordor2")
  
// console.log(plantee)

// 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

wolfy.splice(3, 1, "Gotham City")
// console.log(wolfy);

// 3. Give D'Art a second hometown by adding "Hawkins"

dart.push("Hawkins")
// console.log(dart);

// 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".

wolfy.splice(0, 1, "Gameboy")
// console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.

const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

for(let i = 0; i < ninjaTurtles.length; i++){
        // console.log(ninjaTurtles[i].toUpperCase())
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////

// Here is a list of favMovies:

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 
                   'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 
                   'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 
                   'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 
                   'Imitation of Life', 'Snatch', 'Fast and Furious'];

// Console log: the index of Titanic

// console.log(favMovies.indexOf('Titanic'));

// Do the following and console.log the final results (I have included some thought questions, 
// you don't have to write out an answer for those marked as such):

// 1. use the .sort method Thought question: what did this do to the array? Did it permanently alter it?

// favMovies.sort()

// 2. Use the method pop

// favMovies.pop();

// 3. push"Guardians of the Galaxy"

// favMovies.push("Guardians of the Galaxy")

// 4. Reverse the array

// favMovies.reverse();

// 5. Use the shiftmethod

// favMovies.shift()

// 6. unshift- what does it return?

// favMovies.unshift('The Hobbit')
// console.log(favMovies);

// 7. splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", 
// instead of counting it yourself) Thought question: did this permanently alter our array?
// 8. slicethe last half of the array (challenge yourself and try to programatically determine 
// the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// 9. store the value of your slicein a variable, console.log it - Thought question: what is going on here?
// 10. console.log your final results
// 11. After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, 
    // what value do we get when we look for the index of something that is not in the array?
// 12. Thought question: that we declared the variable favMovieswith const, and yet, 
    // we were allowed to change the array. Weird? Should we have used let?

////////////////////////////////
// Where is Waldo
////////////////////////////////

// With the following multi-dimensional array;

const whereIsWaldo = [["Timmy", "Frank"], 
                       "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", 
                        ["Baked Goods", "Waldo"]]];

// Remove Eggbert (hint look at the slice/splice method(s))

// whereIsWaldo.splice(1, 1)
// console.log(whereIsWaldo);

// Change "Neff" to "No One"

// whereIsWaldo[2].splice(2, 1, "No One")
// console.log(whereIsWaldo)

// Access and console.log "Waldo"
// const waldo = whereIsWaldo[3][1][1]

// console.log(waldo)

////////////////////////////////
//  Excited Kitten
////////////////////////////////

// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// let i = 20
// do{
//     console.log("Love me, pet me! HSSSSSS!");
//     i--
// } while (i > 0)

// 2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

// for(let i = 0; i <= 20 ; i++){
    
//     const response = ["...human...why you taking pictures of me?...",
//     "...the catnip made me do it...",
//     "...why does the red dot always get away..."];
    
//     const randomRes= Math.floor(Math.random() * response.length);

//     if(i % 2 === 0){
//         console.log((i) + response[randomRes])
//     }else{
//         console.log(i);
//     }
// }




// Hint 1
// Hint 2
// Hint 3
// Hint 4
// Hint 5
// Hint 6

////////////////////////////////
//  Find the Median
////////////////////////////////

// Find the median number in the following numsarray, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. 
// In which case, look into Math.floor(something)

const numsarray = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
numSort = numsarray.sort()
console.log(numSort);
const median = Math.floor(numSort.length/2)
console.log(numSort[median]);