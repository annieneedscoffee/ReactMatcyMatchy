import axios from 'axios';
export const GET_PRODUCTS_PENDING = 'GET_LISTITEMS_PENDING';
export const GET_PRODUCTS_SUCCESS = 'GET_LISTITEMS_SUCCESS';

export const getProducts = () =>{
  return async (dispatch) => {
    dispatch({type: GET_PRODUCTS_PENDING})
    let products = await axios.get('http://localhost:8000/products')
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: products
    })
  }
}
