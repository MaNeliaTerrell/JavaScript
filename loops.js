// Write a loop that outputs: 1, 3, 5, 7, 9 2, 4, 6, 8, 10.
// odd
/*
for (let i = 1; i <= 10; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
// even
for (let i = 2; i<=10; i++) {
        if (i % 2 === 0) {
            console.log (i);
}
    }

// Write a loop that counts down from 10 to 1.
for (let i = 10; i >= 0; i--) {
        console.log(i);
}

// Write a loop that outputs multiples of 3 starting at 6 and ends at 60.
for (let i = 6; i <= 60; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Using the remainder % operator, write a loop that iterates between 0 and 10 and prints all even numbers.
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// Write a loop for the given output: pyramid
const fig = "#######" 
for (let i = 0; i < fig.length; i++) {
    console.log(fig[i]); 
}
for (let i = fig.length -1; i > 0; i--) {
    console.log(fig[i])
}
    console.log(fig[fig.length -1])
*/

/*
// Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions:
// For numbers divisible by 3, print "Fizz" instead of the number. 
// For numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz", 
// for numbers that are divisible by both 3 and 5.
//(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log ("FizzBuzz")
    }
    else if ( i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    else {
        console.log(i);
    }
} */

// Loop - Triangle number signs (#)

// const fig = "#######"
// let reversed = ''
// for (let i = fig.length -1; i >= 0; i--){
//     reversed += fig[i]
//     console.log(reversed);
// }

//===== While Loops
// Use a while loop to increment count by 2 on each repetition of the block of code. 
//Run the code block of your while loop until count is 8.
// let count = 0
// while (count <= 8) {
//     count += 2
//     console.log(count);
// }  count+2

// Initialize a variable addThis to 0 and a variable sum to 0. Use a while loop to repeat a 
//code block as long as addThis is less than 10. In the code block, add the value of addThis 
//to sum, then increment addThis by 1. After the while loop runs, the value of sum should be 
//the sum of the numbers 0 through 9.

// let addThis = 0
// let sum = 0
// while(addThis < 10) {
//     sum += addThis
//     console.log(sum);
//     addThis++
//      }