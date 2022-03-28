define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.welcome = welcome;

  function welcome() {
    var title = 'welcome to employee payroll';
    var header = document.createElement('h2');
    header.innerText = title;
    header.setAttribute('style', 'background-color:lime');
    return header;
  }
});