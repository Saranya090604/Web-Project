const div = document.getElementById("root");
const innerTextButton = document.getElementById("innerText");
const innerHTMLButton = document.getElementById("innerHTML");
innerTextButton.addEventListener("click", function () {
    div.innerText = "Hello World";
});
innerHTMLButton.addEventListener("click", function (){
    div.innerHTML = "<h1>Hello World</h1>";
});
//console.log ({
 //   div,
  //  innerTextButton,
   // innerHTMLButton,
//});