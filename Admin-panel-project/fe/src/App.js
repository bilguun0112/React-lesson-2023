import { Route, Routes } from 'react-router-dom';
import ResponsiveDrawer from './components/Drawer';
import CreateProduct from './components/submitFunc';
import DataTable from './components/testTable';
import EditProduct from './pages/editProduct';
import Users from './pages/users';
import UsersTable from './pages/usersTable';

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      <Routes>
        <Route path='/' element={<DataTable />} />
        <Route path='/users' element={<Users />} />
        <Route path='/product-table' element={<CreateProduct />} />
        <Route path='/edit-product/:id' element={<EditProduct />} />
        <Route path='/users-table' element={<UsersTable />} />
      </Routes>
    </div>
  );
}

export default App;
