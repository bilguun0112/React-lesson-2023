
import './App.css';
import { useEffect, useState } from 'react';
import InputForm from './components/inputForm';
import UpdateForm from './components/UpdateForm';

const GET_DATA_URL = 'http://localhost:8080/data';
const DELETE_DATA_URL = 'http://localhost:8080/data';


function App() {
  /****
   *  name
   *  major
   *  
   *  
   */
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpenForm, setIsOpenForm] = useState(false)
  const [currentData, setCurrentData] = useState({})


  async function deleteData(data) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    const FETCHED_DATA = await fetch(DELETE_DATA_URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setData(FETCHED_JSON)
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const FETCHED_DATA = await fetch(GET_DATA_URL)
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setData(FETCHED_JSON);
  }
  function handleEdit(data) {
    console.log(data);
    setIsOpenForm(true)
    setCurrentData(data)
  }
  function handleDelete(id) {
    const data = {
      id: id
    }
    deleteData(data)
  }
  return (
    <div className="App">
      <h1>Day 51 React Express Fullstack app - withOUT data BASE</h1>
      <InputForm
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setData={setData} />
      {isOpenForm ? <UpdateForm
        setCurrentData={setCurrentData}
        currentData={currentData}
        setData={setData}
      /> : <div></div >}
      {
        isLoading ? '... loading' :
          (data && data.map((d, idx) => {
            return (
              <div key={idx}>
                <p>
                  {d.name} -- {d.major}
                </p>
                <button
                  onClick={() => handleDelete(d.id)}
                >Delete</button>
                <button
                  onClick={() => { handleEdit(d) }}
                >Edit</button>
              </div>
            )
          }))}
    </div>
  )
}



export default App;
