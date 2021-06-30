import axios from 'axios';
import { useState } from 'react';

import { column } from './components/Column';
import Grid from './components/Grid';
import { endpoints } from './endpoints';
import { useSearch } from './utils/useSearch';

import './App.css';

const fetchData = async () => {
  try {
    const { data } = await axios.get(endpoints.api1);
    return { data };
  } catch (error) {
    console.log('The error', error);
  }
};
function App() {
  const [searchQuery, setSearchQuery] = useState(null);

  const { filteredRes, loading } = useSearch({
    //custom hook for searching and rendering data
    searchQuery,
    fetchRes: fetchData,
  });
  const sortHandler = (e) => {
    console.log('Clicked');
    e.preventDefault();
    filteredRes.sort();
  };
  return (
    <div className="App">
      <h1>Grid Component</h1>
      <input
        className="search-box"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        placeholder="Search..."
      />
      <button type="submit" className="sort" onClick={sortHandler}>
        Sort
      </button>
      <Grid
        recordsPerPage={5}
        render={filteredRes}
        column={column}
        loading={loading}
      />
    </div>
  );
}

export default App;
