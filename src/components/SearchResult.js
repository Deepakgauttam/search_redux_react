import React from 'react';
import { useSelector } from 'react-redux';

const SearchResult = () => {
  const userData = useSelector(state => state.data);
  const searchData = useSelector(state => state.searchData);

  const filteredData = userData.filter(user => {
    return (
      user.name.toLowerCase().includes(searchData.toLowerCase()) ||
      user.email.toLowerCase().includes(searchData.toLowerCase())
    );
  });

  return (
    <div>
      {filteredData.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
