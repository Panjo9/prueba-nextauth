const tabla_secon = document.querySelector('.grand');
const boton = document.querySelector('#add');
const ipta = document.querySelector('#accion');
const ipth = document.querySelector('#horario');
const enviar = document.querySelector('#enviar');
const span_one = document.querySelector('#spn_one');
const span_two = document.querySelector('#spn_two');

document.addEventListener('DOMContentLoaded', () => print())
boton.addEventListener('click', añadir);
ipta.addEventListener('input', print);
ipth.addEventListener('input', print);


function añadir() {
   if (tabla_secon.classList.contains('display-none')) {
      tabla_secon.classList.remove('display-none');
   } else {
      tabla_secon.classList.add('display-none');
   }
}
function print() {
   enviar.disabled = !ipta.value;
}

function anidar() {
   ipta.value = span_one.value;
   ipth.value = span_two.value;
}