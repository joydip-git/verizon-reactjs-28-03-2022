define(["exports", "react"], function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Welcome = Welcome;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function Welcome() {
    var title = 'welcome to employee payroll'; // const header = React.createElement(
    //     'h2',
    //     {
    //         id: 'mainHeader',
    //         style: { backgroundColor: 'lime', fontFamily: 'Segoe UI' }
    //     },
    //     title
    // );

    var headerStyle = {
      backgroundColor: 'lime',
      fontFamily: 'Segoe UI'
    };

    var header = /*#__PURE__*/_react["default"].createElement("h2", {
      id: "mainHeader",
      style: headerStyle
    }, title);

    return header;
  }
  /**
   * {
   *    type:'h2',
   *    props:{
   *      id:'mainHeader',
   *      style:{},
   *      children:'welcome to employee payroll'
   *    }
   * }
   */

});