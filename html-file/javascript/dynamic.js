const div = document.querySelector("div");
const input = document.createElement("input");
input.value = "Angular Course";
input.type = "text";
input.placeholder = "Enter some content";
input.id = "course_field";
const h1 = document.createElement("h1");
h1.innerText = "Dynamic conent in HTML";
const button = document.createElement("button");
button.textcontent = "Click Me";
div.appendChild(h1);
div.appendChild(input);
div.appendChild(button);
button.addEventListener("click", function () {
    window.alert("Hey, This is a button");
});