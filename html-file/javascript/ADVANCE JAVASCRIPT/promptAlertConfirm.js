const fetchElement = id => document.getElementById(id);
const alertButton = fetchElement("alert");
const promptButton = fetchElement("prompt");
const confirmButton = fetchElement("confirm");
const divRoot = fetchElement("root");

alertButton.addEventListener("Click", function () {
    window.alert("Hello World");
});
promptButton.addEventListener("Click", function () {
    const result = window.prompt("Do u want to logout ?");
    divRoot.innerText = "prompt Result is " + result;
});
confirmButton.addEventListener("Click", function () {
    const result = window.confirm("Do u want to logout ?");
    divRoot.innerText = "confirm Result is " + result;
});