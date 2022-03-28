define(["exports", "./employee-list", "./welcome"], function (_exports, _employeeList, _welcome) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.app = app;

  function app() {
    var welElement = (0, _welcome.welcome)();
    var tblElement = (0, _employeeList.employeelist)();
    var mainDivElement = document.createElement('div');
    mainDivElement.appendChild(welElement);
    mainDivElement.appendChild(tblElement);
    return mainDivElement;
  }
});