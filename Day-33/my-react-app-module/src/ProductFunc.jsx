function ProductFunc (){
    return (
        <div className="main container d-flex gap-5 justify-content-center align-items-center my-2">
        <img src="img/image-yellow.png" className="mainImg" />

        <div className="right w-25">
          <div className="title">
            <img src="img/arrow.png" alt="logo" />
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
    )
}

export default ProductFunc