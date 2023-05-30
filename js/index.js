const tabla_secon = document.querySelector('.grand');
const boton = document.querySelector('#boton');

boton.addEventListener('click', añadir);

function añadir() {
   if (tabla_secon.classList.contains('display-none')) {
      tabla_secon.classList.remove('display-none');
   } else {
      tabla_secon.classList.add('display-none');
   }
}
