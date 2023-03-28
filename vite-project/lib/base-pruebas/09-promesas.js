"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHeroeByIdAsync = void 0;
var _impExp = require("./08-imp-exp");
const getHeroeByIdAsync = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      // importen el 
      const p1 = (0, _impExp.getHeroeById)(id);
      if (p1) {
        resolve(p1);
      } else {
        reject('No se pudo encontrar el héroe ' + id);
      }
    }, 1000);
  });
};
exports.getHeroeByIdAsync = getHeroeByIdAsync;