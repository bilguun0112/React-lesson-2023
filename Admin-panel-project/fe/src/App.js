import { Route, Routes } from 'react-router-dom';
import ResponsiveDrawer from './components/Drawer';
import CreateProduct from './components/submitFunc';
import DataTable from './components/productTable';
import EditProduct from './pages/editProduct';
import Users from './pages/users';
import UsersTable from './pages/usersTable';
import EditUsers from './pages/editUser';

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      <Routes>
        <Route path='/create-product' element={<CreateProduct />} />
        <Route path='/users' element={<Users />} />
        <Route path='/product-table' element={<DataTable />} />
        <Route path='/edit-product/:id' element={<EditProduct />} />
        <Route path='/users/:id' element={<EditUsers />} />
        <Route path='/users-table' element={<UsersTable />} />
      </Routes>
    </div>
  );
}

export default App;
