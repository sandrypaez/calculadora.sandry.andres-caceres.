const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('button');

let operacion = '';
let borrarPantalla = false;

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const valor = boton.textContent;

    if (valor === 'C') {
      operacion = '';
      pantalla.textContent = '0';
      return;
    }

    if (valor === '=') {
      try {
        const resultado = eval(operacion.replace('×', '*').replace('÷', '/'));
        pantalla.textContent = resultado;
        operacion = resultado.toString();
      } catch {
        pantalla.textContent = 'Error';
        operacion = '';
      }
      return;
    }

    if (pantalla.textContent === '0' && valor !== '.') {
      pantalla.textContent = valor;
    } else {
      pantalla.textContent += valor;
    }

    operacion += valor;
  });
});

