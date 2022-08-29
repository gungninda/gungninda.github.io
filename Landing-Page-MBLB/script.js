AOS.init();

//navbar
const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function() {
  if(this.window.scrollY > 1) {
    navbar.classList.replace('trn', 'nav-color')
  }

  if(this.window.scrollY < 100) {
    navbar.classList.replace('nav-color', 'trn')
  }
  
})

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
       
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
       
        document.body.style.paddingTop = '0';
      } 
  });
}); 

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
  }
})









//Partner slider
jQuery("#partner-carousel").owlCarousel({
    loop:true,
    autoplay: true,
    margin: 40,
    items: 3,
    dots: false,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    dots: false,
    
  });

  //dropdown seller

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});



