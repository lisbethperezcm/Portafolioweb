const menu = document.querySelector('.menu');
const toggle = document.querySelector('.toggle');
const icon = document.querySelector('.fa-bars');
const links = document.querySelector("a.link-item");
const header = document.getElementById("header");
const inputs =document.querySelector('input');


 // EVENT CLOSE MENU
toggle.addEventListener("click",closeMenu);
menu.addEventListener("click", closeMenu);

 // EVENT CHANGE NAVBAR BACKGROUND
document.addEventListener("scroll",backgroundNavbar);
inputs.addEventListener("click", removePlace);

// EVENT ADD COLOR ACTIVE NAVBAR
menu.addEventListener("click", activeNavbar);
links.addEventListener("click",activeNavbar);



 // FUNCTION NAVBAR BACKGROUND
function backgroundNavbar(){
    if( window.scrollY < 100){
        header.style.backgroundColor="transparent";
    }else if( window.scrollY > 100){
        header.style.backgroundColor="#000000";
    }  
}

 // FUNCTION NAVBAR ACTIVE
function activeNavbar(){
links.classList.add("active");
}

 // FUNCTION CLOSE MENU
function closeMenu(){
    if(menu.style.display =="block"){ 
        menu.style.display ="none";
        // REPLACE ICON
        icon.classList.replace('fa-x','fa-bars');
    
    }else{
       
        menu.style.display ="block";
       // REPLACE ICON
        icon.classList.replace('fa-bars','fa-x');
    }
    }

 function removePlace(){
    inputs.val('');

 }   



