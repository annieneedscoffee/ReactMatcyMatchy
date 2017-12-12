import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Table } from 'reactstrap';

class Seller extends Component {
  render() {
    return (
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
            On Sale
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Limited Time Only
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Hand Made
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Ethically Sourced
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
    <tr>
      <th scope="row">1</th>
      <td>Polka Dot Rain Coat</td>
      <td>$24.99</td>
      <td><Button>Click Here</Button></td>
        <td><Button>Delete</Button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Fuzzy Alligator Slippers</td>
      <td>$9.99</td>
        <td><Button>Click Here</Button></td>
          <td><Button>Delete</Button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Striped Tie Design 3</td>
      <td>$19.99</td>
        <td><Button>Click Here</Button></td>
          <td><Button>Delete</Button></td>
    </tr>
  </tbody>
</Table>
      </div>
    );
  }
}

export default Seller;
