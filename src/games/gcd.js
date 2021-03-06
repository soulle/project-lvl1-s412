import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import game from '..';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  if (num1 > num2) {
    return gcd(num2, num1);
  }
  if (num2 % num1 === 0) {
    return num1;
  }
  return gcd(num2 % num1, num1);
};

const makePair = () => {
  const randomNum1 = getRandomNum(1, 100);
  const randomNum2 = getRandomNum(1, 100);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = String(gcd(randomNum1, randomNum2));
  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => game(description, makePair);
