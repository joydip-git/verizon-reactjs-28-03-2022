define(["./hr", "./developer"], function (_hr, _developer) {
  "use strict";

  // const hrModuleExports = require('./hr')
  // const devModuleExports = require('./developer')
  function printSalarySlips() {
    var anilHr = new _hr.Hr(1, 'anil', 1000, 2000, 3000, 4000);
    var sunilDeveloper = new _developer.Developer(1, 'sunil', 1500, 2500, 3500, 4500);
    var employees = [anilHr, sunilDeveloper];

    for (var i = 0; i < employees.length; i++) {
      var single = employees[i];
      alert("".concat(single.empName, " has salary of ").concat(single.calculateSalary()));
    }
  }

  document.getElementById('btnLoad').addEventListener('click', printSalarySlips);
  console.log('welcome to modular JS code...');
});