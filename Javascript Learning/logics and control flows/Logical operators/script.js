// && -> logical and
//must be true
// console.log(10 > 30 && 30 > 15 && 40 > 30);
// one has to be true
// console.log(10 > 20 || 30 < 15);

// && operating between two numeric values
// it will return the first falsy value or the last value
// console.log(10 && 20);
// console.log(10 && 20 && 30);
// console.log(10 && 0 && 30);
// console.log(10 && " " && 30);

// || -> logical or -> will return first truthy value or the last value
console.log(10 || 20);
console.log(0 || 20);
console.log(0 || undefined);
console.log(0 || undefined || 10);
