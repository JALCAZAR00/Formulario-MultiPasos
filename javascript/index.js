/*-------------------- Section Info --------------------*/
const stepNav = document.querySelector('.first-step-icon')
const form = document.querySelector('.next');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const nameAlert = document.querySelector('.name');
const emailAlert = document.querySelector('.email');
const phoneAlert = document.querySelector('.phone');

const sectionInfoContainer = document.querySelector('.section-info');
const btnBack = document.querySelector('.back');

//Agregar estilos al numero en el que se encuentra.
stepNav.style.fontWeight = "600";
stepNav.style.backgroundColor = "var(--primary-third-color)";
stepNav.style.color = "var(--primary-color)"; 
stepNav.style.border = "1px solid var(--primary-third-color)"; 

// Evento para detectar cuando el usuario escribe en el input.
nameInput.addEventListener('blur', function() {
  if (nameInput.value.trim() === '') {
    nameAlert.style.display = 'flex';
    nameInput.style.border = "1px solid var(--alert-color)";
  } else{
    nameAlert.style.display = 'none';
    nameInput.style.border = "1px solid var(--primary-one-color)";
  }
});

emailInput.addEventListener('blur', function() {
  if (emailInput.value.trim() === '') {
    emailAlert.style.display = 'flex';
    emailInput.style.border = "1px solid var(--alert-color)";
  } else{
    emailAlert.style.display = 'none';
    emailInput.style.border = "1px solid var(--primary-one-color)";
  }
});

phoneInput.addEventListener('blur', function() {
  if (phoneInput.value.trim() === '') {
    phoneAlert.style.display = 'flex';
    phoneInput.style.border = "1px solid var(--alert-color)";
  } else{
    phoneAlert.style.display = 'none';
    phoneInput.style.border = "1px solid var(--primary-one-color)";
  }
});

// Evento para validar que los campos no esten vacios.
form.addEventListener('click', function(event) {
  event.preventDefault();

  if (nameInput.value.trim() === '') {
    nameAlert.style.display = 'flex';
    nameInput.style.border = "1px solid var(--alert-color)";
  }

  if (emailInput.value.trim() === '') {
    emailAlert.style.display = 'flex';
    emailInput.style.border = "1px solid var(--alert-color)";
  }

  if (phoneInput.value.trim() === '') {
    phoneAlert.style.display = 'flex';
    phoneInput.style.border = "1px solid var(--alert-color)";
  }

  if (nameInput.value.trim() !== '' && emailInput.value.trim() !== '' && phoneInput.value.trim() !== '') {
    window.location.href = "Select-Plan.html";
  }
});