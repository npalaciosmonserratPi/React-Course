"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retornaArreglo = void 0;
const retornaArreglo = () => {
  return ['ABC', 123];
};
exports.retornaArreglo = retornaArreglo;
const [letras, numeros] = retornaArreglo();

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const usState = valor => {
  return [valor, () => {
    console.log('Hola Mundo');
  }];
};
const [nombre, setNombre] = usState('Goku');
console.log(nombre);
setNombre();