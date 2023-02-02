import { useEffect, useState } from 'react';
import './App.css';
// import { fetchAllData, deleteUser, createUser, updateUser } from './services/usersServices';
import { fetchAllData, deleteUser, createUser, updateUser } from './services/axiosUsersServices';
function App() {
  const newUser = {
    id: "",
    username: "",
    age: "",
  }
  const [users, setUsers] = useState([])
  const [isUpdate, setIsUpdate] = useState(false)
  const [currentUser, setCurrentUSer] = useState(newUser)
  const URL = 'http://localhost:8080/users'

  async function handleSubmit(e) {
    e.preventDefault()

    if (!isUpdate) {
      updateUser(e, URL, setUsers)
    } else {
      createUser(currentUser, URL, setUsers, setIsUpdate, setCurrentUSer, newUser)
    }
  }
  useEffect(() => {
    fetchAllData(URL, setUsers)
  }, [])
  async function handleDelete(userId) {
    deleteUser(userId, URL, setUsers)
  }

  async function handleEdit(userId) {
    setIsUpdate(true)
    console.log(userId);

    const filteredUser = users.filter(user => user.id === userId)[0]

    if (filteredUser) {
      setCurrentUSer({ ...currentUser, age: filteredUser.age, username: filteredUser.username, id: filteredUser.id })
    }
  }
  function handleUserName(e) {
    setCurrentUSer({
      ...currentUser, username: e.target.value
    })
  }
  function handleUserAge(e) {
    setCurrentUSer({ ...currentUser, age: e.target.value })
  }
  return (
    <div className="App">
      <h1>Day - 52 - NodeJS FS Module</h1>
      <h3>Create User FORM</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          User name :
          <input type="text" name='username' value={currentUser.username} onChange={handleUserName} />
        </label>
        <br />
        <label htmlFor="">
          Age :
          <input type="text" name='age' value={currentUser.age} onChange={handleUserAge} />
        </label>
        <br />

        <button>{
          isUpdate ? 'update' : 'Submit'
        }</button>
      </form>
      <h3>Users List</h3>
      {
        users && users.map((user, idx) => {
          return (
            <div key={idx}>
              <p>{user.username} : {user.age}</p>
              {" "} <button onClick={() => handleDelete(user.id)}>Delete</button>
              <button onClick={() => { handleEdit(user.id) }}>Edit</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
