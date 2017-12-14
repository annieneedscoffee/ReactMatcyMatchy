import {
  GET_REQUESTS_PENDING,
  GET_REQUESTS_SUCCESS
} from '../actions/getrequests'

export default(state = [], action) =>{
  switch (action.type) {
    case GET_REQUESTS_PENDING:
    return state;
    case GET_REQUESTS_SUCCESS:
    return [...action.payload.data];
    default:
    return state;
  }
};
