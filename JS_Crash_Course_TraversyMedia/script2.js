//this is second file 
//starts at 52:47 in the video

//short hand if statement

const x = 10;

const color = x > 10 ? 'red' : 'blue'
const color2 = x > 9 ? 'red' : 'blue'

console.log(color)
console.log(color2)

switch(color) {  // another form of if statement for strings mostly.. or so it seems
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue')
}

//functions

function addNums(num1, num2) { //prints item
    console.log(num1+num2)
}

addNums(5,4)

function addNums2(num1, num2) { //returning item
    return num1+num2 
}

console.log(addNums2(4,7))

const addNums3 = (num1, num2) => num1+num2; // ARROWS (=>) are for one line code so like this one line makes coding slimer and easier to type that doing it like that makes it return 'num1+num2'

console.log(addNums3(9,7))

//Object Oriented Programming 


//Constructor Function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);//date is a function where you can actually send a date and it will turn your date to an actual date


//    this.getBirthYear = function() { //you can create      your       own functions that do stuff with the data
//        return this.dob.getFullYear();
//    }
//    this.getFullName = function() { //you creating function to call else where
//        return `${firstName} ${lastName}`;
//    }
}

Person.prototype.getBirthYear = function () { //another object to attach functions prototypes are great for that
    return this.dob.getFullYear;
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

//Class another syntax then using 'prototype'
class Animal {
    constructor(animal, color, age) {
        this.animal = animal;
        this.color = color;
        this.age =age;
    }

    getAnimalColor() {
        return `${this.color} ${this.animal}`
    }
}

//Instantiate Object

const person1 = new Person('adrian', 'morales', '2-17-2002' )
const person2 = new Person('mary', 'smith', '3-15-2002' )
console.log(person1)
console.log(person2.firstName)
console.log(person1.dob) // printing dob with Date function what it looks like
console.log(person1.dob.getFullYear())//different functions of date method
console.log(person1.getBirthYear())
console.log(person1.getFullName()) //how the function you made looks

console.log(person1)



