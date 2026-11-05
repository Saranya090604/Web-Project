const foods = ["Chapathi", "Dose", "Puri"];
const junk_foods = ["Pizza", "burger", "Donuts"];
// nesting arrays
foods.push(junk_foods);
// x = foods[3][1].toUpperCase();

// create a new variable and nested an array
// Bad_foods = [foods, junk_foods];
// x = foods[2].toLowerCase();

// Concatination of arrays
// y = foods.concat(junk_foods);

// Spread Operator
// z = [...foods, ...junk_foods];

// Flattening
const arr = [1, 2, [3, 4], (5)[(6)[(7, (8)[(9, 10)])]]];
z = arr.flat();
console.log(z);
