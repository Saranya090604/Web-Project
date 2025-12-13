const fruits = ["Mango", "Kiwi", "watermelon", "Orange"];
const firstName = new String("saranya");
const myDate = new Date();

logger(myDate);
logger(firstName);
logger(fruits);

function logger(element) {
    console.log(element);
    console.log(element instanceof Object);
    console.log(element instanceof Array);
    console.log(element instanceof String);
    console.log(element instanceof Number);
    console.log(element instanceof Boolean);
    console.log(element instanceof Date);
    console.log("/////////!");
}
