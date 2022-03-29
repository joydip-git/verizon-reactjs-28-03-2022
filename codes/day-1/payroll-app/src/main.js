// function Component() {
//     this.state = null
// }
// Component.prototype.componentDidMount = function () {
//     console.log(this.personName + ' mounted')
// }

class Component {
    constructor() {
        this.state = null
    }
    componentDidMount() {
        console.log('base mount')
    }
    setState(obj) {

    }
    render() {

    }
}
class Person extends Component {
    constructor(name) {
        super()
        // Component.call(this)
        //console.log('person')
        this.state = {
            x: 12
        }
        this.personName = name
    }
    render() {

    }
    componentDidMount() {
        this.setState()
        super.componentDidMount();
        console.log(this.personName + ' mounted')
        console.log(this.state.x)
    }
}
// function person(name) {
//     Component.call(this)
//     console.log('person')
//     this.state = {}
//     this.personName = name
// }
// person.prototype.componentDidMount = function () {
//     console.log(this.personName + ' mounted')
// }
//Object.setPrototypeOf(person.prototype, Component.prototype)
const p1 = new Person('joydip')
const p2 = new Person('anil')

console.log(Person.prototype)
console.log(p1.hasOwnProperty('componentDidMount'))
console.log(p2.hasOwnProperty('componentDidMount'))
console.log(Person.prototype.hasOwnProperty('componentDidMount'))
p1.componentDidMount()
p2.componentDidMount()