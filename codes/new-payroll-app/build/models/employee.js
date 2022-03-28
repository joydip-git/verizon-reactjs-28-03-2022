define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Employee = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  var Employee = /*#__PURE__*/function () {
    function Employee(id, name, basic, da, hra) {
      _classCallCheck(this, Employee);

      this.empId = id;
      this.empName = name;
      this.empBasic = basic;
      this.empDa = da;
      this.empHra = hra;
    }

    _createClass(Employee, [{
      key: "calculateSalary",
      value: function calculateSalary() {
        return this.empBasic + this.empDa + this.empHra;
      }
    }]);

    return Employee;
  }(); // module.exports = {
  //     Employee: Employee
  // }


  _exports.Employee = Employee;
});