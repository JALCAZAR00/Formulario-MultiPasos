//Elementos del header y footer
const stepNav = document.querySelector('.four-step-icon')
const btnBack = document.querySelector('.back');
const btnNext = document.querySelector('.next');

//Contenedores del main
const finish = document.querySelector('.finishing');
const thanks = document.querySelector('.thanks');

//Agregar estilos al numero en el que se encuentra.
stepNav.style.fontWeight = "600";
stepNav.style.backgroundColor = "var(--primary-third-color)";
stepNav.style.color = "var(--primary-color)"; 
stepNav.style.border = "1px solid var(--primary-third-color)";


//Evento del boton Next
btnNext.addEventListener("click", () => {
    finish.style.display = "none"
    thanks.style.display = "flex"
    btnNext.style.display = "none"
    btnBack.style.display = "none"
});

//Evento del boton Back
btnBack.addEventListener("click", () =>{
    window.location.href = "./pick-AddsOns.html"
});   