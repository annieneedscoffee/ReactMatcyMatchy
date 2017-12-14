import axios from 'axios';
export const GET_REQUESTS_PENDING = 'GET_REQUESTS_PENDING';
export const GET_REQUESTS_SUCCESS = 'GET_REQUESTS_SUCCESS';

export const getRequests = () =>{
  return async (dispatch) => {
    dispatch({type: GET_REQUESTS_PENDING})
    let requests = await axios.get('http://localhost:8000/requests')
    console.log(requests)
    dispatch({
      type: GET_REQUESTS_SUCCESS,
      payload: requests
    })
  }
}
