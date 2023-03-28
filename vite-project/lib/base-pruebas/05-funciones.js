"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsuarioActivo = exports.getUser = void 0;
const getUser = () => ({
  uid: 'ABC123',
  username: 'El_Papi1502'
});
exports.getUser = getUser;
const getUsuarioActivo = nombre => ({
  uid: 'ABC567',
  username: nombre
});
exports.getUsuarioActivo = getUsuarioActivo;