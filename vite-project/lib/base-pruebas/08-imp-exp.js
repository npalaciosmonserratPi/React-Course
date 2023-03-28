"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHeroesByOwner = exports.getHeroeById = void 0;
var _heroes = _interopRequireDefault(require("../data/heroes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getHeroeById = id => _heroes.default.find(heroe => heroe.id === id);
exports.getHeroeById = getHeroeById;
const getHeroesByOwner = owner => _heroes.default.filter(heroe => heroe.owner === owner);
exports.getHeroesByOwner = getHeroesByOwner;