const convertToCelsius = function(temp) {
  let trueTemp = (temp - 32) * 5/9;
  if (temp === 32) {
    return 0;
  } else {
  return +trueTemp.toFixed(1);
  }
};

const convertToFahrenheit = function(temp) {
  let trueTemp = (temp * 9/5) + 32;
  if (temp === 0) {
    return 32;
  } else {
  return +trueTemp.toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
