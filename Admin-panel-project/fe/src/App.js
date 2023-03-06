import { Route, Routes } from 'react-router-dom';
import ResponsiveDrawer from './components/Drawer';
import CreateProduct from './components/submitFunc';
import DataTable from './components/productTable';
import EditProduct from './pages/editProduct';
import Users from './pages/users';
import UsersTable from './pages/usersTable';
import EditUsers from './pages/editUser';
import HomePage from './pages/homePage';
import UserRole from './components/uesrRole';
import UsersRoleTable from './pages/usersRoleTable';
import EditUserRole from './pages/EditUserRole';

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create-product' element={<CreateProduct />} />
        <Route path='/users' element={<Users />} />
        <Route path='/product-table' element={<DataTable />} />
        <Route path='/edit-product/:id' element={<EditProduct />} />
        <Route path='/users/:id' element={<EditUsers />} />
        <Route path='/users-table' element={<UsersTable />} />
        <Route path='/users-role-table' element={<UsersRoleTable />} />
        <Route path='/users-role-add' element={<UserRole />} />
        <Route path='/users-role-edit' element={<EditUserRole />} />

      </Routes>
    </div>
  );
}

export default App;
