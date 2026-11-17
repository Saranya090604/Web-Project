const x = 100;
// Block scope
// if (true) {
//   console.log(x);
//   const y = 200;
//   console.log(x + y);
// }
// this will give an error
// console.log(y);

// loops --> only use let and var
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// if (true) {
//   const a = 100;
//   let b = 200;
//   var c = 300;
// }
// console.log(c);

function run() {
  const a = 100;
  console.log(a);
}
run();
console.log(a);

var num = 1;
