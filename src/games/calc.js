import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import game from '..';

const description = 'What is the result of the expression?';

const makeRandomOperation = () => {
  const arrOfOperations = ['+', '-', '*'];
  const randomIndex = getRandomNum(0, arrOfOperations.length);
  return arrOfOperations[randomIndex];
};

const makePair = () => {
  const firstRandomNum = getRandomNum(1, 20);
  const secondRandomNum = getRandomNum(1, 10);
  let pair;
  const operation = makeRandomOperation();
  switch (operation) {
    case '+': {
      const question = `${firstRandomNum} + ${secondRandomNum}`;
      const correctAnswer = String(firstRandomNum + secondRandomNum);
      pair = cons(question, correctAnswer);
      break;
    }
    case '*': {
      const question = `${firstRandomNum} * ${secondRandomNum}`;
      const correctAnswer = String(firstRandomNum * secondRandomNum);
      pair = cons(question, correctAnswer);
      break;
    }
    default: {
      const question = `${firstRandomNum} - ${secondRandomNum}`;
      const correctAnswer = String(firstRandomNum - secondRandomNum);
      pair = cons(question, correctAnswer);
      break;
    }
  }
  return pair;
};
export default () => game(description, makePair);
