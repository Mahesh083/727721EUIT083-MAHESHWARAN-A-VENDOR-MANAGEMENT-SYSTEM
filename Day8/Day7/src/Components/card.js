import React from "react";
import '../Styles/Card.css';
const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  // const handleAddToCart = () => {
  //   const { product, addToCart } = this.props;
  //   addToCart(product);
  // };
  return (
    <div className="dis">
    <div className="cards">
      <div className="dis">
      
        <img src={img} alt="" />
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price}</p>
         <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
    </div>
  );
};

export default Cards;