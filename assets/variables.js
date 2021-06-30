/* Working with Variables
console.log("working with Variables")

let color = "red";
console.log(color);

color = "blue"
console.log(color);

const shape = ("square");
console.log(shape);

//shape = ("circle");
//console.log(shape);

//var price = 20;
//console.log(price);

//price = 30;
//console.log(price);


// Working with Numbers
console.log("working with Numbers")

let x = 0;
x = x + 15;
console.log(x, "add 15");

x -= 8;
console.log(x, "subtract 8");

let numAvg = (26 + 44 + 72 + 86 + 112) / 5
console.log(numAvg, "average");


let theNumber = 14;
console.log(++theNumber);

console.log(typeof x, "type");

// Working with Strings

console.log("working with Strings")
let verb = 'drives';
console.log(verb);

let noun = 'car';
console.log(noun);

let adj = 'fast';
console.log(adj);

let coler = 'blue';
console.log(color);

let name = 'Todd';
console.log(name);

let madlib = 'book';
console.log(madlib);


console.log("This " + madlib, "is about how " + name, "\n"  + verb + " his " + adj, color, noun + "." + "\n"
+ "This is for Working with Strings section");

madlibLiteral = `${name} always ${verb} his ${adj} ${color} ${noun}.`;
console.log(madlibLiteral)


// Conditionals

let x = 2;
let y = 4;
if (x > y) {
    message = ("Hello World");
}
else (x <= y) { 
    messaghe = ("Goodbye World");

}


function sayHello(name){
    return (name ? `Hello, ${name}!` : "Hello, person!")
}
console.log( sayHello("Class") )


/*
let soldOut = true;
let onSale = true
let message = "";

soldOut = !soldOut

//let thisMessage = (!soldOut && onSale) ? "I got tickets!" : "I did not get tickets";

console.log(thisMessage);

*/

// Loops

//for (let i = 0; i <= 100; i++) {
   //console.log(i);
/////} 

//for (let i = 0; i <= 100; i+=2) {
  // console.log(i);
//} 

//for (let i=100; i>=0; i--) {
   //console.log(i);
//} 

/*


//Functions

// Number 1 - Functions

function greeting() {
    console.log('Hello World');
}
greeting();

// Number 2 - Functions

let countingCharacters = function (string) {
    if (string.length <= 10) {
        console.log(string.length);
    } 
    else {
        console.log("The string: " + string + "is too long.")
    }
}

countingCharacters("Today is the first day of the rest of your life, ");


// Number 3 - Functions

function difference (num1,num2) {
    if (typeof(num1 || num2) !== 'number') {
    }
    else{
        return Math.abs(num1 - num2);
        //console.log(y-x);
    }
}

console.log(difference(15,100));


// Number 4 - Functions

let advancedGreeting = function(hour){
    if (hour < 12){
        return "Good Morning";
    }
    else if (hour >= 12 && hour < 18){
        return "Good afternoon";
    }
    else if (hour >= 18 && hour <= 24){
        return "Good night";
    }
    else{
        return "Invalid hour input";
    }
}

console.log(advancedGreeting(8));
*/
//const values = ['a', 'b', 'c'];
//values[1] = 'bbb';
//console.log(values[1]);
//console.log(values[1]);
//console.log(values[2]);
//console.log(values[3]);


// Arrays - Number 5
const carMakes = ["Honda", "Toyota", "Mazda"];
carMakes.push("Mercedes");
const first = carMakes.unshift("BMW");
console.log(carMakes);
console.log(carMakes[2]);


// Arrays - Number 6
const newCars = carMakes.slice(0,3); 
console.log(newCars);


// Arrays - Number 7
const ericInfo = ["Eric", "Senior Instructor", "Florida"];
const first2 = ericInfo.shift();
console.log(first2);
ericInfo[1] = "South Carolina";
console.log(ericInfo);
ericInfo.push("Schwartz");
console.log(ericInfo);


// Arrays - Number 8
const fruits1 = ["apple", "pear", "strawberry", "grape"];
const fruits2 = [
  ["strawberry", "grape"],
  ["rambutan", "durian"],
  ["orange", "apple"]
];
const fruits3 = [
  ["strawberry", ["pineapple"]],
  ["grape", ["pear", ["apple"], "kiwi"]]
];

console.log(fruits1[0]);
console.log(fruits2[:5]);
console.log(fruits3[0]);

