const div = window.document.querySelector("div");
const btn = window.document.querySelector("button");

btn.addEventListener("click", function () {
    div.innerHTML += '<h1>Dom Method ${Math.random()}</h1>';
});