import './App.css';

import products from "./Seed"
function Profile(props){
  const {img , name , age, hobby} = props;
  return (
  <div className="Profile">
    <img src={img} alt="people" />
    <p>name : {name} </p>
    <p>age : {age} </p>
    <p>hobby : {hobby}</p>
  </div>
)
}

function App() {
  // const user = {
  //   img : "logo192.png"
  //   ,name: "John Smith",
  //   age : 20 ,
  //   hobby : "fishing"
  
  return (
    <div className="App">
       {/* Space syntax */}
      {/* <Profile 
        img = "avatars/kristy.png"
        name = "John Smith"
        age = {20}
        hobby = "play dota"
        // {...user}
        />
        <Profile
        img = "avatars/stevie.jpg"
        name = "Trafalgar D. Water Law"
        age = {22}
        hobby = "healing"
        /> */}
        {products.map((product) => {
          console.log(product);
        })}
    </div>
  );
}

export default App;
