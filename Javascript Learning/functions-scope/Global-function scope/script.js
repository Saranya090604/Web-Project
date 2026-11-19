// alert("Hello Saranya");

// console.log(innerWidth);

// Global scope
// Global variable
// const x = 100;
// Global variable can be accesssed anywhere within the console
// Can be accessed inside a function block
// can be accesses inside block
// function run() {
//   console.log(x, "is a global variable");
//   console.log(innerWidth);
//   console.log(innerHeight);
// }
// console.log(x);
// run();
//  If Block of code
// if (true) {
//   console.log(x, "is a global variable");
// }

// Function scope variable
function add() {
  const x = 10;
  const y = 9;
  var c = 25;
  let d = 35;
  console.log(x + y);
}
console.log(d);
add();
