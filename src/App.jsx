import React from 'react';
import Homepage from './pages/homepage';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Homepage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
