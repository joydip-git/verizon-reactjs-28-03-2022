import { Component } from 'react';
import './App.css';
import Click from './Click';
import Hover from './Hover';
//import withValue from './withValue';

/*
function App() {

  // const WithValueClick = withValue(Click)
  // const WithValueHover = withValue(Hover)
  // return (
  //   <div className="App">
  //     <WithValueClick x={10} />
  //     <br />
  //     <br />
  //     <WithValueHover y={20} />
  //   </div>
  // );

  return (
    <div className="App">
      <Click x={10} />
      <br />
      <br />
      <Hover y={20} />
    </div>
  );
}
*/
class App extends Component {
  state = {
    show: true
  }
  updateShowHandler = () => {
    this.setState(
      (currentState) => {
        return {
          show: !currentState.show
        }
      }
    )
  }
  render() {
    return (
      <div className="App">
        {
          this.state.show && <Click x={10} />
        }
        <br />
        <button onClick={this.updateShowHandler}>
          {this.state.show ? 'Hide' : 'Show'}
        </button>
        <br />
        <Hover y={20} />
      </div>
    );
  }
}

/*
function X() {

}
X.prototype.f1 = function () {

}
class Y {
  f2() {

  }
}
const y = new Y();
y.f2();
const common1 = {
  f3: () => { }
}
const common2 = {
  f4: () => { }
}

Object.assign(X.prototype, common1, common2)
Object.assign(Y.prototype, common1, common2)
console.log(X.prototype)
console.log(Y.prototype)
*/
export default App;
