import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import game from '../index';

const description = 'What number is missing in the progression?';

const generateArray = (start, step) => {
  const startArr = [start];
  const iter = (arr, counter) => {
    if (arr.length > 9) {
      return arr;
    }
    const element = arr[arr.length - 1] + step;
    arr.push(element);
    const newCounter = counter + 1;
    return iter(arr, newCounter);
  };
  return iter(startArr, 1);
};

const makeInitialArray = () => {
  const start = getRandomNum(1, 50);
  const step = getRandomNum(-10, 20);
  const arr = generateArray(start, step);
  return arr;
};

const makePair = () => {
  const arr = makeInitialArray();
  const newArr = arr.slice();
  const randomIndex = getRandomNum(0, 11);
  const correctAnswer = String(newArr[randomIndex]);
  newArr[randomIndex] = '..';
  const question = newArr.join(' ');
  const pair = cons(question, correctAnswer);
  return pair;
};

const runGame = () => game(description, makePair);

export default runGame;
