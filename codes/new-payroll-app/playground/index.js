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
import { app } from "./components/app";
const appDesign = app()
const rootDiv = document.getElementById('root')
rootDiv.appendChild(appDesign)