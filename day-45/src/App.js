
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Accordion from './components/accordion';
import LogIn from './components/login';
import Home from './components/home';
import Register from './components/register';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/login' element={<LogIn />} />
        <Route path='/' element={<Home />} />
        <Route path='accordion' element={<Accordion />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
