import './App.css';
//import ErrorBoundary from './ErrorBoundary';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary errorLogger={loggerFunc}> */}
      <div>In App component</div>
      <Hero heroName='Batman' />
      <Hero heroName='Superman' />
      <Hero heroName='Joker' />
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
/**
 * {
 *    propName:value
 * }
 */
