import axios from 'axios';
import { FETCH_DATA_SUCCESS, SEARCH_DATA } from './actionTypes';

export const fetchData = () => {
  return async dispatch => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
    } catch (error) {
      // Handle error
    }
  };
};

export const searchData = (searchTerm) => {
  return { type: SEARCH_DATA, payload: searchTerm };
};
