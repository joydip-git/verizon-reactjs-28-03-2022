define(["exports", "../repository/employeerepository", "react"], function (_exports, _employeerepository, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.EmployeeList = EmployeeList;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function createHeader() {
    var tdNameColmn = /*#__PURE__*/_react["default"].createElement('td', null, 'NAME');

    var tdIdColmn = /*#__PURE__*/_react["default"].createElement('td', null, 'ID');

    var tdSalColmn = /*#__PURE__*/_react["default"].createElement('td', null, 'SALARY');

    var trHeader = /*#__PURE__*/_react["default"].createElement('tr', {
      style: {
        backgroundColor: 'burlywood'
      }
    }, [tdNameColmn, tdIdColmn, tdSalColmn]);

    return trHeader;
  }

  function createBody() {
    var rows = [];

    var _loop = function _loop(i) {
      var single = _employeerepository.employees[i];

      var tdName = /*#__PURE__*/_react["default"].createElement('td', {
        onMouseOver: function onMouseOver() {
          alert(single.empBasic);
        }
      }, single.empName);

      var tdId = /*#__PURE__*/_react["default"].createElement('td', null, single.empId.toString());

      var tdSalary = /*#__PURE__*/_react["default"].createElement('td'["null"], single.calculateSalary().toString());

      var trObj = /*#__PURE__*/_react["default"].createElement('tr', null, [tdName, tdId, tdSalary]);

      rows.push(trObj);
    };

    for (var i = 0; i < _employeerepository.employees.length; i++) {
      _loop(i);
    }

    var tblBody = /*#__PURE__*/_react["default"].createElement('tbody', null, rows);

    return tblBody;
  }

  function EmployeeList() {
    // const tableHeader = createHeader()
    // const tableBody = createBody()
    // const tblObj = React.createElement('table', null, [tableHeader, tableBody]);
    var headerStyle = {
      backgroundColor: 'burlywood'
    };

    var tblObj = /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
      style: headerStyle
    }, /*#__PURE__*/_react["default"].createElement("th", null, "NAME"), /*#__PURE__*/_react["default"].createElement("th", null, "ID"), /*#__PURE__*/_react["default"].createElement("th", null, "SALARY"))), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null), /*#__PURE__*/_react["default"].createElement("td", null), /*#__PURE__*/_react["default"].createElement("td", null))));

    return tblObj;
  }
});