import React from 'react';
import BtnAddToCart from '../components/btntoaddtocart';
import Header from '../components/header';
import { getProductFromId } from '../services/fetchApi';

class ProductDetailpage extends React.Component {
  constructor() {
    super();
    this.state = {
      productInfo: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id }} } = this.props;
    getProductFromId(id).then((response) => {
      this.setState({
        productInfo: response,
      });
    });
  }

  render() {
    const { productInfo: { title, pictures, thumbnail_id, attributes} } = this.state;
    return (
      <>
        <Header />
        { title === undefined ? <h1>Carregando...</h1> : (
          <div className='container-detail'>
            <h2>{`${title}`}</h2>
            <div className='container-detail2'>
              <div>
                <img src={pictures[0].secure_url} alt={ thumbnail_id } />
              </div>
              <div>
                <p>Especificações: </p>
                { attributes.map(({ name, value_name}) => (
                  <p key={name}>{ `${name}: ${value_name}` }</p>
                  )) }
              </div>
              <BtnAddToCart />
            </div>
          </div>

        ) }
      </>
    );
  }
}

export default ProductDetailpage;
