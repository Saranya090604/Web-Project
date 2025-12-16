const root = window.document.getElementById("root");
const h1Collection = ["Hello 1", "Hello 2", "Hello 3", "Hello 4"];
const h1_result = h1Collection.map(h1 => {
    let newH1Element = window.document.createElement("h1");
    newH1Element.innerText = h1;
    return newH1Element;
});
root.append(...h1_result);
console.log(h1_result);
//const h1 = window.document.createElement("h1");
//h1.innerText = "Hello World";
//root.appendChild(h1);
//console.log(document);
//console.log({ root, h1});