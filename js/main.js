let menu = document.getElementById("menu");
let btn = document.getElementById("btn");
let drop = document.getElementById("drop");
let list = document.getElementById("list");

let input = document.getElementById("input");


btn.addEventListener("click",  dropdown); 

setInterval(check, 500);


input.addEventListener("keyup", test);





function test(){
    var inputValue = input.value;

    if(inputValue == "easteregg"){
        alert("Easter Egg!");
    }
    else{
        console.log(inputValue);
    }

 

}



function dropdown(){
   if(drop.style.display == "none"){

       drop.style.display = "flex";
   }
   else{
       drop.style.display = "none";
   }
}



function check(){
    var windowWidth = window.innerWidth;

    if (windowWidth < 1280) {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "flex";
    }
}


