const input = document.querySelector("input");
input.setAttribute("type", "password");
input.setAttribute("id", "uPass");
input.setAttribute("value", "12345");
input.setAttribute("placeholder", "Enter your password");
input.setAttribute(
    "data-person",
    JSON.stringify({ pName: "saranya", pAge: 21})
);
input.addEventListener("focus", function() {
    const person = input.getAttribute("data-person");
    window.alert(person);
});