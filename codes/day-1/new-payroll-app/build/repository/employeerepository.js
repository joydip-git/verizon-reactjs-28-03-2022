define(["exports", "../models/hr", "../models/developer"], function (_exports, _hr, _developer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.employees = void 0;
  var anilHr = new _hr.Hr(1, 'anil', 1000, 2000, 3000, 4000);
  var sunilDeveloper = new _developer.Developer(1, 'sunil', 1500, 2500, 3500, 4500);
  var employees = [anilHr, sunilDeveloper];
  _exports.employees = employees;
});