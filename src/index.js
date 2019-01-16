import readlineSync from 'readline-sync';

const hello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = number => number % 2 === 0;

const getCorrect = number => (isEven(number) ? 'yes' : 'no');

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const maxNumberOfRound = 3;
  for (let round = 1; round <= maxNumberOfRound; round += 1) {
    const question = getRandomNum(1, 50);
    console.log(`Question: ${question}`);
    const correctAnswer = getCorrect(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' was wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { evenGame };
export default hello;
