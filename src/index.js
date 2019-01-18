import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const hello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const maxNumberOfRound = 3;

const game = (description, makePair) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  for (let round = 1; round <= maxNumberOfRound; round += 1) {
    const pair = makePair();
    const question = car(pair);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(pair);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' was wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
export { hello };
