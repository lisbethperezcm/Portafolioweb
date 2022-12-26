const menu = document.querySelector('.menu');
const toggle = document.querySelector('.toggle');
const icon = document.querySelector('.fa-bars');

const header = document.getElementById("header");



 // EVENT CLOSE MENU
toggle.addEventListener("click",closeMenu);
menu.addEventListener("click", closeMenu);





 // EVENT CHANGE NAVBAR BACKGROUND
document.addEventListener("scroll",backgroundNavbar);
/*inputs.addEventListener("click", removePlace);*/

// EVENT ADD COLOR ACTIVE NAVBAR
/*
menu.addEventListener("click", activeNavbar);*/
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
 function activeNavbar(link){
    var links = document.querySelectorAll('.link-item');
    links.forEach(function(item) {
        if (item.id === link) {
          item.classList.add("active");
        }else{
            item.classList.remove("active");
        }
    })
    
 
    }
  
 /*
    var links =document.querySelectorAll('.link-item')
    for(var i=0;i<test.length;i++)
    {
       if(links[i].id==link){
        links[i].classList.add("active");
       }else{
        links[i].classList.remove("active");
       }
        }; 
  */

 // FUNCTION CLOSE MENU
function closeMenu(){
   
        if (window.innerWidth <= 800) {
         
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

}


