const ftoc = function(temp) {
  const celsius = (temp - 32) * 5/9; //calculates celsius
  return Math.round(celsius * 10) / 10; //rounds to 1 decimal
};

const ctof = function(temp) {
  const fahrenheit = temp * 9/5 + 32; //calculates fahrenheit
  return Math.round(fahrenheit * 10) / 10; //rounds to 1 decimal
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
