import React from 'react';
import ProductDetailpage from './pages/productdetailpage';
import Cartpage from './pages/cartpage';
import Homepage from './pages/homepage';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/details/:id" component={ ProductDetailpage } />
          <Route path="/cart" component={ Cartpage } />
          <Route path="/" component={ Homepage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
