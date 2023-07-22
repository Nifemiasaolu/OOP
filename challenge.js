'use strict';

///////
// Code CHallenge #4

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/hr`);
    }

    brake(){
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/hr`);
    }

    get speedUS(){ //getters
        return this.speed / 1.6
    }

    set speedUS(speed) { //setters
        this.speed = speed * 1.6;
    }
}

class EVCl extends CarCl { //Extends is used bcos EVCl is a child class of CarCl,
    // ...and EVCl needs some of CarCL properties. 

    #charge; //This means charge is being privatised or protected. '_' also can be sed

    constructor(make, speed, charge) {
        super(make, speed); //When using the Extend/Super ppty, Extend is used to link the child class with the parent class
        // Super is used to rewrite the parent's properties inside the child ppty, to avoid repitition of code  
        this.#charge = charge
    }

    chargeBattery(chargeTo) { // using methods to the Class. This method is a public API, so as to be able to manipulate it.
        this.#charge = chargeTo
    }

    accelerate() { // using methods to the Class 
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is going at ${this.speed} km/h, wuth a charge of ${this.#charge}`);
        
    }

}

const rivian = new EVCl ('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);


// const EVCl = function(make, speed, charge) {
//     CarCl.call(this, make, speed); //Using the 'Car Class' here, rather than writing the properties again... 
//        ...CarCl always include the 'this' keyword in its argument.
//     this.charge = charge
// }

// //Linking of the Class Prototypes 
// EVCl.prototype = Object.create(CarCl.prototype);
// // console.log(EVCl);

// EVCl.prototype.chargeBattery = function(chargeTo) { // using methods to the Class
//     this.charge = chargeTo
// }

// EVCl.prototype.accelerate = function() { // using methods to the Class 
//     this.speed += 20;
//     this.charge--;
//     console.log(`${this.make} is going at ${this.speed} km/h, wuth a charge of ${this.charge}`);
    
// }