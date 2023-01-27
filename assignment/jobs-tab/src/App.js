import React, { useState } from "react"
import './App.css';
import { AiFillCaretRight } from "react-icons/ai"
import MyData from "./data/mydata";

function App() {
  const url = "https://course-api.com/react-tabs-project";
  // const dat = []
  // async function mainData() {
  //   const fetch_data = await fetch(url);
  //   const fetchJSON = await fetch_data.json();
  //   console.log(fetchJSON);
  //   dat = fetchJSON
  // }
  // mainData()
  const [number, setNumber] = useState(1)

  console.log(MyData);
  function handleNumber(e) {
    console.log(e.target.text);
    if (e.target.text === 'John') {
      setNumber(1)
    } else if
      (e.target.text === 'Smith') {
      setNumber(2)
    } else if (e.target.text === 'Tom') {
      setNumber(3)
    }
  }
  const print = MyData.map(e => {
    if (e.order === number) {
      return (
        <div className="company-content">
          <h2 className="job-title">{e.title}</h2>
          <p className="company-name">{e.company}</p>
          <p className="date">{e.dates}</p>
          <div className="text">
            <AiFillCaretRight />
            <p>{e.duties[0]}</p>
          </div>
          <div className="text">
            <AiFillCaretRight />
            <p>{e.duties[1]}</p>
          </div>
          <div className="text">
            <AiFillCaretRight />
            <p>{e.duties[2]}</p>
          </div>
        </div>
      )
    }
  })

  return (
    <section className="container">
      <h1 className="title">Experience</h1>
      <div className="job">
        <div className="company-tab">
          <h4>
            <a onClick={handleNumber}>John</a>
          </h4>
          <h4>
            <a onClick={handleNumber}>Smith</a>
          </h4>
          <h4>
            <a onClick={handleNumber}>Tom</a>
          </h4>
        </div>
        <div>
          {print}
        </div>
      </div>
    </section>
  );
}

export default App;
