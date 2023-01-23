
import './App.css';
import Input from './components/input';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("")

  function handleChange(e) {
    setText(e.target.value)
  }

  return (
    <div className="App">
      <div>
        <Input value={text} onChange={handleChange} label="first" />
      </div>
      <div>
        <Input value={text} onChange={handleChange} label="sec" />
      </div>
    </div>
  );
}

export default App;
