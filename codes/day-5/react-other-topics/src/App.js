import './App.css';
import Check from './Check';
import ThemedContext, { OtherContext, themes } from './theme-context';
import ThemedButton from './ThemedButton';
import Toolbar from './Toolbar';

function App() {
  return (
    <div className="App">
      <ThemedContext.Provider value={themes.light}>
        <Toolbar />
        <Check>
          <button>Button1</button>
          <button>Button2</button>
        </Check>
      </ThemedContext.Provider>
      <OtherContext.Provider value={themes.dark}>
        <Toolbar />
      </OtherContext.Provider>

    </div>
  );
}

export default App;
