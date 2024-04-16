import React from 'react';
import { useSelector } from 'react-redux';

const SearchResult = () => {
  const data = useSelector(state => state.data);
  const searchData = useSelector(state => state.searchData);

  const filteredData = data.filter(item => item.title.includes(searchData));

  return (
    <div>
      {filteredData.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
