"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usContext = void 0;
const usContext = ({
  clave,
  nombre,
  edad,
  rango = 'Capitán'
}) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232
    }
  };
};
exports.usContext = usContext;