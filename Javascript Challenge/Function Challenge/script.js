// Challenge 1
// const getCelsius = (f) => {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;
// };
// const result = getCelsius(32);
// console.log(result);
// console.log(`The temperature is ${result} \xB0C`);

// Challenge 2
const minMax = (numbers) => {
  const min = Math.min(1);
  const max = Math.max(5);
  return {
    min: min,
    max: max,
  };
};
console.log(minMax([1, 2, 3, 4, 5]));
