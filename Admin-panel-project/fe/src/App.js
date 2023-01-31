import { Route, Routes } from 'react-router-dom';
import SubmitFunc from './components/submitFunc';
import Users from './pages/users';

function App() {
  return (
    <div className="App">
      <h1>
        Here is my Admin PAnela
      </h1>
      <Routes>
        <Route path='/users' element={<Users />} />
        <Route path='/test' element={<SubmitFunc />} />
      </Routes>
    </div>
  );
}

export default App;
