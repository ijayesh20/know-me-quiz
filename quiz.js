//installing readline-sync package
readlineSync = require("readline-sync");

//read input and welcome message
var userName = readlineSync.question("What is your name?");
console.log("Welcome " + userName +
  "! Let's start the game!");

//array of objects 
qna = [
    {
      question: "Where do you live?",
      answer: "Mumbai"
    },
    {
      question: "What is favourite hobby?",
      answer: "Drawing"
    }
  ];