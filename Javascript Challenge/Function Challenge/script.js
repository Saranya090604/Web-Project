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
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return {
    min,
    max,
  };
};
console.log(minMax([1, 2, 3, 4, 5]));
