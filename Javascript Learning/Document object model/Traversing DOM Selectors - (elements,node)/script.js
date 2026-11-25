// Locate the child elements from parent , Node name means Tag
// const parent = document.querySelector(".parent");
// const children = parent.children;
// console.log(children[1].innerText);
// console.log(children);

// console.log(children[1].nodeName);

// children[1].innerText = "Child one ";
// children[1].style.color = "blue";
// children[1].style.border = "2px solid black";

// locate a parent from children
const children = document.querySelectorAll(".child");
console.log(children[1].parentNode);
