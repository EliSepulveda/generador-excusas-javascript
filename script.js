/**
 * Cambiemos estas de let a const, ya que no cambiarán. Como son variables globales, 
 * asegurémonos de que no se puedan cambiar dentro de diferentes funciones, lo que 
 * provocaría un comportamiento no deseado.
 */ 
const sujetos = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const acciones = ['ate', 'peed', 'crushed', 'broke'];
const objetos = ['my homework', 'my phone', 'the car'];
const momentos = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

/**
 * Genera una excusa aleatoria seleccionando un elemento aleatorio de cada arreglo.
 * @returns {string} - Una excusa generada aleatoriamente.
 */
function generarExcusa() {
    let sujetoAleatorio = sujetos[Math.floor(Math.random() * sujetos.length)];
    let accionAleatoria = acciones[Math.floor(Math.random() * acciones.length)];
    let objetoAleatorio = objetos[Math.floor(Math.random() * objetos.length)];
    let momentoAleatorio = momentos[Math.floor(Math.random() * momentos.length)];
    
    return `${sujetoAleatorio} ${accionAleatoria} ${objetoAleatorio} ${momentoAleatorio}`;
}

window.addEventListener('load', () => {
    const elementoExcusa = document.getElementById('excusa');
    if (elementoExcusa) {
        elementoExcusa.textContent = generarExcusa();
    }
});
