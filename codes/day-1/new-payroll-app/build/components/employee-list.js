define(["exports", "../repository/employeerepository"], function (_exports, _employeerepository) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.employeelist = employeelist;

  function createHeader(tblObj) {
    var trHeader = document.createElement('tr');
    trHeader.setAttribute('style', 'background-color:burlywood');
    var tdNameColmn = document.createElement('td');
    tdNameColmn.innerText = 'NAME';
    var tdIdColmn = document.createElement('td');
    tdIdColmn.innerText = 'ID';
    var tdSalColmn = document.createElement('td');
    tdSalColmn.innerText = 'SALARY ';
    trHeader.appendChild(tdNameColmn);
    trHeader.appendChild(tdIdColmn);
    trHeader.appendChild(tdSalColmn);
    tblObj.appendChild(trHeader);
  }

  function createBody(tblObj) {
    var _loop = function _loop(i) {
      var single = _employeerepository.employees[i];
      var trObj = document.createElement('tr');
      var tdName = document.createElement('td');
      tdName.innerText = single.empName;
      tdName.addEventListener('mouseover', function () {
        alert(single.empBasic);
      });
      var tdId = document.createElement('td');
      tdId.innerText = single.empId.toString();
      var tdSalary = document.createElement('td');
      tdSalary.innerText = single.calculateSalary().toString();
      trObj.appendChild(tdName);
      trObj.appendChild(tdId);
      trObj.appendChild(tdSalary);
      tblObj.appendChild(trObj);
    };

    for (var i = 0; i < _employeerepository.employees.length; i++) {
      _loop(i);
    }
  }

  function employeelist() {
    var tblObj = document.createElement('table');
    createHeader(tblObj);
    createBody(tblObj);
    return tblObj;
  }
});