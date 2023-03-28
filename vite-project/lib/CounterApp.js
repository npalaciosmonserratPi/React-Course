"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CounterApp = void 0;
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
const CounterApp = () => {
  const [counter, setCounter] = (0, _react.useState)(0);
  //El estado cambió, por lo tanto se debe volver a renderizar el componente. 
  //Eso ocurre cuando se ejecuta el setCounter.

  const handleAdd = () => {
    setCounter(counter + 1);
    //setCounter((c) => {c+1})
  };

  const hanldeSubstract = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      children: "CounterApp"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
      children: counter
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: handleAdd,
      children: "+1"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: hanldeSubstract,
      children: "-1"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: handleReset,
      children: "Reset"
    })]
  });
};
exports.CounterApp = CounterApp;