import {
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_SUCCESS
} from '../actions/getproducts'

export default(state = [], action) =>{
  switch (action.type) {
    case GET_PRODUCTS_PENDING:
    return state;
    case GET_PRODUCTS_SUCCESS:
    return [...action.payload.data];
    default:
    return state;
  }
};
