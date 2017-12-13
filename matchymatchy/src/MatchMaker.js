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


 class MatchMaker extends Component{
   render(){
     return(
       <div className="App">
         <header className="App-header">
           <h1 className="App-title">Matchy-Matchy</h1>
           <h2>Crowd Sourced Personal Shopping</h2>
       </header>
       <Alert color="danger"></Alert>
       <div>
       <Button tag={Link} to="/mall">Go to the Mall</Button>
       <br/>
       <br/>
         <Row>
           <Col sm="6">
             <Card body>
               <CardTitle>Add New Suggestion</CardTitle>
               <CardText>Add Description Here: </CardText>
               <input type="text"></input>
               <br/>
                 <CardText>Add Retailer Link here: </CardText>
                 <input type="text"></input>
                 <br/>
                 <CardText>Add Request Number here: </CardText>
                 <input type="text"></input>
                 <br/>
               <Button>Post</Button>
             </Card>
           </Col>
           <Col sm="6">
             <Card body>
               <CardTitle>MatchMaker Stats</CardTitle>
               <br/>
               <CardText>Sales Made: </CardText>
               <CardText>Sales Total: </CardText>
                <CardText>Commission Total: </CardText>
                <CardText>Unredeemed Commission: </CardText>
                <br/>
                <br/>
                <br/>
                <br/>
               <Button>Transfer Funds</Button>
             </Card>
           </Col>
         </Row>
         <div>
           <br/>
           <h2>Recent Requests</h2>
           <br/>
       <CardColumns>
  <Card>
    <CardImg top width="100%" src="https://images.unsplash.com/photo-1497621775992-d6f40284424a?auto=format&fit=crop&w=1051&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="Card image cap"/>
    <CardBody>
      <CardSubtitle>Match For:</CardSubtitle>
      <CardTitle>Black Dress</CardTitle>
      <CardText>I need a splash of color to go with this black dress.</CardText>
      <CardText>Request Number: </CardText>
    </CardBody>
  </Card>
  <Card>
    <CardImg top width="100%" src="https://images.unsplash.com/photo-1489972536996-943907ea1cd8?auto=format&fit=crop&w=675&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="Card image cap" />
    <CardBody>
      <CardSubtitle>Match For:</CardSubtitle>
      <CardTitle>Winter Coat</CardTitle>
      <CardText>I need a hat and gloves to go with this coat.</CardText>
      <CardText>Request Number: </CardText>
    </CardBody>
  </Card>
  <Card>
    <CardImg top width="100%" src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="Card image cap" />
    <CardBody>
      <CardSubtitle>Match For:</CardSubtitle>
      <CardTitle>Striped Suit</CardTitle>
      <CardText>I need shoes for this suit.</CardText>
        <CardText>Request Number: </CardText>
    </CardBody>
  </Card>
  <Card>
    <CardImg top width="100%" src="https://images.unsplash.com/photo-1493219642556-5084f645ddb4?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="Card image cap" />
    <CardBody>
      <CardSubtitle>Match For:</CardSubtitle>
      <CardTitle>Shoes</CardTitle>
      <CardText>I need a purse to go with these shoes</CardText>
      <CardText>Request Number: </CardText>
    </CardBody>
  </Card>
  <Card>
    <CardImg top width="100%" src="https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?auto=format&fit=crop&w=980&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="Card image cap" />
    <CardBody>
      <CardSubtitle>Match For:</CardSubtitle>
      <CardTitle>Pink Blouse</CardTitle>
      <CardText>I need a skirt to put with this blouse.</CardText>
        <CardText>Request Number: </CardText>
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
export default MatchMaker;
