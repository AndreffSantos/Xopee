import React from 'react';
import { Link } from 'react-router-dom';
import { CgShoppingCart } from 'react-icons/cg';


class BtnToCartPage extends React.Component {
  render() {
    return (
      <>
        <Link
          className="btn-cart"
          to="/cart"
        >
          <CgShoppingCart />
        </Link>
      </>
    );
  }
}

export default BtnToCartPage;
