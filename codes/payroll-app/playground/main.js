
// class XComponent extends Component {
//     constructor() {
//         super()
//         this.state = {

//         }
//     }
// }

/*
function Component(childProps) {
    this.state = null;
    this.props = null;   
}
Component.proptotype.componentDidMount=function(){}
Component.proptotype.componentDidUpdate=function(){}

function XComponent(props) {
    Component.call(this, props)
    this.state = {
        this.state.apply(this)
    }
    this.props = {

    }    
}
XComponent.componentDidMount=function(){
     
}
Object.setPrototypeOf(Component, XComponent)
*/
const state = {
    data: initialState
}

const reducerFn = (state = initialState, action) => {
    return {
        ...state,
        data: action.value
    }
}
function useState(initialState) {
    useReducer()
    //let stateData = initialState;
    function setStateData(newState) {
        //stateData = newState
        reducerFn({ type: 'update', value: newState })
    }
    return [stateData, setStateData]
}

const [val, setVal] = useState(10)


//create instance based on ctor function =>render=>recat element=>produce VDOM
//

function F() {

}

F()
new F()


// function employee(id, name, basic, da, hra) {
//     this.empId = id;
//     this.empName = name;
//     this.empBasic = basic;
//     this.empDa = da;
//     this.empHra = hra;
// }
// employee.prototype.calculateSalary = function () {
//     return this.empBasic + this.empDa + this.empHra
// }


// function developer(id, name, basic, da, hra, incentive) {
//     employee.call(this, id, name, basic, da, hra, incentive)
//     this.empIncentive = incentive
// }
// developer.prototype.calculateSalary = function () {
//     return employee.prototype.calculateSalary.apply(this) + this.empIncentive
// }
// Object.setPrototypeOf(developer.prototype, employee.prototype)