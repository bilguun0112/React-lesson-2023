import React from "react";
import yellow from "./img/image-rose.png";
import arrow from "./img/arrow.png";
class Product3 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main container d-flex gap-5 justify-content-center align-items-center my-2">
        <img src={yellow} className="mainImg" />

        <div className="right w-25">
          <div className="title">
            <img src={arrow} alt="logo" />
            <h5>23</h5>
          </div>
          <a className="App-link text-start" href="#">
            Supermajority: The Fantasy Congress League
          </a>
          <p className="text-start">
            Earn points when your favorite policticians pass legislation.
          </p>
          <div className="bottom">
            Submitted by :{" "}
            <img src="avatars/elyse.png" className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Product3;
