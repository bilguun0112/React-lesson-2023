
import './App.css';
import Counter from './components/counter';
import Day41 from './components/day41';
import List from './components/spreadArray';
import UpdateArrays from './components/UpdateArrays';
import UpdatingObjects from './components/UpdatingObjects';

function App() {
  return (
    <div className="App">
      <h1>Day 41 React States</h1>

      <UpdatingObjects/>
      <Day41 />
      <Counter />
      <UpdateArrays />
      <List/>
    </div>
  );
}

export default App;
