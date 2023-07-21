'use strict';















//================ Constructor Function ================
// Constructor function is used to build an Object using a function.
// CF is a normal function, the difference between Cf and normal function
// is that CF is called with 'NEW' keyword.

const Person = function(firstName, birthYear) {
    // Instance Properties 
    this.firstName = firstName;
    this.birthYear = birthYear

    // Never Create a method inside a constructor function!!
    // const calcAge = function(){
    //     console.log(2017- birthYear);
    // }
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1/ New empty object {} is created
// 2. Function is called this = {}
// 3. {} linked to prototype
// 4. FUnction automatically return {}

const matilda = new Person('Matilda', 2019);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person); 

//==================== Prototypes ====================
console.log(Person.prototype);

Person.prototype.calcAge = function() { //Setting methods on prototype
    console.log(2017 - this.birthYear);
}

jonas.calcAge();// This is how to implement prototype in Js...
matilda.calcAge(); // ...rather than writing the method inside the object.
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person. prototype.isPrototypeOf(jonas));
console.log(Person. prototype.isPrototypeOf(matilda));
console.log(Person. prototype.isPrototypeOf(Person));

// You can also set Properties on the Prototype.
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));


console.log(jonas.__proto__);// Person prototype 

// Object prototype (Top of the prototype chain)
console.log(jonas.__proto__.__proto__);

console.dir(Person.prototype.constructor);

// Array Prototype 
const arr = [2,3,5,5,6,7,5,6,3,7]; // new Array = [];
console.log(arr.__proto__); // same as Array.Prototype
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
    return [...new Set(this)]
};

console.log(arr.unique());

const h1 = document.querySelector('h1');

//////////