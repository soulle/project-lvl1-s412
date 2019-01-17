import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const hello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const description = (nameOfTheGame) => {
  switch (nameOfTheGame) {
    case 'brain-even':
      console.log('Answer "yes" if number even otherwise answer "no"');
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
      break;
    // no default
  }
};

const start = (nameOfTheGame) => {
  console.log('Welcome to the Brain Games!');
  description(nameOfTheGame);
};

const greeting = name => `Hello, ${name}`;

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = number => number % 2 === 0;

const getCorrect = number => (isEven(number) ? 'yes' : 'no');

const maxNumberOfRound = 3;

const toString = answer => (((typeof answer) === 'string') ? answer : String(answer));

const makeQuestionAndCorrectAnswer = (nameOfTheGame) => {
  if (nameOfTheGame === 'brain-even') {
    const question = getRandomNum(1, 50);
    const correctAnswer = getCorrect(question);
    return cons(question, correctAnswer);
  }
  if (nameOfTheGame === 'brain-calc') {
    const pairOfNumbers = cons(getRandomNum(1, 20), getRandomNum(1, 10));
    const getFirstArg = car(pairOfNumbers);
    const getSecondArg = cdr(pairOfNumbers);
    const strOfOperations = '+-*';
    const lengthOfStr = strOfOperations.length;
    const randomIndex = getRandomNum(0, lengthOfStr);
    const operation = strOfOperations[randomIndex];
    switch (operation) {
      case '+': {
        const question = `${getFirstArg} + ${getSecondArg}`;
        const correctAnswer = getFirstArg + getSecondArg;
        return cons(question, correctAnswer);
      }
      case '-': {
        const question = `${getFirstArg} - ${getSecondArg}`;
        const correctAnswer = getFirstArg - getSecondArg;
        return cons(question, correctAnswer);
      }
      case '*': {
        const question = `${getFirstArg} * ${getSecondArg}`;
        const correctAnswer = getFirstArg * getSecondArg;
        return cons(question, correctAnswer);
      }
      // no default
    }
  }
};

const game = (nameOfTheGame) => {
  start(nameOfTheGame);
  const name = readlineSync.question('May I have your name? ');
  console.log(greeting(name));
  for (let round = 1; round <= maxNumberOfRound; round += 1) {
    const pair = makeQuestionAndCorrectAnswer(nameOfTheGame);
    const question = car(pair);
    console.log(`Question: ${question}`);
    const correctAnswer = cdr(pair);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswerToString = toString(correctAnswer);
    if (answer === correctAnswerToString) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' was wrong answer ;(. Correct answer was '${correctAnswerToString}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const evenGame = () => game('brain-even');

const calc = () => game('brain-calc');

export { evenGame, calc };
export default hello;
