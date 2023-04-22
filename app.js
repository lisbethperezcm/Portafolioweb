const toggleButton = document.querySelector('.toggle');
const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');
const brand = document.querySelector('.brand');

const icon = document.querySelector('.fa-bars');
var contenedor = document.querySelector('#contenedor-load');
var hero = document.getElementById("hero-img");

const header = document.getElementById("header");

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });
  if (window.innerWidth > 800) {
  activateNavbar(current);}
});

function activateNavbar(current) {
  const links = document.querySelectorAll('.link-item');
  
  links.forEach((link) => {

    link.classList.remove('active');

    if (link.href === current) {
      link.classList.add('active');
    }
  });

}

 // EVENT LOANDING

if (hero.style.visibility == "false"){

if (hero.style.visibility== "false") {

}else{
    contenedor.style.display="none";
}

toggleButton.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);
 // EVENT CLOSE MENU
 /*
toggle.addEventListener("click",closeMenu);
menu.addEventListener("click", closeMenu);


*/


 // EVENT CHANGE NAVBAR BACKGROUND
document.addEventListener("scroll",() => {
  if (window.innerWidth > 800) {
backgroundNavbar();
  }

});
/*inputs.addEventListener("click", removePlace);*/

// EVENT ADD COLOR ACTIVE NAVBAR
/*
menu.addEventListener("click", activeNavbar);*/
//links.addEventListener("click",activeNavbar);
/*
links.addEventListener('click', function() {
    section1.scrollIntoView({ behavior: 'smooth' });
  });
*/

 // FUNCTION NAVBAR BACKGROUND
function backgroundNavbar(){
    if( window.scrollY < 100){
        navbar.style.backgroundColor="transparent";
    }else if( window.scrollY > 100){
        navbar.style.backgroundColor="#000000";
    }  
}

 // FUNCTION NAVBAR ACTIVE
 /*function activeNavbar(link){
    var links = document.querySelectorAll('.link-item');
   
    links.forEach(function(item) {
        if (item.id === link) {
          item.classList.add("active");
        }else{
            item.classList.remove("active");
        }
    });
    
    links.forEach(link => {
        link.addEventListener('click', e => {
          // Previene el comportamiento por defecto del enlace
          e.preventDefault();
      
          // Selecciona el elemento al que se hará scroll
          const target = document.querySelector(link.getAttribute('href'));
      
          // Hace scroll suave al elemento seleccionado
          target.scrollIntoView({
            behavior: 'smooth'
          });
        })});
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


        function toggleMenu() {
          if (menu.classList.contains('active')) {
            menu.classList.remove('active');
          
          } else {
            menu.classList.add('active');
            navbar.style.position="fixed";
            
          /*  brand.style.transform = 'translateX(-50%)';*/
          }
        }
        

 // FUNCTION CLOSE MENU
/*
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
*/

