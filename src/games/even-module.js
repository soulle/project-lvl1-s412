import { cons } from 'hexlet-pairs';
import { getRandomNum } from '../index';

const description = 'Answer "yes" if number even otherwise answer "no"';

const isEven = number => number % 2 === 0;
const getCorrect = number => (isEven(number) ? 'yes' : 'no');

const makePair = () => {
  const randomNum = getRandomNum(1, 50);
  const pair = cons(randomNum, getCorrect(randomNum));
  return pair;
};

export {
  description,
  makePair,
};
