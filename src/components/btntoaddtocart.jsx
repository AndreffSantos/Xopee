import React from 'react';
import { connect } from 'react-redux';
import { add_to_cart } from '../redux/index';

class BtnAddToCart extends React.Component {
  handleClick = () => {
    const { productInfo, dispatch } = this.props;
    dispatch(add_to_cart(productInfo));
  }
  render() {
    return (
      <button
        type='button'
        onClick={ this.handleClick }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

export default connect()(BtnAddToCart);
