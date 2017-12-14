import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import Footer from './Footer';
import { Button, Card, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody, Alert  } from 'reactstrap';
 import logo from './logo.svg';
 import './App.css';
 import {
   BrowserRouter as Router,
   Route,
   Link
 } from 'react-router-dom';
 import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Main extends Component{
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Matchy-Matchy</h1>
          <h2>Crowd Sourced Personal Shopping</h2>
      </header>
      <Alert color="danger"></Alert>
      <div>
      <CardDeck>
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
        <CardBody>
          <CardTitle>Shop</CardTitle>
          <CardSubtitle>Find Matches!</CardSubtitle>
          <CardText>Free cutting edge fashion advice to find great matches for what you already own!</CardText>
          <Button color="danger" tag={Link} to="/shopper">Enter</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
        <CardBody>
          <CardTitle>MatchMake</CardTitle>
          <CardSubtitle>Earn Commissions</CardSubtitle>
          <CardText>Turn your fashion sense into cash and build your personal shopper reputation - matchmake!</CardText>
          <Button color="danger" tag={Link} to="/matchmaker">Enter</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1512445239398-6d0c4c575b89?auto=format&fit=crop&w=1051&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="Card image cap" />
        <CardBody>
          <CardTitle>Sell</CardTitle>
          <CardSubtitle>Post Merchandise</CardSubtitle>
          <CardText>Make your products available to shoppers and matchmakers.</CardText>
          <Button color="danger" tag={Link} to="/seller">Enter</Button>
        </CardBody>
      </Card>
    </CardDeck>
      </div>
      <br/>
      <br/>
      <br/>
      <Alert color="danger" id="bottom"></Alert>
      <Footer />
      </div>
    )
  }
}

export default Main;
