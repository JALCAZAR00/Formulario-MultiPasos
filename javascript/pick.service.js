//Elementos del header y footer
const stepNav = document.querySelector('.third-step-icon')
const btnBack = document.querySelector('.back');
const btnNext = document.querySelector('.next');

//Contenedor de adicionales
const onlineContainer = document.querySelector('.online-service');
const storageContainer = document.querySelector('.larger-storage');
const customizableContainer = document.querySelector('.cutomizable-profile');

//Input checkbox de adicionales
const online = document.getElementById('online');
const storage = document.getElementById('storage');
const customizable = document.getElementById('customizable');

//Precio de adicionales
const onlinePrice = document.querySelector('.price-add-online');
const storagePrice =  document.querySelector('.price-add-storage');
const customizablePrice =  document.querySelector('.price-add-custom');

//Arreglo para seleccion de plan
const selectPlans = ['online', 'storage', 'customizable'];

//Arreglo para exportar los datos seleccionados
const serviceMonth = [
    {
        name: 'Online',
        price: 1
    },
    {
        name: 'Larger storage',
        price: 2
    },
    {
        name: 'Customizable profile',
        price: 3
    }
]
const serviceYear = [
    {
        name: 'Online',
        price: 10
    },
    {
        name: 'Larger storage',
        price: 20
    },
    {
        name: 'Customizable profile',
        price: 30
    }
]

//Agregar estilos al numero en el que se encuentra.
stepNav.style.fontWeight = "600";
stepNav.style.backgroundColor = "var(--primary-third-color)";
stepNav.style.color = "var(--primary-color)"; 
stepNav.style.border = "1px solid var(--primary-third-color)";

//Funcion para detectar el tipo de plan seleccionado en la pagina anterior
let activatePlanYearly = JSON.parse(localStorage.getItem('activatePlanYearly'));
function getTypePlan(){
    if(activatePlanYearly === true){
        onlinePrice.textContent = `+$${10}/yr`;
        storagePrice.textContent = `+$${20}/yr`;
        customizablePrice.textContent = `+$${30}/yr`;
    }else{
        onlinePrice.textContent = `+$${1}/mo`;
        storagePrice.textContent = `+$${2}/mo`;
        customizablePrice.textContent = `+$${3}/mo`; 
    }
}
getTypePlan();

let selectOnline = false;
let selectStorage = false;
let selectCustom = false;

//Evento para seleccionar un ons
online.addEventListener("click", () => {
    if(selectOnline === false){
        getAddOns('online')
        postPlan('online')  
    }else{
        resetStyles('online');
        selectOnline = false;
    }
});
storage.addEventListener("click", function() {
    if(selectStorage === false){
        getAddOns('storage')
        postPlan('storage')
    }else{
        resetStyles('storage');
        selectStorage = false;
    }
});
customizable.addEventListener("click", () => {
    if(selectCustom === false){
        getAddOns('customizable')
        postPlan('customizable')
    }else{
        resetStyles('customizable');
        selectCustom = false;
    }
});

function getAddOns(selectedPlan) {
    switch (selectedPlan) {
        case 'online':
            onlineContainer.style.border = "1px solid var(--primary-one-color)";
            onlineContainer.style.backgroundColor = "var(--primary-four-color)";
            onlineContainer.style.boxShadow = "0 0 2px var(--primary-one-color)";
            selectOnline = true;
            break;
        case 'storage':
            storageContainer.style.border = "1px solid var(--primary-one-color)";
            storageContainer.style.backgroundColor = "var(--primary-four-color)";
            storageContainer.style.boxShadow = "0 0 2px var(--primary-one-color)";
            selectStorage = true;
            break;
        case 'customizable':
            customizableContainer.style.border = "1px solid var(--primary-one-color)";
            customizableContainer.style.backgroundColor = "var(--primary-four-color)";
            customizableContainer.style.boxShadow = "0 0 2px var(--primary-one-color)";
            selectCustom = true;
            break;
    }
}

function resetStyles(selectedPlan) {
    switch (selectedPlan) {
        case 'online':
            onlineContainer.style.border = "1px solid var(--neutral-one-color)";
            onlineContainer.style.backgroundColor = "transparent";
            break;
        case 'storage':
            storageContainer.style.border = "1px solid var(--neutral-one-color)";
            storageContainer.style.backgroundColor = "transparent";
            break;
        case 'customizable':
            customizableContainer.style.border = "1px solid var(--neutral-one-color)";
            customizableContainer.style.backgroundColor = "transparent";
            break;
    }
}

//Arreglo para guardar los servicios.
let selectedServices = [];

//Agregar al arreglo los servicios seleccionados.
function postPlan(service){
    switch (service) {
        case 'online':
            let online = activatePlanYearly ? serviceYear[0] : serviceMonth[0];
            selectedServices.push(online);
            break;
        case 'storage':
            let storage = activatePlanYearly ? serviceYear[1] : serviceMonth[1];
            selectedServices.push(storage);
            break;
        case 'customizable':
            let custom = activatePlanYearly ? serviceYear[2] : serviceMonth[2];
            selectedServices.push(custom);
            break;
        default : 'No se selecciono ningún servicio'
            break;
    }
    localStorage.setItem('selectedServiceData', JSON.stringify(selectedServices));
}


//Evento del boton Next
btnNext.addEventListener("click", () => {
    window.location.href = "./finishing.html"
});

//Evento del boton Back
btnBack.addEventListener("click", () =>{
    window.location.href = "./Select-Plan.html"
});   