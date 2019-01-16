import readlineSync from 'readline-sync';

const hello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getCorrect = number => ((number % 2 === 0) ? 'yes' : 'no');

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let round = 1;
  while (round <= 3) {
    const num = getRandomNum(1, 50);
    console.log(`Question: ${num}`);
    const correctAnswer = getCorrect(num);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      if (round === 3) {
        console.log(`Congratulations, ${name}!`);
      }
      round += 1;
    } else {
      console.log(`'${answer}' was wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
  }
};

export { evenGame };
export default hello;
