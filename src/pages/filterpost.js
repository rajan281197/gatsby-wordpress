import * as React from "react"
import { useState, useEffect } from "react";const movies = [
  {
    id: 1,
    name: 'Matrix',
    country: 9,
    collection: 300, //in CRs
    releasedOn: 1999,
  },
  {
    id: 2,
    name: 'Tere Nam',
    country: 3,
    collection: 101,
    releasedOn: 2004,
  },
  {
    id: 3,
    name: 'Bahubali',
    country: 4,
    collection: 500,
    releasedOn: 1987,
  },
];
function App() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('albums');
  useEffect(() => {
    const sortArray = type => {
      const types = {
        country: 'country',
        collection: 'collection',
        releasedOn: 'releasedOn',
      };
      const sortProperty = types[type];
      const sorted = [...movies].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };
    sortArray(sortType);
  }, [sortType]); 
  return (
    <div className="App">
      <select onChange={(e) => setSortType(e.target.value)}> 
        <option value="country">Country</option>
        <option value="collection">Collection</option>
        <option value="releasedOn">Release Date</option>
      </select>
      {data.map(movie => (
        <div key={movie.id} style={{ margin: '30px' }}>
          <div>{`Movie: ${movie.name}`}</div>
          <div>{`Country: ${movie.country}`}</div>
          <div>{`Collection: ${movie.collection}`}</div>
          <div>{`Year of Release: ${movie.releasedOn}`}</div>
        </div>
      ))}
    </div>
  );
}
export default App;