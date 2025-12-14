const body = document.querySelector("body");

const h1 = document.createElement("h1");
//h1.innerText = 'How to use createElement API';
//body.appendChild(h1);


function createInput(inputType, inputId, inputplaceholder ) {
    const input = window.document.createElement('input');
    input.setAttribute("type", inputType);
    input.setAttribute("id", inputId);
    input.setAttribute("Name", inputId);
    input.setAttribute("placeholder", inputplaceholder);
    return input;
}
body.appendChild(createInput("text", "username", "Enter your username"));
body.appendChild(createInput("text", "Password", "Enter your Password"));
console.log(window.document);