const convertToCelsius = function(fahrenheitValue) {
  /*
  INIT celsius value to 0
  CALCULATE celsius using given fahrenheit value
  RETURN celsius value
  */

  let celsiusValue = 0;
  celsiusValue = ((fahrenheitValue - 32) * 5) / 9;

  // Rounds to 1 decimal place
  celsiusValue = Math.round(celsiusValue * 10) / 10;

  return celsiusValue;
};

const convertToFahrenheit = function(celsiusValue) {
  /*
  INIT fahrenheit value to 0
  CALCULATE fahrenheit using given celsius value
  RETURN fahrenheit value
  */

  let fahrenheitValue = 0;
  // fahrenheitValue = ((celsiusValue - 32) * 5) / 9;
  fahrenheitValue = ((celsiusValue * 9) / 5) + 32;

  // Rounds to 1 decimal place
  fahrenheitValue = Math.round(fahrenheitValue * 10) / 10;

  return fahrenheitValue;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
