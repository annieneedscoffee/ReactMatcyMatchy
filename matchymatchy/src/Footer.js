import React from 'react';
import ReactDOM from 'react-dom';
import { Alert } from 'reactstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const Footer = () => {
  return(
    <div>
    <div id="footy">
    Copyright: 2017 Matchy-Matchy; Photos and Artist Names and Contact Information available at Unsplash.com
    </div>
    </div>

  )
}

export default Footer;
