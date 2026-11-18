// Type1
// define or declared a function
// function sayHello() {
//   console.log("hello this is awesome");
// }
// calling or executing or invoke
// sayHello();

// Type2
// function add(num1, num2) {
//   console.log(num1 + num2);
// }
// invoking a function
// add(10, 9);

// Type3
// function sub(num1, num2) {
//   return (num1 - num2, num1 + num2);
//   console.log("after return");
// }
// const result = sub(25, 10);
// console.log(result);

// function registerUser(user = "stringstackbot") {
//   return user + "is registered";
// }
// console.log(registerUser("saran"));

//object as params
const user = {
  id: 1,
  name: Saranya,
};
function loginUser(user) {
  return `the user ${user.name} with the id of ${user.id} is logged in`;
}
const result = loginUser(user);
console.log(result);
