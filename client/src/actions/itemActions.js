import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => {
  return {
    type: GET_ITEMS
    // IF WE WERE SENDING SOMETHING AND HAD SOME RESPONSE FROM THE SERVER WE USE PAYLOAD
    // payload: res.data
  };
}


// This function gets sent to the reducer along with the payload (id that was passed in ShoppingList, where it came from)
export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload:id
  };
};