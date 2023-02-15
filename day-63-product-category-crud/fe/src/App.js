import { Routes, Route } from 'react-router-dom';
import './App.css';
import Categories from './components/categories';
import CategoryForm from './components/catergoryForm';

function App() {
  return (
    <div className="App">
      <h1> Day 63 Product category CRUD</h1>
      <Routes>
        <Route path="/category/add" element={<CategoryForm />} />
        <Route path="/category/list" element={<Categories />} />
        <Route path="/category/edit/:id" element={null} />
        <Route path="/category/delete/:id" element={null} />
      </Routes>
    </div>
  );
}

export default App;
