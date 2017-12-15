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


 class MatchMaker extends Component{
   render(){
     console.log(this.props)
     let listOfRequests = this.props.requests.map(request => {
       console.log(request)
       return (

           <Card key={request.id}>
                 <CardImg top width="100%" src={request.photo} alt="Card image cap"/>
                   <CardBody>
                     <CardSubtitle>Match For:</CardSubtitle>
                     <CardTitle>{request.title}</CardTitle>
                     <CardText>{request.description}</CardText>
                     <CardText>Request Number: {request.id}</CardText>
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
               <CardText>Sales Made: 27</CardText>
               <CardText>Sales Total: $643.14</CardText>
                <CardText>Commission Total: $79.28</CardText>
                <CardText>Unredeemed Commission: $29.28</CardText>
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
{listOfRequests}
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

 function mapStateToProps(state){
   return{
     requests: state.requests
   }
 }
export default connect(mapStateToProps, null)(MatchMaker);
