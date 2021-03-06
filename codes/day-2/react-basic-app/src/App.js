import React, { Component } from 'react';
import './App.css';
import { Welcome } from './Welcome';

class App extends Component {
  constructor() {
    super()
    this.state = {
      greeting: 'welcome to react js',
      value: 0,
      name:'joydip'
    }
  }

  updateGreetingHandler = () => {
    // this.state.greeting = 'welcome to React learning'
    // console.log(this.state)
    // this.render()
    // const copyState = {
    //   ...this.state
    // }
    // const newState = {
    //   greeting: 'welcome to React learning'
    // }
    // const updatedState = {
    //   ...copyState,
    //   ...newState
    // }
    // console.log(updatedState)
    //mutate the state immutably
    this.setState({
      greeting: 'welcome to React learning'
    })
  }
  
  updateValueHandler = () => {
    this.setState(
      (currentStateCopy) => {
        return {
          value:currentStateCopy.value+1
        }
      }
    )
  }

  //lifecycle event
  render() {
    console.log('rendered')
    return (
      <div className="App">
        App Component
        <br/>
        <button onClick={this.updateValueHandler}>Increase Value</button>
        <br />
        <Welcome message={this.state.greeting} val={this.state.value} name={this.state.name} valueHandler={this.updateGreetingHandler} />
      </div >
    )
  }
}
export default App


// function Comp() {
  
// }
// function App() {
// Comp.call(this)
//   this.x = 10
// }
// new App()
/*
function App() {
  let greeting = "welcome to react js"
  const updateValue = function () {
    alert(greeting)
    greeting = "Welcome to React Learning"
    alert(greeting)
  }
  // const design = Welcome({ message: greeting, val: 10, name: 'joydip' })
  // const design = <Welcome message={greeting} val={10} name='joydip' valueHandler={updateValue} />

  //console.log(design)

  return (
    <div className="App">
      App Component
      <br />
<Welcome message={greeting} val={10} name='joydip' valueHandler={updateValue} />
    </div >
  )
}
* /
export default App;
/*
{ message: greeting, val: 10, name: 'joydip' }
*/
