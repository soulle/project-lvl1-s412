import { cons } from 'hexlet-pairs';
import { getRandomNum, toString } from '../index';

const description = 'What is the result of the expression?';

const makePair = () => {
  const arrOfOperations = ['+', '-', '*'];
  const randomIndex = getRandomNum(0, arrOfOperations.length);
  const operation = arrOfOperations[randomIndex];
  const firstRandomNum = getRandomNum(1, 20);
  const secondRandomNum = getRandomNum(1, 10);
  let pair;
  switch (operation) {
    case '+': {
      pair = cons(`${firstRandomNum} + ${secondRandomNum}`, toString(firstRandomNum + secondRandomNum));
      break;
    }
    case '-': {
      pair = cons(`${firstRandomNum} - ${secondRandomNum}`, toString(firstRandomNum - secondRandomNum));
      break;
    }
    case '*': {
      pair = cons(`${firstRandomNum} * ${secondRandomNum}`, toString(firstRandomNum * secondRandomNum));
      break;
    }
    // no default
  }
  return pair;
};

export {
  description,
  makePair,
};
