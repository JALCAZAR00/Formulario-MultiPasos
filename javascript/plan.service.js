//Elementos del header y footer
const stepNav = document.querySelector('.second-step-icon')
const btnBack = document.querySelector('.back');
const btnNext = document.querySelector('.next');
const modal = document.querySelector('.modal');

//Contenedor de plan
const arcadeContainer = document.querySelector('.arcade');
const advancedContainer = document.querySelector('.advanced');
const proContainer = document.querySelector('.pro');

//Elementos articles de la sección Select your plan
const priceArcade = document.querySelector('.price-arcade');
const priceAdvanced = document.querySelector('.price-advanced');
const pricePro = document.querySelector('.price-pro');

//Elementos span de la sección de articles
const infoMonthsArcade = document.querySelector('.plan-span-arcade');
const infoMonthsAdvanced = document.querySelector('.plan-span-advanced');
const infoMonthsPro = document.querySelector('.plan-span-pro');

//Arreglo para seleccion de plan
const selectPlans = ['arcade', 'advanced', 'pro'];

const planMonth = [
    {
        plan: 'Monthly',
        title: 'Arcade',
        price: 9
    },
    {
        plan: 'Monthly',
        title: 'Advanced',
        price: 12
    },
    {
        plan: 'Monthly',
        title: 'Pro',
        price: 15
    }
]
const planYear = [
    {
        plan: 'Yearly',
        title: 'Arcade',
        price: 90
    },
    {
        plan: 'Yearly',
        title: 'Advanced',
        price: 120
    },
    {
        plan: 'Yearly',
        title: 'Pro',
        price: 150
    }
]

//Elemento del DOM boton switch
const btnSwitch = document.querySelector('.switch-button');

//Variable para modificar el DOM según el estado del boton switch
let yearlyPricesVisible = false;

//Agregar estilos al numero en el que se encuentra.
stepNav.style.fontWeight = "600";
stepNav.style.backgroundColor = "var(--primary-third-color)";
stepNav.style.color = "var(--primary-color)"; 
stepNav.style.border = "1px solid var(--primary-third-color)";

//Evento para seleccionar un plan
arcadeContainer.addEventListener("click", function() {
    getPlan('arcade');
    postPlan('arcade');
});
advancedContainer.addEventListener("click", function() {
    getPlan('advanced');
    postPlan('advanced');
});
proContainer.addEventListener("click", function() {
    getPlan('pro');
    postPlan('pro');
});

let planActivate = false;

function getPlan(selectedPlan) {
    switch (selectedPlan) {
        case 'arcade':
            resetStyles();
            arcadeContainer.style.border = "1px solid var(--primary-one-color)";
            arcadeContainer.style.backgroundColor = "var(--primary-four-color)";
            planActivate = true;
            break;
        case 'advanced':
            resetStyles();
            advancedContainer.style.border = "1px solid var(--primary-one-color)";
            advancedContainer.style.backgroundColor = "var(--primary-four-color)";
            planActivate = true;
            break;
        case 'pro':
            resetStyles()
            proContainer.style.border = "1px solid var(--primary-one-color)";
            proContainer.style.backgroundColor = "var(--primary-four-color)";
            planActivate = true;
            break;
        default:
            planActivate = false;
    }
}

function resetStyles() {
    arcadeContainer.style.border = "1px solid var(--neutral-second-color)";
    arcadeContainer.style.backgroundColor = "transparent";
    advancedContainer.style.border = "1px solid var(--neutral-second-color)";
    advancedContainer.style.backgroundColor = "transparent";
    proContainer.style.border = "1px solid var(--neutral-second-color)";
    proContainer.style.backgroundColor = "transparent";
}

//Exportar información del plan seleccionado
let activatePlanYearly = false;

function postPlan(plan){
    let selectedPlan;
    switch (plan) {
        case 'arcade':
            selectedPlan = activatePlanYearly ? planYear[0] : planMonth[0];
            break;
        case 'advanced':
            selectedPlan = activatePlanYearly ? planYear[1] : planMonth[1];
            break;
        case 'pro':
            selectedPlan = activatePlanYearly ? planYear[2] : planMonth[2];
            break;
        default:
            break;
    }
    localStorage.setItem('selectedPlanData', JSON.stringify(selectedPlan,));
    localStorage.setItem('activatePlanYearly', JSON.stringify(activatePlanYearly));
}

//let activatePlanYearly = JSON.parse(localStorage.getItem('activatePlanYearly'));
//Eventos del Boton Switch 
btnSwitch.addEventListener("mousedown", () =>{
    if (yearlyPricesVisible === false) {
        priceArcade.textContent = "$90/yr";
        priceAdvanced.textContent = "$120/yr";
        pricePro.textContent = "$150/yr";
        infoMonthsArcade.style.display = "block";
        infoMonthsAdvanced.style.display = "block";
        infoMonthsPro.style.display = "block";
        activatePlanYearly = true;
        resetStyles();
    } else{
        priceArcade.textContent = "$9/mo";
        priceAdvanced.textContent = "$12/mo";
        pricePro.textContent = "$15/mo";
        infoMonthsArcade.style.display = "none";
        infoMonthsAdvanced.style.display = "none";
        infoMonthsPro.style.display = "none";
        activatePlanYearly = false;
        resetStyles();
    }
    yearlyPricesVisible = !yearlyPricesVisible;
});

//Evento del boton Next
btnNext.addEventListener("click", () => {
    if(planActivate === false){
        modal.style.display = "flex";
        setTimeout(function() {
            // Cerrar alerta
            modal.style.display = 'none';
        }, 1500);
    } else {
       window.location.href = "./pick-AddsOns.html" 
    }
});

//Evento del boton Back
btnBack.addEventListener("click", () =>{
    window.location.href = "./index.html";
});    
