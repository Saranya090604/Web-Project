const result = cartoon.reduce(function (obj, cartoon) {
    if (!obj[cartoon]) {
        obj[cartoon] = 1;
    } else {
        obj[cartoon]++;
    }
    return obj;

}, {});
console.log(result);

// const numbers = [1, 2, 3, 4, 5];
// const even = numbers.filter((item) => item % 2 === 0);
// console.log(even);

// const students = [
   // { name: "saranya", age: 21},
    //{ name: "sanju", age: 13},
    //{ name: "venkat", age: 22},
    //{ name: "shanthi", age: 43},
    //{ name: "sankar", age: 48},
//];
// const filteredstudents = students.filter((stud) => {
    //return stud.age <= 18;
//});
// console.log(filteredstudents);