import { Route, Routes } from 'react-router-dom';
import ResponsiveDrawer from './components/Drawer';
import SubmitFunc from './components/submitFunc';
import DataTable from './components/testTable';
import Users from './pages/users';

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      <Routes>
        <Route path='/' element={<DataTable />} />
        <Route path='/users' element={<Users />} />
        <Route path='/test' element={<SubmitFunc />} />
      </Routes>
    </div>
  );
}

export default App;
