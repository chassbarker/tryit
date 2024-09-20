
let firstName = "Chass";
let lastName = "Barker";
let age = 43;
let city = "San Antonio";

let concatenatedString = firstName + " " + lastName + " is " + age + " years old and lives in " + city + ".";
console.log(concatenatedString);


if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


let day = new Date().getDay();
let dayName;

switch (day) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Unknown day";
}

console.log("Today is " + dayName + ".");


let upperCaseString = concatenatedString.toUpperCase();
console.log("Uppercase string: " + upperCaseString);

let pi = 3.14159265359;
console.log("Pi to two decimal places: " + pi.toFixed(2));
