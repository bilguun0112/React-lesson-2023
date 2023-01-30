import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  const [upName, setUpName] = useState("")
  const URL = 'http://localhost:8080/users'
  async function handleSubmit(e) {
    e.preventDefault()
    const postData = {
      username: e.target.username.value,
      age: e.target.age.value
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    }
    const FETCHED_DATA = await fetch(URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setUsers(FETCHED_JSON.data)
  }
  useEffect(() => {
    fetchAllData()
  }, [])

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL)
    const FETCHED_JSON = await FETCHED_DATA.json()
    console.log('b', FETCHED_JSON)
    setUsers(FETCHED_JSON.data)
  }

  async function handleDelete(userId) {
    const options = {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        userId: userId
      })
    }
    const FETCHED_DATA = await fetch(URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setUsers(FETCHED_JSON.data)
  }

  function handleUpName(e) {
    setUpName({})
  }
  return (
    <div className="App">
      <h1>Day - 52 - NodeJS FS Module</h1>
      <h3>Create User FORM</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          User name :
          <input type="text" name='username' />
        </label>
        <br />
        <label htmlFor="">
          Age :
          <input type="text" name='age' />
        </label>
        <br />
        <button>Submit</button>
      </form>
      <h3>Users List</h3>
      {
        users && users.map((user, idx) => {
          return (
            <div key={idx}>
              <p>{user.username} : {user.age}</p>
              {" "} <button onClick={() => handleDelete(user.id)}>Delete</button>
              <label htmlFor="">
                Update :
                <input type="text" name='updateName' value={upName} />
              </label>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
