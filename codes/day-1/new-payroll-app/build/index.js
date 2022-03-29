define(["./components/app", "react-dom", "React"], function (_app, _reactDom, _React) {
  "use strict";

  _React = _interopRequireDefault(_React);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  // const appDesign = App()
  var rootDiv = document.getElementById('root'); //render(appDesign, rootDiv)

  (0, _reactDom.render)( /*#__PURE__*/_React["default"].createElement(_app.App, null), rootDiv);
});