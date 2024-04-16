import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SearchComponent from './components/SearchComponent';
import SearchResult from './components/SearchResult';
import { fetchUserData } from './actions/dataActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div>
      <h1>User Search App</h1>
      <SearchComponent />
      <SearchResult />
    </div>
  );
};

export default App;
