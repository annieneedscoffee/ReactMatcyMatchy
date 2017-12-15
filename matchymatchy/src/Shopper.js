import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody, Row, Col, Alert } from 'reactstrap';
 import logo from './logo.svg';
 import './App.css';
 import Footer from './Footer';
 import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

 class Shopper extends Component{
   render(){
     return(
       <div className="App">
         <header className="App-header">
           <h1 className="App-title">Matchy-Matchy</h1>
           <h2>Crowd Sourced Personal Shopping</h2>
       </header>
       <Alert color="danger"></Alert>
       <div>
         <Row>
           <Col sm="6">
             <Card body>
               <CardTitle>Add New Request</CardTitle>
               <CardText>Add What you need a Match for: </CardText>
               <input type="text"></input>
               <br/>
             <CardText>Add Description Here: </CardText>
               <input type="text"></input>
               <br/>
                 <CardText>Add Photo URL here: </CardText>
                 <input type="text"></input>
                 <br/>
               <Button>Post</Button>
             </Card>
           </Col>
           <Col sm="6">
             <Card body>
               <CardTitle>Shopping Cart</CardTitle>
               <br/>
               <br/>
               <CardText>Contents: </CardText>
               <CardText>Subtotal: </CardText>
               <CardText>Tax: </CardText>
                <CardText>Total: </CardText>
                <br/>
                <br/>
                <br/>
               <Button>Check Out</Button>
             </Card>
           </Col>
         </Row>
         <div>
           <br/>
           <h2>Matches</h2>
           <br/>
       <CardColumns>
  <Card>
    <CardImg top width="100%" src="https://images.unsplash.com/photo-1465199549974-7d82de6e2830?auto=format&fit=crop&w=1489&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="Card image cap" />
    <CardBody>
      <CardSubtitle>Match For:</CardSubtitle>
      <CardTitle>Black Dress</CardTitle>
      <CardText>This is shawl from Banana Republic. It would add a nice splash of color.</CardText>
      <Button>Add to Cart</Button> <Button>Product Details</Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg top width="100%" src="https://images.unsplash.com/photo-1452689842785-5f14840dca48?auto=format&fit=crop&w=700&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="Card image cap" />
    <CardBody>
      <CardSubtitle>Match For:</CardSubtitle>
      <CardTitle>Winter Coat</CardTitle>
      <CardText>Cute hat and glove set from Patagonia.</CardText>
      <Button>Add to Cart</Button> <Button>Product Details</Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg top width="100%" src="https://images.unsplash.com/photo-1466699189113-a3b204834b96?auto=format&fit=crop&w=1490&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
    <CardBody>
      <CardSubtitle>Match For:</CardSubtitle>
      <CardTitle>Striped Suit</CardTitle>
      <CardText>These shoes would go well with the suit you posted.</CardText>
      <Button>Add to Cart</Button> <Button>Product Details</Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg top width="100%" src="https://images.unsplash.com/photo-1484527273420-c598cb0601f8?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
    <CardBody>
      <CardSubtitle>Match For:</CardSubtitle>
      <CardTitle>Navy Shoes</CardTitle>
      <CardText>This is purse comes in lots of colors, including navy.</CardText>
      <Button>Add to Cart</Button> <Button>Product Details</Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg top width="100%" src="https://images.unsplash.com/photo-1484328256245-34b71758c30b?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
    <CardBody>
      <CardSubtitle>Match For:</CardSubtitle>
      <CardTitle>Pink Blouse</CardTitle>
      <CardText>This is a skirt from J. Crew and it's on sale!</CardText>
      <Button>Add to Cart</Button> <Button>Product Details</Button>
    </CardBody>
  </Card>
</CardColumns>
</div>


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
export default Shopper;
