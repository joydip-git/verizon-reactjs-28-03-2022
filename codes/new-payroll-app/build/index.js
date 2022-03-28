define(["./components/app"], function (_app) {
  "use strict";

  // const hrModuleExports = require('./hr')
  // const devModuleExports = require('./developer')
  // import { Hr } from "./hr";
  // import { Developer } from "./developer";
  // import { employees } from "./repository/employeerepository";
  // function printSalarySlips() {
  // }
  // document.getElementById('btnLoad').addEventListener('click', printSalarySlips)
  // console.log('welcome to modular JS code...')
  //bootstrapper file
  var appDesign = (0, _app.app)();
  var rootDiv = document.getElementById('root');
  rootDiv.appendChild(appDesign);
});