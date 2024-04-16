import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchData } from '../actions/dataActions';

const SearchComponent = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    dispatch(searchData(searchTerm));
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;
