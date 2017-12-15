import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Table, UncontrolledCarousel,  Card, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody, Row, Col, Alert } from 'reactstrap';
 import logo from './logo.svg';
 import './App.css';
 import Footer from './Footer';
 import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Mall extends Component {
  render(){
    let listOfProducts = this.props.products.map(product => {
      console.log(product)
      return (

        <Card key={product.id}>
          <CardImg top width="100%" src={product.photo} />
          <CardBody>
            <CardTitle>{product.name}</CardTitle>
            <CardSubtitle>{product.seller}</CardSubtitle>
            <br/>
               <CardSubtitle>Price: ${product.price}</CardSubtitle>
               <br/>
               <CardSubtitle>Commission: ${product.commission}</CardSubtitle>
               <br/>
            <CardText>{product.description}</CardText>
            <CardText>{product.ethical===true && <i class="material-icons">favorite</i>}{product.on_sale===true && <i class="material-icons">monetization_on</i>}{product.limited_time===true && <i class="material-icons">schedule</i>}{product.handmade===true && <i class="material-icons">color_lens</i>}</CardText>
            <Button>Suggest!</Button>
          </CardBody>
        </Card>

      )
    })
    return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Matchy-Matchy</h1>
          <h2>Crowd Sourced Personal Shopping</h2>
      </header>
      <Alert color="danger"></Alert>
      <div>
      <Form>
        <FormGroup>
          <Label for="Product">Search</Label>
          <Input type="Product" name="Product" id="Product" placeholder="Enter Product Name" />
        </FormGroup>
        </Form>
        <br/>
        <br/>
        <CardColumns>
{listOfProducts}
 </CardColumns>
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

function mapStateToProps(state){
  return {products: state.products};
}


export default connect(mapStateToProps, null)(Mall);
