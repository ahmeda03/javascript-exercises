const add = function(operand1, operand2) {
  return operand1 + operand2;
};

const subtract = function(operand1, operand2) {
	return operand1 - operand2;
};

const sum = function(nums) {
	return nums.reduce((total, curr) => total + curr, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, currNum) => total * currNum, 1);
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function(number) {
	let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
