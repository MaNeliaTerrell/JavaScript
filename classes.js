// Inheritance

// Think of three properties all people share, set them with the constructor
// Think of three methods all people share
// Create a PostalWorker class that inherits from person, add some methods
// Create a Chef class that inherits from person, add some methods
// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods


// class Person{
//     constructor (state, city, zipcode){
//         this.state = state
//         this.city = city
//         this.zipcode = zipcode
//     }
//     sleep(){
//         console.log('Zzzzzzzz');
//     }
//     walk(){
//         console.log(`People walk in this ${this.city} `);
//     }
//     play(){
//         console.log(`This ${state} loves baseball!`);
//     }
// }
// class postalWorker extends Person {
//     constructor(state, city, zipcode){
//         super(state, city, zipcode)
//     }
//     sortsOutMail(){
//         console.log('Mail!!!');
//     }
// }
// class chef extends Person{
//     constructor(state, city, zipcode){
//         super(state, city, zipcode)
//     }
//     bakesPastry(){
//         console.log('Yum!!');
//     }
// }
// const Joey = new postalWorker('Georgia', 'Atlanta', 30303)
// const John = new chef('Florida', 'Titusville', 32780 )

// console.log(Joey);
// console.log(John);

// const Allen = new postalWorker('California', "San Francisco", 94104 )
// const Dave = new chef('Oregon', 'Portland', 97202)

// console.log(Allen);
// console.log(Dave);

// Hungry for More
// BankAccountclass:

class BankAccount{
    constructor(ownerName, balance, acctNum){
     this.ownerName = ownerName;
     this.balance = balance;
     this.acctNum = acctNum;
    }
  
  
          deposit(Deposit) {
              console.log(`Added ${this.balance}`)
              return this.balance += Deposit
          }
  
  
          withdraw(Withdrawn) {
              console.log(`left is ${this.balance}`)
              return this.balance -= Withdrawn
          }
      }
  
  class CheckingAccount extends BankAccount {
  
      constructor( ownerName, balance, acctNum,overdraftEnabled){
      super(ownerName, balance, acctNum)
      this.overdraftEnabled = overdraftEnabled;
      }
  
  withdraw(){
    if (this.balance -= Withdrawn  <= 0 ){
      console.log('Overdrafted');
    }
  }
  
  }
   

//   && this.overdraftEnabled == true
  const myAccount = new BankAccount('Nelia', 500, 123456789, 30)

console.log(myAccount);
console.log(myAccount.deposit(20));
console.log(myAccount.withdraw(600));
console.log(myAccount.withdraw(650));
