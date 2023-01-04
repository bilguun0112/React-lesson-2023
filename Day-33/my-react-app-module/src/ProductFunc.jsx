function ProductFunc (props){
    return (
        <div className="main container d-flex gap-5 justify-content-center align-items-center my-2">
        <img src={props.productImageUrl} className="mainImg" />

        <div className="right w-25">
          <div className="title">
            <img src="products/arrow.png" alt="logo" />
            <h5>{props.votes}</h5>
          </div>
          <a className="App-link" href={props.url}>
            {props.title}
          </a>
          <p className="text-start">{props.description}</p>
          <div className="bottom">
            Submitted by : <img src={props.submitterAvatarUrl} className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
    )
}

export default ProductFunc