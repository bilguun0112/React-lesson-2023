import { useContext } from 'react';
import './App.css';
import List from './components/list';
import { MyContext } from './context/newContext';

function App() {
  const contex = useContext(MyContext)
  console.log(contex)

  // const [isLarge, setIsLarge] = useState(false)
  // let imageSize = isLarge ? 150 : 100

  return (

    <div className="App">
      <label>

        <input type="checkbox" onChange={(e) => {
          contex.setIsLarge(e.target.checked)
        }} />
        Use Large Images
        <hr />
        {/* <List imageSize={imageSize} /> */}
        <List />
      </label>
    </div>

  );
}

export default App;
