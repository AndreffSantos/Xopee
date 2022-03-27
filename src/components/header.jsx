import React from 'react';
import BtnToCartPage from './btntocartpage';
import SearchBar from "../components/searchbar";
import { RiShoppingBasketFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const { url, change, click, input } = this.props;
    return (
      <header className='header'>
        <Link to="/" className='logo'>
          <RiShoppingBasketFill className='logo-icon' />
          <p>Xopee</p>
        </Link>
        { url !== '/' ? null : <SearchBar
          change={ change }
          click={ click }
          input={ input }
        />}
        <BtnToCartPage />
      </header>
    );
  }
}

export default Header;