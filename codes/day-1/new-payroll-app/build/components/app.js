define(["exports", "./EmployeeList", "./welcome", "react"], function (_exports, _EmployeeList, _welcome, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.App = App;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function App() {
    // const welElement = Welcome()
    // const tblElement = EmployeeList()
    // const mainDivElement = React.createElement('div', null, [welElement, tblElement])
    var mainDivElement = /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_welcome.Welcome, null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_EmployeeList.EmployeeList, null));

    return mainDivElement;
  }
  /**
   * {
   *    type:'div',
   *    props:{
   *     children:[
   *     
   *      {
   *       type:'h2',
   *          props:{
   *          id:'mainHeader',
   *       style:{},
   *          children:'welcome to employee payroll'
   *      }
   *       }
  
   *     ]
   *    }
   * }
   */

});