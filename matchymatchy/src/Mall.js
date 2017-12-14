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
  createListItems(){
    return this.props.products.map((product) =>{
      return(
        <div key={product.id}>
          <p>{product.name}</p>
        </div>
      )
    })
  }
  render(){
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
   <Card>
     <CardImg top width="100%" src="https://images.unsplash.com/photo-1486821416551-68a65ef4d618?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
     <CardBody>
       <CardTitle>Ornate Heart Pendant</CardTitle>
       <CardText>{this.createListItems()}</CardText>
       <CardSubtitle>Urban Outfitters</CardSubtitle>
       <br/>
          <CardSubtitle>Price: $35.00</CardSubtitle>
          <br/>
          <CardSubtitle>Commission: $5.00</CardSubtitle>
          <br/>
       <CardText>Hand-crafted heart pendant. Each one is unique.</CardText>
       <Button>Suggest!</Button>
     </CardBody>
   </Card>
   <Card>
     <CardImg top width="100%" src="https://images.unsplash.com/photo-1505364770813-949f7f90cf08?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
     <CardBody>
     <CardTitle>Chenile Sweater</CardTitle>
     <CardSubtitle>Patagonia</CardSubtitle>
     <br/>
        <CardSubtitle>Price: $19.99 </CardSubtitle>
        <br/>
        <CardSubtitle>Commission: $1.99</CardSubtitle>
        <br/>
     <CardText>Cozy pink sweater. Made in the USA.</CardText>
     <Button>Suggest!</Button>
     </CardBody>
   </Card>
   <Card>
     <CardImg top width="100%" src="https://images.unsplash.com/photo-1416838375725-e834a83f62b7?auto=format&fit=crop&w=1052&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
     <CardBody>
     <CardTitle>Denim Leggings</CardTitle>
     <CardSubtitle>J. Crew</CardSubtitle>
     <br/>
        <CardSubtitle>Price: $24.99</CardSubtitle>
        <br/>
        <CardSubtitle>Commission: $3.99</CardSubtitle>
        <br/>
     <CardText>Fitted denim color leggings.</CardText>
     <Button>Suggest!</Button>
     </CardBody>
   </Card>
   <Card>
     <CardImg top width="100%" src="https://images.unsplash.com/photo-1502148589715-3f209594d750?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
     <CardBody>
     <CardTitle>Tie and Pocket Square</CardTitle>
     <CardSubtitle>Banana Republic</CardSubtitle>
     <br/>
        <CardSubtitle>Price: $55.95</CardSubtitle>
        <br/>
        <CardSubtitle>Commission: $10.00</CardSubtitle>
        <br/>
     <CardText>Silk tie and matching pocket square sold as a set.</CardText>
     <Button>Suggest!</Button>
     </CardBody>
   </Card>
   <Card>
     <CardImg top width="100%" src="https://images.unsplash.com/photo-1484328256245-34b71758c30b?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
     <CardBody>
     <CardTitle>Pink Lacy Skirt</CardTitle>
     <CardSubtitle>Dillards</CardSubtitle>
     <br/>
        <CardSubtitle>Price: $29.99</CardSubtitle>
        <br/>
        <CardSubtitle>Commission: $3.00</CardSubtitle>
        <br/>
     <CardText>Versatile pink skirt. Machine washable cotton.</CardText>
     <Button>Suggest!</Button>
     </CardBody>
   </Card>
   <Card>
     <CardImg top width="100%" src="https://images.unsplash.com/photo-1465199549974-7d82de6e2830?auto=format&fit=crop&w=1489&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="Card image cap" />
     <CardBody>
       <CardTitle>Silk Pashmina</CardTitle>
       <CardSubtitle>Banana Republic</CardSubtitle>
       <br/>
          <CardSubtitle>Price: $49.99</CardSubtitle>
          <br/>
          <CardSubtitle>Commission: $8.00</CardSubtitle>
          <br/>
       <CardText>Soft silk pashmina in a variety of colors - measures 24 by 40 inches</CardText>
       <Button>Suggest!</Button>
     </CardBody>
   </Card>
   <Card>
     <CardImg top width="100%" src="https://images.unsplash.com/photo-1452689842785-5f14840dca48?auto=format&fit=crop&w=700&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="Card image cap" />
     <CardBody>
     <CardTitle>Hat and Mittens Set</CardTitle>
     <CardSubtitle>Patagonia</CardSubtitle>
     <br/>
        <CardSubtitle>Price: $24.99</CardSubtitle>
        <br/>
        <CardSubtitle>Commission: $5.00</CardSubtitle>
        <br/>
     <CardText>Cozy wool hat and mittens. Made in the USA.</CardText>
     <Button>Suggest!</Button>
     </CardBody>
   </Card>
   <Card>
     <CardImg top width="100%" src="https://images.unsplash.com/photo-1466699189113-a3b204834b96?auto=format&fit=crop&w=1490&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
     <CardBody>
     <CardTitle>Mens Dress Shoes</CardTitle>
     <CardSubtitle>J. Crew</CardSubtitle>
     <br/>
        <CardSubtitle>Price: $79.99</CardSubtitle>
        <br/>
        <CardSubtitle>Commission: $15.00</CardSubtitle>
        <br/>
     <CardText>Fine leather - available in a variety of colors and sizes.</CardText>
     <Button>Suggest!</Button>
     </CardBody>
   </Card>
   <Card>
     <CardImg top width="100%" src="https://images.unsplash.com/photo-1484527273420-c598cb0601f8?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
     <CardBody>
     <CardTitle>Leather Purse</CardTitle>
     <CardSubtitle>Banana Republic</CardSubtitle>
     <br/>
        <CardSubtitle>Price: $65.00</CardSubtitle>
        <br/>
        <CardSubtitle>Commission: $10.00</CardSubtitle>
        <br/>
     <CardText>Genuine leather - available in brown, black, red, and navy.</CardText>
     <Button>Suggest!</Button>
     </CardBody>
   </Card>
   <Card>
     <CardImg top width="100%" src="https://images.unsplash.com/photo-1492611772339-c581bbfb4dee?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
     <CardBody>
     <CardTitle>Mans Analog Watch</CardTitle>
     <CardSubtitle>Dillards</CardSubtitle>
     <br/>
        <CardSubtitle>Price: $65.00</CardSubtitle>
        <br/>
        <CardSubtitle>Commission: $12.00</CardSubtitle>
        <br/>
     <CardText>High quality mans watch. 10 year warranty included.</CardText>
     <Button>Suggest!</Button>
     </CardBody>
   </Card>
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


export default connect(mapStateToProps)(Mall);
