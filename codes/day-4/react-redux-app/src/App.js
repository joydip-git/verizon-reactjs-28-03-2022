import './App.css';
import { connect, useSelector, useDispatch } from 'react-redux'
import { increaseActionCreator } from './redux/actioncreators';
import { useRef } from 'react';

/*
function App(props) {
  const { counterValue, increaseCounter } = props
  const inputElementRef = useRef(0)
  return (
    <>
      Enter increment value:
      <input type='text' ref={inputElementRef} />
      <br />
      <button onClick={
        () => {
          increaseCounter(Number(inputElementRef.current.value))
        }
      }>
        Increase
      </button>
      <br />
      Counter:&nbsp;{counterValue}
    </>
  );
}

const mapStateToProps = (stateMap) => {
  return {
    counterValue: stateMap.numberState.counter
  }
}
const mapDispatchToProps = (dispatchFnRef) => {
  return {
    increaseCounter: (increaseByValue) => {
      const actionObj = increaseActionCreator(increaseByValue)
      dispatchFnRef(actionObj)
    }
  }
}
const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(App);
*/

function App() {

  const counterValue = useSelector((stateMap) => stateMap.numberState.counter)

  const dispatchFnRef = useDispatch()

  const increaseCounter = (increaseByValue) => {
    const actionObj = increaseActionCreator(increaseByValue)
    dispatchFnRef(actionObj)
  }

  const inputElementRef = useRef(0)
  return (
    <>
      Enter increment value:
      <input type='text' ref={inputElementRef} />
      <br />
      <button onClick={
        () => {
          increaseCounter(Number(inputElementRef.current.value))
        }
      }>
        Increase
      </button>
      <br />
      Counter:&nbsp;{counterValue}
    </>
  );
}
export default App
