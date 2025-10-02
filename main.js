const btn =document.getElementById("clickme");
btn.addEventListener("click" , function(){
    let name = prompt("Enter name: ");
    document.getElementById("greeting") .innerText = "Hello, " + name;
});