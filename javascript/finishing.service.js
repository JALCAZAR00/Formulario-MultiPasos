//Elementos del header y footer
const stepNav = document.querySelector('.four-step-icon')
const btnBack = document.querySelector('.back');
const btnNext = document.querySelector('.next');
const btnInit = document.querySelector('.btnInit');

//Contenedores del main
const finish = document.querySelector('.finishing');
const thanks = document.querySelector('.thanks');
const pricePlan = document.querySelector('.price-plan');
const titlePlan = document.querySelector('.plan_select');

//Agregar estilos al numero en el que se encuentra.
stepNav.style.fontWeight = "600";
stepNav.style.backgroundColor = "var(--primary-third-color)";
stepNav.style.color = "var(--primary-color)"; 
stepNav.style.border = "1px solid var(--primary-third-color)";

//Exportar plan al DOM
let selectedPlan = JSON.parse(localStorage.getItem('selectedPlanData'));

function getPlanData(){
    titlePlan.textContent = `${selectedPlan.title} (${selectedPlan.plan})`;
    pricePlan.textContent = `$${selectedPlan.price}`;
}
getPlanData();

//Exportar servicios al DOM
let selectedServices = JSON.parse(localStorage.getItem('selectedServiceData'));

function createService(){
    const infoAddsContainer = document.querySelector('.info-adds');

    // Obtener los servicios seleccionados del local storage
    const selectedServices = JSON.parse(localStorage.getItem('selectedServiceData'));

    //Inicializar total a cero
    let total = 0;

    for (let i = 0; i < selectedServices.length; i++) {
        const selectedService = selectedServices[i];

        //Crear servicio en el DOM
        const container = document.createElement('div');
        container.classList.add('add');

        const serviceTitle = document.createElement('p');
        serviceTitle.textContent = selectedService.name;

        const servicePriceElement = document.createElement('span');
        servicePriceElement.textContent = `$${selectedService.price}`;

        container.appendChild(serviceTitle);
        container.appendChild(servicePriceElement);

        infoAddsContainer.appendChild(container);

        // Ocultar el contenedor 'add' si no hay datos en el localstorage
        if (!selectedService) {
            container.style.display = 'none';
        }

        //Sumar precio del servicio al total
        total += selectedService.price;
    }

    //Mostrar total en el DOM
    const totalPrice = document.querySelector('.precio-total');
    totalPrice.textContent = `(${selectedPlan.plan}) $${total + selectedPlan.price}`;

}
createService();

//Evento del boton Next
btnNext.addEventListener("click", () => {
    finish.style.display = "none"
    thanks.style.display = "flex"
    btnNext.style.display = "none"
    btnBack.style.display = "none"
    btnInit.style.display = "block"
});

//Evento del boton Back
btnBack.addEventListener("click", () =>{
    window.location.href = "./pick-AddsOns.html"
});

//Evento del boton Home
btnInit.addEventListener("click", () => {
    window.location.href = "./index.html"
});