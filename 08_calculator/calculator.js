const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (num1, num2) {
  if (num1) {
    if (Array.isArray(num1)) {
      if (num1.length === 0) {
        return 0;
      }
      return num1.reduce((a, b) => a + b);
    }
    return +num1;
  }
  let sumNum = 0;
  for (let i = num1; i <= num2; i++) {
    sumNum += i;
  }
  return sumNum;
};

const multiply = function (nums) {
  let result = 1;
  for(let num of nums) {
    result *= num;
  }
  return result;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num1) {
  let sum = 1;
  if (num1 > 1) {
    for (let i = 1; i <= num1; i++) {
      sum *= i;
    } 
    return sum;
     } else if (num1 === 1 || num1 === 0) {
      return 1;
     } else {
      return 'undefined';
     }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
