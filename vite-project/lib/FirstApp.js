"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FirstApp = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FirstApp = ({
  title,
  subTitle
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h1", {
      children: [title, " "]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
      children: subTitle
    })]
  });
};
exports.FirstApp = FirstApp;
FirstApp.defaultProps = {
  // title: 'No hay titulo',
  subTitle: 'No hay subtítulo'
};
FirstApp.propTypes = {
  title: _propTypes.default.string.isRequired
};