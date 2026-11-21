// document.getElementById
// console.log(document.getElementById("item-form"));
// console.log(document.getElementById("app-title"));
// console.log(document.getElementsByClassName("form-control"));

// Set Attributes
// document.getElementById("app-title").title = "shopping List";
// document.getElementById("app-title").setAttribute("class", "title");
// const title = document.getElementById("app-title");
// console.log(title);

// get or change the content
// console.log(title.textContent);
// title.textContent = "Hello This is amazing";
// title.innerHTML = "<strong>Hello This <emp>i</emp>s amazing</strong>";

// document.getElementById("form-control").title = "Enter Number";

// changing styles
// title.style.color = "orange";
// title.style.background = "pink";
// title.style.borderRadius = "5px";

const addButton = document.getElementsByClassName("btn")[0];
addButton.style.backgroundColor = "orange";
addButton.style.color = "white";
addButton.style.border = "none";
