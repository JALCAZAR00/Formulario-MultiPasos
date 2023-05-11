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

//Evento boton Back
btnBack.style.display = "none";
document.querySelector('.buttons').style.justifyContent = "flex-end";

let emailStatus = false;
function validarEmail(email) {
  // Expresión regular para validar el formato de correo electrónico
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Evento para detectar cuando el usuario escribe en el input.
nameInput.addEventListener('blur', function() {
  if (nameInput.value.trim() === '') {
    nameAlert.style.display = 'flex';
    nameInput.style.border = "1px solid var(--alert-color)";
  } else{
    nameAlert.style.display = 'none';
    nameInput.style.border = "1px solid var(--primary-one-color)";
    inputStatus = true;
  }
});

emailInput.addEventListener('blur', function() {
  const email = emailInput.value.trim();
  if (!validarEmail(email)) {
    emailAlert.style.display = 'flex';
    emailInput.style.border = "1px solid var(--alert-color)";
    emailStatus = false;
  } else{
    emailAlert.style.display = 'none';
    emailInput.style.border = "1px solid var(--primary-one-color)";
    emailStatus = true;
  }
});

phoneInput.addEventListener('blur', function() {
  if (phoneInput.value.length < 10 || phoneInput.value.length > 10) {
    phoneAlert.style.display = 'flex';
    phoneInput.style.border = "1px solid var(--alert-color)";
  } else{
    phoneAlert.style.display = 'none';
    phoneInput.style.border = "1px solid var(--primary-one-color)";
  }
});

// Evento para validar los inputs
form.addEventListener('click', function(event) {
  event.preventDefault();
  if (nameInput.value.trim() === '') {
    nameAlert.style.display = 'flex';
    nameInput.style.border = "1px solid var(--alert-color)";
  }

  if (emailInput.value.trim() === '') {
    emailAlert.style.display = 'flex';
    emailInput.style.border = "1px solid var(--alert-color)";
    inputStatus = false;
  }

  if (phoneInput.value.length < 10 || phoneInput.value.length > 10) {
    phoneAlert.style.display = 'flex';
    phoneAlert.textContent = "Write 10 digits";
    phoneInput.style.border = "1px solid var(--alert-color)";
  }

  if (nameInput.value.trim() !== '' && emailInput.value.trim() !== '' && phoneInput.value.length === 10 && emailStatus === true) {
    window.location.href = "./Select-Plan.html";
  }
  nameUser = nameInput.value;
  localStorage.setItem('nameUser', JSON.stringify(nameUser));
});