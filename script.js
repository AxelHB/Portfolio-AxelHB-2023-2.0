function pageLoaded() {
    let loaderSection = document.querySelector('.loader-section');       loaderSection.classList.add('loaded');
  }
   
  document.onload = pageLoaded();

/*FUNCIÓN MENU NAVBAR*/
const menuHamburger = document.querySelector(".navbar-menu-hamburg")
const navLinks = document.querySelector(".navbar-links")

    menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
    })

/*FUNCIÓN DARKMODE*/
let modo=document.getElementById("modo");
let body=document.body;

modo.addEventListener("click", function(){
    let val=body.classList.toggle("dark")
    localStorage.setItem("modo",val)
})

let valor=localStorage.getItem("modo")

if (valor=="true") {
    body.classList.add("dark")
} else {
    body.classList.remove("dark")
}