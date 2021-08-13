//installing readline-sync package
readlineSync = require("readline-sync");

//read input and welcome message
var userName = readlineSync.question("What is your name?");
console.log("Welcome " + userName +
  "! Let's start the game!");

var score = 0;

//function (processing) 
function play(question, answer) {
    var useranswer = readlineSync.question(question);
  
    if (useranswer === answer) {
      console.log("Right")
      score = score + 1;
    }
    else {
      console.log("Wrong")
    }
    console.log("---------------------");
  }   
  
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

  //for loop to call function
for (i = 0; i < qna.length; i++) {
    play(qna[i].question, qna[i].answer)
  }

  console.log("Yayyy, your score is", score);