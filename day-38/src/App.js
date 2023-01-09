import './App.css';
import Button from './components/function';
import ParentToolbar from './components/ParentToolbar';
import SingUp from './components/SignUp';
import Toolbar from './components/toolbar';
import ToolbarNext from './components/ToolbarNext';

function App() {
  return (
    <div className="App">
      <h1>Day - 38 React state</h1>
      <Button />
      <Toolbar />
      <ToolbarNext />
      <ParentToolbar />
      <SingUp />
    </div>
  );
}

export default App;
