import React from "react";
import { Link } from "react-router-dom";
import BtnAddToCart from "./btntoaddtocart";

class ProductCard extends React.Component {
  render(){
    const { title, thumbnail, price, id } = this.props;
    return (
      <div
        className="product-card"  
      >
        <Link to={`/details/${id}`}>
          <h4>{title}</h4>
          <img
            src={thumbnail}
            alt="title"
            width="90"
          />
          <p>{`R$${price}`}</p>
        </Link>
        <BtnAddToCart
          productInfo={ this.props }
        />
      </div>
    );
  }
}

export default ProductCard;
