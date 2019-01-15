import readlineSync from 'readline-sync';

const hello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getCorrectAnswer = (number) => {
  if (number % 2 === true) {
    return 'yes';
  }
  return 'no';
};

const game = (counter, name) => {
  const num = getRandomNum(1, 50);
  console.log(`Question: ${num}`);
  const correctAnswer = getCorrectAnswer(num);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    if (counter === 3) {
      console.log(`Congratulations, ${name}`);
    }
  } else {
    console.log(`${answer} was wrong answer ;(. Correct answer was ${correctAnswer}`);
  }
  return game(counter + 1);
};

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return game(0, name);
};

export { evenGame };
export default hello;
