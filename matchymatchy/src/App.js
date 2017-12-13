import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import { Button, Container, Row, Col, Alert } from 'reactstrap';
import Main from './Main';
import Shopper from './Shopper';
import MatchMaker from './MatchMaker';
import Seller from './Seller';
import Mall from './Mall';
import EditProduct from './EditProduct';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Route exact path="/" component={Main}/>
          <Route exact path="/shopper" component={Shopper}/>
          <Route exact path="/seller" component={Seller}/>
          <Route exact path="/mall" component={Mall}/>
          <Route exact path="/matchmaker" component={MatchMaker}/>
          <Route exact path="/editproduct" component={EditProduct}/>
        </div>
      </Router>

    );
  }
}

export default App;
