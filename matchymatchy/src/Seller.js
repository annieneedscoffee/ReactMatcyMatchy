import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Table, Alert } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Seller extends Component {
  render() {
    let listMyProducts = this.props.products.map(product => {
      console.log(product)
      return (

        <tr>
          <th scope="row">{product.id}</th>
          <td>{product.name}</td>
          <td>${product.price}</td>
            <td><Button tag={Link} to="/editproduct">Click Here</Button></td>
              <td><Button>Delete</Button></td>
        </tr>

      )
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Matchy-Matchy</h1>
          <h2>Crowd Sourced Personal Shopping</h2>
      </header>
      <Alert color="danger"></Alert>
      <div>
      <h1>Post a New Product</h1>
      <Form>
        <FormGroup>
          <Label for="Product"></Label>
          <Input type="Product" name="Product" id="Product" placeholder="Enter Product Name" />
        </FormGroup>
        <FormGroup>
          <Label for="Photo">Photo</Label>
          <Input type="Photo" name="Photo" id="Photo" placeholder="Enter Photo URL" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select All Sizes Available</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>one size</option>
            <option>0</option>
            <option>2</option>
            <option>4</option>
            <option>6</option>
            <option>8</option>
            <option>10</option>
            <option>12</option>
            <option>14</option>
            <option>16</option>
            <option>18</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Describe the Product</Label>
          <Input type="textarea" name="text" id="exampleText" placeholder="Decribe the product here."/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Price: $</Label>
          <Input type="textarea" name="text" id="Price" placeholder="Enter the price in dollars."/>
        </FormGroup>
        <FormGroup>
          <Label for="Commission">Commission: $</Label>
          <Input type="textarea" name="text" id="Price" placeholder="Enter the commission you will pay per item sold."/>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            On Sale <i class="material-icons">monetization_on</i>
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Limited Time Only <i class="material-icons">schedule</i>
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Hand Made <i class="material-icons">color_lens</i>
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Ethically Sourced <i class="material-icons">favorite</i>
          </Label>
        </FormGroup>
        <Button>Submit</Button>
        <br/>
      </Form>
      <br/>
      <h1>Products Currently Posted</h1>
      <br/>
      <Table striped>
  <thead>
    <tr>
      <th>Product ID</th>
      <th>Name</th>
      <th>Price</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
{listMyProducts}
  </tbody>
</Table>
      </div>
      <br/>
      <br/>
      <br/>
      <Alert color="danger" id="bottom"></Alert>
      <Footer />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {products: state.products};
}


export default connect(mapStateToProps, null)(Seller);
