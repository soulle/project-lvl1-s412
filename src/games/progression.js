import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import game from '..';

const description = 'What number is missing in the progression?';
const maxLengthOfArray = 10;
const maxIndex = maxLengthOfArray - 1;

const generateArray = (start, step) => {
  const startArr = [start];
  const iter = (acc, counter) => {
    if (acc.length >= maxLengthOfArray) {
      return acc;
    }
    const element = acc[acc.length - 1] + step;
    const newAcc = [...acc, element];
    const newCounter = counter + 1;
    return iter(newAcc, newCounter);
  };
  return iter(startArr, 1);
};

const makeInitialArray = () => {
  const start = getRandomNum(1, 50);
  const step = getRandomNum(-10, 10);
  const arr = generateArray(start, step);
  return arr;
};

const makePair = () => {
  const arr = makeInitialArray();
  const newArr = arr.slice();
  const hiddenElementIndex = getRandomNum(0, maxIndex);
  const correctAnswer = String(newArr[hiddenElementIndex]);
  newArr[hiddenElementIndex] = '..';
  const question = newArr.join(' ');
  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => game(description, makePair);
