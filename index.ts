#! /usr/bin/env node
import inquirer from "inquirer";
import { Person } from "./person.js";
import { Student } from "./student.js";

const userInput = await inquirer.prompt([
  {
    name: "input",
    type: "number",
    message:
      "Type 1 if you like to talk to other and type 2 if like to keep it to yourself",
  },
]);

const person1 = new Person();

person1.askQuestion(userInput.input);

console.log(`You are  : ${person1.getPersonality()}`);

const student1 = new Student();

const studentInput = await inquirer.prompt([
  {
    name: "studentIn",
    type: "input",
    message: "What is your name :",
  },
]);

student1.set(studentInput.studentIn);
console.log(
  `Hello ${student1.get()} you are an ${student1.getPersonality()} person`
);
