import { FETCH_DATA_SUCCESS, SEARCH_DATA } from '../actions/actionTypes';

const initialState = {
  data: [],
  searchData: ''
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case SEARCH_DATA:
      return {
        ...state,
        searchData: action.payload
      };
    default:
      return state;
  }
};

export default dataReducer;
