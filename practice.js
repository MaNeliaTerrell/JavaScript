// class Character {
//     constructor (name, age, eyes, hair, loveCats = false, loveDogs) {
//         this.legs = 2
//         this.arms = 2
//         this.eyes = eyes
//         this.hair = hair 
//         this.name = name
//         this.age = age
//         this.loveCats = loveCats 
//         this.loveDogs = loveDogs || false
//       }

//     greet(otherCharacter){
//         console.log(`Hello ${otherCharacter}!`);
//     }
//     smite(){
//         console.log('I smite thee you vile person');
//     }
//     setHair(hairColor){
//         this.hair = hairColor
//     }
// }

// const me = new Character('Abe', 30, 'brown', 'black', true)
// const you = new Character('Tim', 20, 'blue', 'red', false, true)

// me.setHair('Yellow')

// console.log(me);
// console.log(you);

// console.log(typeof me);
// console.log(typeof you);

// me.greet('Bob')
// you.greet('Bob')
// you.smite()

// class Hobbit extends Character {
//     constructor(name, age, eyes, hair, loveCats, loveDogs){
//         super(name, age, eyes, hair, loveCats, loveDogs) // calls the constructor function from parent class
//         this.skills = ["thievery", "speed", "willpower"]
//     }
//     steal(){
//         console.log(`Let's get away!`);
//     }
//     greet(otherCharacter){
//         console.log(`Hello World ${otherCharacter}`);
//     }
//     smite(){
//         super.smite() // calls the smite method from parent class
//         this.steal() // extends the functionality
//     }
// }

// const frodo = new Hobbit('Frodo', 30, 'brown', 'black', true, true)
// console.log(frodo);


// const response = ["...human...why you taking pictures of me?...",
// "...the catnip made me do it...",
// "...why does the red dot always get away..."];

// const randomRes= Math.floor(Math.random() * response.length);
// console.log(response[randomRes]);

const numsarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numSort = numsarray.sort()
console.log(numSort);
const median = Math.floor(numSort.length/2)
console.log(numSort[median]);