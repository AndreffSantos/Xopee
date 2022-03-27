import React from 'react';
import Header from '../components/header';
import { connect } from 'react-redux';

class Cartpage extends React.Component {
  render() {
    const { match, cartList } = this.props;
    return (
      <div className='cart-container'>
        <Header
          url={ match.url }
        />
        { cartList.length === 0
          ? <h2>Seu Carrinho esta vazio</h2>
          : cartList.map((product) => (
            <div key={product.id}>
              <p>{product.title}</p>
            </div>
          )) }
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartList: state.cartList,
});

export default connect(mapStateToProps)(Cartpage);
