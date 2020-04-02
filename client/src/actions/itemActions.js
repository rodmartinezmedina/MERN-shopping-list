import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => {
  return {
    type: GET_ITEMS
    // IF WE WERE SENDING SOMETHING AND HAD SOME RESPONSE FROM THE SERVER WE USE PAYLOAD
    // payload: res.data
  };
}
