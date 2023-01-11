import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import products from "./Seed";


function ProductFunc(props) {
  const [stars , setStars] = useState(1)
  const [votes, setVotes] = useState(props.votes)

function handleDownVote(){
  if (stars <= 0 ){
    setStars(0)
  } else {
    setStars(stars - 1)
  }
  
}
  function handleUpVote(props) {

    setVotes(votes + 1) ;
    if (stars > 5){
      setStars(0)
    } else {
      setStars(stars + 1)
    }
    


    // console.log(props.id);
    // let newProducts = [];
    // const foundProduct = products.map(product => {
    //   if (product.id === props.id) {
    //     product.votes = product.votes + 1;
    //   }
    //   return product
    // })
    // console.log(foundProduct);

  }

  return (
    <div className="main container d-flex gap-5 justify-content-center align-items-center my-2">
      <img src={props.productImageUrl} className="mainImg" />

      <div className="right w-25">
        <div className="title">
          <a href="" onClick={(e) => {
            e.preventDefault()
            { handleUpVote(props) }
          }}> <img src="products/arrow.png" alt="logo" /> </a>
           <a href="" onClick={(e) => {
            e.preventDefault()
            { handleDownVote(props) }
          }}> <img src="products/arrow.png" alt="logo" style={{transform: "rotate(180deg)"}}/> </a>

          <h5>{votes}</h5>
        </div>
        <a className="App-link" href={props.url}>
          {props.title}
        </a>
        <p className="text-start">{props.description}</p>
        <div className="bottom">
          Submitted by : <img src={props.submitterAvatarUrl} className="App-logo" alt="logo" />
        </div>
        <div>
          <Rating
            initialValue={stars} />

        </div>
      </div>
    </div>
  )
}

export default ProductFunc