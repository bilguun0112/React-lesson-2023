
import './App.css';
import Input from './components/input';
import { useState } from 'react';
import Anime from './components/anime';
import Button from './components/button';
import TopAnime from './components/topanime';

function App() {
  const [text, setText] = useState("")

  function handleChange(e) {
    setText(e.target.value)
  }

  return (
    <div className="App">
      <div>
        <Input
          value={text}
          onChange={handleChange}
          label="first" />
      </div>
      <div>
        <Input
          value={text}
          onChange={handleChange}
          label="sec" />
      </div>
      <Anime />
      <br />
      <Button />
      <br />
      <TopAnime />
    </div>
  );
}

export default App;
