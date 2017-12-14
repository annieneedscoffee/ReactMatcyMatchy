import {combineReducers} from 'redux';
import requestReducer from './reducer-requests';
import productReducer from './reducer-products';


const allReducers = combineReducers({
  requests: requestReducer,
  products: productReducer
});

export default allReducers;
