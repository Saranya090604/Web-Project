// create an object
let x;
const person = {
  name: "saranya",
  age: 23,
  ismarried: false,
  addrress: {
    street: "BTM 2nd stage",
    city: "Bangalore",
    state: "karnataka",
  },
  hobbies: ["eating", "sleeping", "reading"],
};

// accessing an object
// x = person.name;
// console.log(x);
// x = person.addrress.city;
// x = person.hobbies[0];

// updating properties
// x = person.name = "Saran";

// Deleting a property
// x = delete person.age;
// console.log(person);

// Functions
// defining a method
person.letmeGreet = function () {
  console.log(`Hello , my name is ${this.name}`);
};
// calling a method
console.log(person.letmeGreet());
