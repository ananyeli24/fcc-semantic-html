//very easy
var x = 24;
var y = 20;
var c = "The difference between";
var d = x - y;
console.log( c + " " + x + " "+ y + " " + " is " + d);

//easy
let firstName = "Miriam";
let secondName = "Julia";
 
console.log(`${firstName} is longer than ${secondName} by ${firstName.length - secondName.length}`);

//medium

var input = prompt('Type a phrase');

if (input == input.toUpperCase()) {
console.log("You are shouting");

}else if (input === input.toLowerCase()) {
    console.log("You are whispering");
} else {
    console.log('No input');
}

