import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import game from '..';

const description = 'Answer "yes" if number even otherwise answer "no"';

const isEven = number => number % 2 === 0;
const getCorrect = number => (isEven(number) ? 'yes' : 'no');

const makePair = () => {
  const question = getRandomNum(1, 50);
  const correctAnswer = getCorrect(question);
  const pair = cons(question, correctAnswer);
  return pair;
};

const runGame = () => game(description, makePair);

export default runGame;
