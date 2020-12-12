//Initial/Extras

var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;

function seprator() {
  console.log(" ");
  console.log(chalk.yellowBright("************************************************"));
  console.log(" ");
}

function blueFont(text) {
  return chalk.blueBright.bold(text);
}
function bgRed(text) {
  return chalk.bgRed(text);
}
function greenFont(text) {
  return chalk.green(text);
}

//UserName

var Name = readlineSync.question(blueFont('Please Enter Your Name '));
console.log("Welcome " + Name);
seprator();


//Instructions

console.log(blueFont("Let's test your knowledge About India, shall we? \n"));
console.log(greenFont("Here are your instructions:- \n"));
console.log(`1. There are a total of 3 questions.
2. Each correct answer gets you one point, there's penalty for incorrect answers.
3. You have to type the correct answers.
`);


//Questions

const questions = [{
  question: '[0] What Indian city is the capital of two states? \n',
  answer: "Chandigarh"
},
{
  question: '[1]  How many countries border India? \n',
  answer: "6"
},
{
  question: '[2] What is the capital of Gujarat? \n',
  answer: "Gandhinagar"
}
];

//Game Logic

function playGame(que, ans) {
  let userInput = readlineSync.question(bgRed(que));
  let usersAnswer = userInput.toUpperCase();

  if (usersAnswer === ans) {

    console.log("\nYes, You got it Right! \n");
    score = score + 1;
    console.log(greenFont("Current Score " + score));
  } else {
    console.log("\nOops! , You are Wrong  \n");
    score = score - 1;
    console.log(greenFont("Current Score " + score));
  }
}

//Running The Game
function run() {
  for (i = 0; i < questions.length; i++) {
    curQue = questions[i];

    playGame(curQue.question, curQue.answer.toUpperCase());

    seprator();
  }
}

//Getting Started

if (readlineSync.keyInYN('Press y when you are ready to take the quiz. : \n')) {

  console.log(greenFont('Loading your Quiz... \n'));
  seprator();
  run();

} else {

  console.log(greenFont('\nSure, We can play other time (Refresh this page to reload the Quiz) \n'));

}



//HighScore

console.log(greenFont(bgRed("Your HighScore is " + score)));

seprator();


console.log(greenFont("Top Scorers"));
console.log(blueFont("\n Atishay : 3 \n Rahul : 2"));

seprator();