
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Users from './pages/users';

function App() {
  return (
    <div className="App">
      <h1>
        Here is my Admin PAnela
      </h1>
      <Routes>
        <Route path='/users' element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
