//const person = {
 //   firstName: 'saranya'
//}
//console.log(person);

function person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
}
const p1 = new person("saranya", "venkat");
const p2 = new person("saranya", "pattu");
console.log(p1);
console.log(p2);
console.log(p2.fullName());