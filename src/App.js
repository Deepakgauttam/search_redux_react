import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SearchComponent from './components/SearchComponent';
import SearchResult from './components/SearchResult';
import { fetchData } from './actions/dataActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <h1>Search App</h1>
      <SearchComponent />
      <SearchResult />
    </div>
  );
};

export default App;
