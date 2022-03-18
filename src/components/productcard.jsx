import React from "react";

class ProductCard extends React.Component {
  render(){
    const { title, thumbnail, price } = this.props;
    return (
      <div
        className="product-card"  
      >
        <h4>{title}</h4>
        <img
          src={thumbnail}
          alt="title"
          width="90"
        />
        <p>{`R$${price}`}</p>
      </div>
    );
  }
}

export default ProductCard;
