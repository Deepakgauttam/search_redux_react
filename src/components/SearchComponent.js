import React from 'react';
import { useDispatch } from 'react-redux';
import { searchData } from '../actions/dataActions';

const SearchComponent = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    dispatch(searchData(searchTerm));
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        onChange={handleSearch} 
      />
    </div>
  );
};

export default SearchComponent;
