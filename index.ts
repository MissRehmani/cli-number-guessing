#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() *6 + 1);

const answers = await inquirer.prompt([
  {
    name: "userGuessdNumber",
    type: "number",
    message: "Please guess a number between 1 - 6:",
  },
]);

if(answers.userGuessdNumber === randomNumber) {
    console.log("Conguratulations! you guessed righr number.")
}else {
console.log("You gussed wrong number");
}
