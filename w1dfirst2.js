"use strict";
const prompt = require('prompt-sync')();
//Use do , while loop

let age;
do {
    age = prompt("Please enter an your age: ");
    console.log("You age is " + age);

} while (age < 18);
console.log("You can log in as an adult.");

//While loop
let user_Age;
user_Age = prompt("Please enter an your age: ");

while (user_Age) {
    if (user_Age >= 18) {
        console.log("You can log in as an adult.")
        break;
    } else {
        console.log("You age is :" + user_Age)
        user_Age = prompt("Please enter an your age: ");
    }
}