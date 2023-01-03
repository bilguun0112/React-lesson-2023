import './App.css';
import HelloWorld from './HelloWorld';
function App() {

    const user = {
      firstName: "Harper",
      lastName : "Perez"
    }

  function formatName(user){
    return user.firstName + ' ' + user.lastName
  }

  const customStyle = {
    color: "#2ecc71",
    fontSize: "26p"
  }
  


  const name = "Bilguun";
  // const element = <h1>Hello , {name}</h1>
  // const element = (
  // <h1>
  //   Hello {formatName(user)}!
  // </h1>
  // )

  const element = (<h1 style={customStyle}>Hello, Teacher</h1>)

  const secondElement = (<p className="my-text">My Next Text</p>)
  return (
    <div>
      {element}
      {secondElement}
      <HelloWorld />
    </div>
  );



}



export default App;
