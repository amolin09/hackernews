import React, { useState, useEffect } from 'react';
import './App.css';

// Importing components.
import ArticleList from './Components/ArticleList';
import SearchBar from './Components/SearchBar';

function App() {
  // useState() will return an array of 2 elements.
  // The first is the property that will be stored in the state.
  // The second is the setter function that will allow us to manipulate the state.
  // Then destructure the array into 2 variables.
  const [articles, setArticles] = useState([]);

  const performSearch = (searchCriteria = {}) => {
    const BASE_URL = 'http://hn.algolia.com/api/v1/search?hitsPerPage=25';

    const url =
      BASE_URL + (searchCriteria.query ? `&query=${searchCriteria.query}` : '');

    // Use the fetch command to retrieve data from the API.
    fetch(url)
      // Will recieve a promise. Must wait until promise is resolved to parse the JSON.
      .then((res) => {
        //
        return res.json();
      })
      // You will recieve another promise.
      // Must wait until promise is resolved to set the articles from the parsed data.
      // The returned JSON object has a property called hits, which is an array of objects.
      // Representing individual articles.
      .then((data) => setArticles(data.hits));
    // This component will re-render anytime ANY property in our state changes.
    // The second parameter allows us to restrict when this effect will take place.
    // This effect will only run if the state property that changed is included in this array.
  };

  // useEffect is a react hook function that will execute every time the component is rendered.
  // The second parameter (in this case, an empty array) lets us restrict this effect to the intial render.
  // We only want the fetch to the API on the initial render, to prepopulate the article data.
  useEffect(() => performSearch(), []);

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar performSearch={performSearch} />
        <ArticleList articles={articles} />
      </header>
    </div>
  );
}

export default App;
