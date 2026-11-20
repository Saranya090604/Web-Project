// for loop
// for (let i = 0; i <= 10; i + 2) {
//   if (i == 7) {
//     console.log("7 is my lucky number");
//   } else {
//     console.log("Number" + i);
//   }
// }

// Array
// const names = ["Saranya", "Sanjana", "Venkat"];
// for (i = 0; i < names.length; i++) {
//   console.log([i]);
// }

// for of loop
// 1. loop over an array
// const names = ["Saranya", "Sanjana", "Venkat"];
// for (const first_name of names) {
//   console.log(first_name);
// }

// loop over a string
// const quote = "This is amazing";
// for (const first_name of quote) {
//   console.log(first_name);
// }

// const quote = ["This is amazing", [4, 5, "this is annoying"]];
// for (const first_name of quote) {
//   console.log(first_name);
// }

// for in loop
const colobj = {
  color1: "blue",
  color2: "red",
  color3: "pink",
  color4: "purple",
};
for (key in colobj) {
  console.log(colobj[key]);
}
