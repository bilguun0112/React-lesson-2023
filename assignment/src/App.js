
import './App.css';
import CreateFunction from './components/createFunction';
import Exercises from './components/duplicate_counter';
import EvenAndOdd from './components/even_and_odd';
import PascalTriangle from './components/newPascal';
import Pascal from './components/Pascal';

function App() {
  return (
    <div className="App">
      {/* <CreateFunction /> */}
      {/* <Exercises /> */}
      {/* <EvenAndOdd /> */}
      <Pascal />
      <PascalTriangle />
    </div>
  );
}

export default App;
