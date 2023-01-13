
import './App.css';
import { useState } from 'react';

function App() {
const [users, setUsers] = useState([])
function handleRegister(event){
  event.preventDefault();
  console.log(event.target.firstname.value);
  console.log(event.target.lastname.value);
  console.log(event.target.password.value);
  console.log(event.target.cPassword.value);

  const user = {
    firstname : event.target.firstname.value,
    lastname : event.target.lastname.value,
    password : event.target.password.value,
    cPassword : event.target.cPassword.value,
  }
setUsers([...users, user])
}
  return (

    <div className="App">
     <form action="" onSubmit={handleRegister}>
      <label htmlFor="" >FirstName : </label>
      <input name="firstname" type="text" />
      <label htmlFor="" >LastName : </label>
      <input name="lastname" type="text" />
      <label htmlFor="" >Password : </label>
      <input name="password" type="text" />
      <label htmlFor="" >Confirm Password : </label>
      <input name="cPassword" type="text" />
      <button>Register</button>
     </form>

    <h2>User Preview</h2>
    {users.map(u => {
      return(
        <div>
          <div>{u.firstname}</div>
          <div>{u.lastname}</div>
        </div>
      )
    })}

    </div>
  );

}
export default App;
