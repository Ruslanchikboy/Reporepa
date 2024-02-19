// myScript.js

// Define a function to calculate the square of a number
function calculateSquare(number) {
    return number * number;
}

// Call the function and log the result
console.log(calculateSquare(5)); 

// Define an array of names
const names = ['Alice', 'Bob', 'Charlie'];

// Loop through the array and log each name
names.forEach(name => console.log(name)); 

// Define an object representing a person
const person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
};

// Log the person object
console.log(person);

// Define a class representing a car
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    displayInfo() {
        console.log(`This is a ${this.brand} ${this.model}`);
    }
}

// Instantiate a car object and call the displayInfo method
const myCar = new Car('Toyota', 'Corolla');
myCar.displayInfo();

