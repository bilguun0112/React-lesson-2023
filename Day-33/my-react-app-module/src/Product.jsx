import React from "react";
import yellow from "./img/image-yellow.png";
import arrow from "./img/arrow.png";
class Product extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div className="main container d-flex gap-5 justify-content-center align-items-center my-2">
        <img src={yellow} className="mainImg" />

        <div className="right w-25">
          <div className="title">
            <img src={arrow} alt="logo" />
            <h5>55</h5>
          </div>
          <a className="App-link" href="#">
            Haught or Naught
          </a>
          <p className="text-start">High-minded or absent-minded? You decide.</p>
          <div className="bottom">
            Submitted by : <img src="avatars/daniel.jpg" className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
    }
}

export default Product;