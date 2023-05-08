//Elementos del header y footer
const stepNav = document.querySelector('.third-step-icon')
const btnBack = document.querySelector('.back');
const btnNext = document.querySelector('.next');

//
const onlineContainer = document.querySelector('.online-service');
const storageContainer = document.querySelector('.larger-storage');
const customizableContainer = document.querySelector('.cutomizable-profile');

const online = document.getElementById('online');
const storage = document.getElementById('storage');
const customizable = document.getElementById('customizable');

//Arreglo para seleccion de plan
const selectPlans = ['online', 'storage', 'customizable'];

//Agregar estilos al numero en el que se encuentra.
stepNav.style.fontWeight = "600";
stepNav.style.backgroundColor = "var(--primary-third-color)";
stepNav.style.color = "var(--primary-color)"; 
stepNav.style.border = "1px solid var(--primary-third-color)";

let selectOnline = false;
let selectStorage = false;
let selectCustom = false;

//Evento para seleccionar un ons
online.addEventListener("click", () => {
    if(selectOnline === false){
        getAddOns('online')  
    }else{
        resetStyles('online');
        selectOnline = false;
    }
});
storage.addEventListener("click", function() {
    if(selectStorage === false){
        getAddOns('storage')
    }else{
        resetStyles('storage');
        selectStorage = false;
    }
});
customizable.addEventListener("click", () => {
    if(selectCustom === false){
        getAddOns('customizable')
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

//Evento del boton Next
btnNext.addEventListener("click", () => {
    window.location.href = "./finishing.html"
});

//Evento del boton Back
btnBack.addEventListener("click", () =>{
    window.location.href = "./Select-Plan.html"
});   