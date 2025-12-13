const fruits = ["Mango", "Apple", "Banana", "Orange"];

const ages = [
  { emp: "venkat", age: 22 },
  { emp: "saranya", age: 21 }
];

const age_map = ages.map(ea => {
  return ea.emp + "'s age is: " + ea.age;
});

console.log(age_map);
