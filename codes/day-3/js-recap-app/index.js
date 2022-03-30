//'use srtict'
//1. object literal syntax
// var obj = {
//     id: 1,
//     name: 'joydip',
//     salary: 1000
// }

//2. ctor function
// function person(id, name, salary) {
//     var x = 10
//     this.id = id
//     this.personName = name
//     this.salary = salary
// }
// person.prototype.print = function () {
//     return `${this.name}, ${this.salary}`
// }

class person {
    constructor(id, name, salary) {
        var x = 10
        this.id = id
        this.personName = name
        this.salary = salary
    }
    print = () => {
        return `${this.personName}, ${this.salary}`
    }
}
const anilPerson = new person(1, 'anil', 1000)
//console.log(anilPerson.hasOwnProperty('print'))
console.log(person.prototype)
console.log(anilPerson.print())
const joydipPerson = new person(2, 'joydip', 2000)
var printFnRef = joydipPerson.print//.bind(joydipPerson)
const info = printFnRef() //
/**
 * function () {
        return `${this.personName}, ${this.salary}`
    }()]bound to joydip person object]
 */
console.log(info)
// console.log(anilPerson)
// console.log(joydipPerson)