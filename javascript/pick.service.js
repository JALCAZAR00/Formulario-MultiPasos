//Elementos del header y footer
const stepNav = document.querySelector('.third-step-icon')
const btnBack = document.querySelector('.back');
const btnNext = document.querySelector('.next');

//Contenedor de adicionales
const onlineContainer = document.querySelector('.online-service');
const storageContainer = document.querySelector('.larger-storage');
const customizableContainer = document.querySelector('.cutomizable-profile');

//Input checkbox de adicionales
const onlineBtn = document.getElementById('online');
const storageBtn = document.getElementById('storage');
const customizableBtn = document.getElementById('customizable');

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
onlineContainer.addEventListener("click", () => {
    if(selectOnline === false){
        onlineBtn.checked = true; 
        getAddOns('online')
        postService('online') 
    }else{
        selectOnline = false;
        onlineBtn.checked = false; 
        resetStyles('online');
        deleteService('online')
    }
});
storageContainer.addEventListener("click", function() {
    if(selectStorage === false){
        storageBtn.checked = true; 
        getAddOns('storage')
        postService('storage')
    }else{
        selectStorage = false;
        storageBtn.checked = false;
        resetStyles('storage');
        deleteService('storage');
    }
});
customizableContainer.addEventListener("click", () => {
    if(selectCustom === false){
        customizableBtn.checked = true;
        getAddOns('customizable')
        postService('customizable')
    }else{
        selectCustom = false;
        customizableBtn.checked = false;
        resetStyles('customizable');
        deleteService('customizable');
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

//Arreglo para guardar los servicios
let selectedServices = [];
let deleteServices = false;

//Agregar al arreglo los servicios seleccionados
function postService(service){
    switch (service) {
        case 'online':
            let online = activatePlanYearly ? serviceYear[0] : serviceMonth[0];
            if(deleteServices === false){
                selectedServices.splice(0, 0, online); 
            }else{
                selectedServices.splice(0, 1, online);
            }
            break;
        case 'storage':
            let storage = activatePlanYearly ? serviceYear[1] : serviceMonth[1];
            if(deleteServices === false){
            selectedServices.splice(1, 0, storage);
            }else{
                selectedServices.splice(1, 1, storage);
            }
            break;
        case 'customizable':
            let custom = activatePlanYearly ? serviceYear[2] : serviceMonth[2];
            if(deleteServices === false){
            selectedServices.splice(2, 0, custom);
            }else{
                selectedServices.splice(2, 1, custom);
            }
            break;
        default : 'No se selecciono ningún servicio'
            break;
    }
    localStorage.setItem('selectedServiceData', JSON.stringify(selectedServices));
}

//Eliminar del arreglo los servicios
function deleteService(service){
    switch (service) {
        case 'online':
            delete selectedServices[0]
            deleteServices = true;
            break;
        case 'storage':
            delete selectedServices[1]
            deleteServices = true;
            break;
        case 'customizable':
            delete selectedServices[2]
            deleteServices = true;
            break;
        default : 'No se selecciono ningún servicio'
            break;
    }
    localStorage.setItem('selectedServiceData', JSON.stringify(selectedServices));
    //return selectedServices;
}

//Eliminar los elementos null del array
function updateServices(){
    selectedServices = selectedServices.filter(elemento => elemento !== "");
    localStorage.setItem('selectedServiceData', JSON.stringify(selectedServices));
}

//Evento del boton Next
btnNext.addEventListener("click", () => {
    if(deleteServices === true){
        updateServices();
    }
    window.location.href = "./finishing.html"
});

//Evento del boton Back
btnBack.addEventListener("click", () =>{
    window.location.href = "./Select-Plan.html"
});   