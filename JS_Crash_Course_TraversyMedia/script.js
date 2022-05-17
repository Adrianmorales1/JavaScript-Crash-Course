console.log('Hello World');
console.error("this is an error");
console.warn('this is a warning');

//var can cause conflict when out of loops and if statements
//let you can reassign values 
//const does allow you to reassign values.. you have to add a value to it
//confused on why var is a big problem


const otherAge = 40;
let age1 = 30;
age1 =31;

//otherAge = 31; //typeError: Assignment to constant variable

//using const for things that won't change
//using let for things that will change 
const teamName = "The badgers"
let score;

score = 10;

console.log(teamName + " has a score of " + score );


//Data Types: Data is directly assigned to memory
//String, Numbers, Boolean, null, undefined, symbol (not going over symbols)

const nameJ = "John"; //string
const age = 30; //number
const rating = 4.5 //numnber
const isCool = true; //boolean
const x = null //null: basically empty it is a variable but empty 
const y = undefined;//undefined
let z; //undefined


//typeof: this is a way to find out what type your variable is .. prints Data Type

console.log(typeof age);//number
console.log(typeof isCool);//boolean
console.log(typeof x);//objest
console.log(typeof y);//undefined
console.log(typeof nameJ);//(string)

//Concatenation... the slow version
console.log('my name is ' + nameJ + ' and I am ' + age);
//Template String.... This is so much better!! and Quicker!!
console.log(`My name is ${name} and I am ${age}`)


console.log(`${rating} is something that ${nameJ} rates he is a ${isCool} cool guy`) //back tics make it a template string somehthing to keep in you back pocket

const hello = `${age} is crazy`; // you can even add them to there own variable like that
console.log(hello);

//length of string

const s = "Hello World!";
const w = "tech, some, ass, gas, mask";

console.log(s.length); // .length number of characters in string
console.log(s.toUpperCase());// toUpperCase() : Upper case the entire string
console.log(s.toLowerCase()); // toLowerCase() : Lower case the entire string
console.log(s.substring(0,4)) // .substring(x,y) : takes apart of entire string and only takes what is inbetween x and y
console.log(s.substring(0,4).toUpperCase()) //You can add two functions to one item
console.log(s.split('')); // makes array

console.log(w.split(', ')) // whatever is in '' is what determines the split of array

/*multi
line
comment */

//Arrays - variables that hold multiple values

const numbers = new Array(1,4,5,6,7,23,9,0);
const fruits = ['apples', 'oranges', 'pears']// usually doing like this JS allows you to add different variables 
console.log(numbers);
console.log(fruits);
console.log(fruits[1]); //calling specific array

//ways to add to array
fruits[3] = 'grapes'; 
console.log(fruits);
fruits.push('mangos'); //adds to end of array
console.log(fruits);
fruits.unshift('berries') // adds to beginning of array
console.log(fruits);
fruits.pop(); //removes last thing in array
console.log(fruits);

console.log(fruits.indexOf('berries')) //finds where in array is specific item

//Object Literals

const person = {
    firstName:'John',
    lastName : 'Doe',
    age :35,
    hobbies : ['music', 'sports', 'programmer'],
    address : {
        street: '50 main st',
        city: 'eagan',
        zip: 55123,
        state: 'MN'
    }

}
console.log(person)//looking at entire print of it
console.log(person.age)//finding specific on person