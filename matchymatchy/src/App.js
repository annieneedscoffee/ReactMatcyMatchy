import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import { Button, Container, Row, Col, Alert } from 'reactstrap';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Matchy-Matchy</h1>
          <h2>Crowd Sourced Personal Shopping</h2>
      </header>
      <Alert color="danger"></Alert>
      <Main />
      <br/>
      <br/>
      <br/>
      <Alert color="danger" id="bottom"></Alert>
      <Footer />
      </div>
    );
  }
}

export default App;
