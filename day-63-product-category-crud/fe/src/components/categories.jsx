import { useState, useEffect } from "react";
import { toast } from 'react-toastify'
import Button from '@mui/material/Button'
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Categories() {
  const navigate = useNavigate()
  const [categories, setCategories] = useState([]);
  const URL = "http://localhost:8080/category";

  useEffect(() => {
    fetchCategories();
  }, []);
  // const navigate = useNavigate()
  async function fetchCategories() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      setCategories(FETCHED_JSON.data);
    }
  }
  async function handleCategoryDelete(categoryId) {
    console.log(categoryId)
    const options = {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        categoryId: categoryId
      })
    }

    const FETCHED_DATA = await fetch(URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json()
    if (FETCHED_JSON) {
      setCategories(FETCHED_JSON.data)
      toast(`Category with id=${categoryId} deleted successfully`)
    }
  }

  async function handleSearchSubmit(e) {
    e.preventDefault();
    const searchInput = e.target.search.value;

    const SEARCH_URL = `http://localhost:8080/search?value=${searchInput}`;
    const FETCHED_DATA = await fetch(SEARCH_URL)
    const FETCHED_JSON = await FETCHED_DATA.json()

    if (FETCHED_JSON.status === 'success') {
      setCategories(FETCHED_JSON.data)
    }
  }
  function handleAdd() {
    navigate('/category/add')
  }

  return (
    <div>
      <h1>Category List</h1>
      <form onSubmit={handleSearchSubmit}>
        <label>
          <input type="text" name="search" />
          <Button type="submit" variant="outlined">Search</Button>
          <Button variant="outlined" onClick={handleAdd}>Add</Button>
        </label>
      </form>

      <table style={{ margin: 'auto' }}>
        <thead>
          <tr>
            <td>Category ID</td>
            <td>Category Name</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map((category, index) => {
              return (
                <tr key={index}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>
                    <a href={`/category/edit/${category.id}`}>Edit</a>
                  </td>
                  <td>
                    <Button variant="outlined" color="secondary" onClick={() => handleCategoryDelete(category.id)}>Delete</Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
