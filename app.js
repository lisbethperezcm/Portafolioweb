const toggleButton = document.querySelector('.toggle');
const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');
const brand = document.querySelector('.brand');
const icon = document.querySelector('.fa-bars');
var loading = document.getElementById('loading-container');
const sections = document.querySelectorAll('section');



//EVENTS

//EVENTS OPEN AND CLOSE THE MENU
toggleButton.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);

//EVENT ACTIVE NAVBAR BY SCROLL
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });
 if (window.innerWidth > 800){
  activateNavbar(current);}
});


 // EVENT LOANDING

 // Mostrar efecto de carga
document.body.style.overflow = 'hidden'; // Evitar scroll

// Ocultar efecto de carga cuando se carguen todos los elementos
window.addEventListener('load', function() {
  setTimeout(function() {
    loading.style.display = 'none';
    document.body.style.overflow = 'auto'; // Activar scroll
  }, 1000);
});

 // EVENT CHANGE NAVBAR BACKGROUND
document.addEventListener("scroll",() => {
  if (window.innerWidth > 800) {
backgroundNavbar();
  }

});

// FUNCTION ADD COLOR ACTIVE NAVBAR
function activateNavbar(current) {
  const links = document.querySelectorAll('.link-item');
  links.forEach((link) => {
    link.classList.remove('active');
    if (link.href.endsWith(current)) {
      link.classList.add('active');
    }
  });
}
 // FUNCTION NAVBAR BACKGROUND
function backgroundNavbar(){
    if( window.scrollY < 100){
        navbar.style.backgroundColor="transparent";
    }else if( window.scrollY > 100){
        navbar.style.backgroundColor="#000000";
    }  
}

 
 // FUNCTION CLOSE/OPEN MENU
        function toggleMenu() {
          if (menu.classList.contains('toggle-active')) {
            menu.classList.remove('toggle-active');
            icon.classList.replace('fa-x','fa-bars');
          } else {
            menu.classList.add('toggle-active');
            navbar.style.position="fixed";
            icon.classList.replace('fa-bars','fa-x');
          /*  brand.style.transform = 'translateX(-50%)';*/
          }
        }
        


