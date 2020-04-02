import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
import axios from 'axios';


export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('/api/items')
    .then(res => 
      dispatch({type:GET_ITEMS,
     //this is data that comes from backend.    
      payload: res.data
    })
      )
 
  // return {
  //   type: GET_ITEMS
    // IF WE WERE SENDING SOMETHING AND HAD SOME RESPONSE FROM THE SERVER WE USE PAYLOAD
    // payload: res.data
  // };
}


export const addItem = item => dispatch => {
  axios
    .post('/api/items', item)
    .then(res => dispatch({
      type:ADD_ITEM,
      //Getting the response from backend. api/items.js post method. the new 'item'
      payload:res.data
      })
    )
  };



// This function gets sent to the reducer along with the payload (id that was passed in ShoppingList, where it came from)
export const deleteItem = (id) => dispatch => {
  axios.delete(`/api/items/${id}`).then(res => 
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
    )
  };


export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}