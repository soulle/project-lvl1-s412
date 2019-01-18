import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import game from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let divisor = 2; divisor <= num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};
const getCorrect = number => (isPrime(number) ? 'yes' : 'no');

const makePair = () => {
  const question = getRandomNum(1, 50);
  const correctAnswer = getCorrect(question);
  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => game(description, makePair);
