import React, { useState, useEffect } from 'react';
import './App.css';



function App() {

  const [articles, setArticles] = useState([]);

  useEffect(()=>{
    fetch('http://hn.algolia.com/api/v1/search?hitsPerPage=20')
      .then(res => {
        return res.json()
      })
      .then(data => setArticles(data.hits))
  }, [])
  

  return (
    <div className="App">
      <header className="App-header">
        <dix>
          {/* <SearchForm setArticles = {setArticles}/> uncomment when SearchForm Component is complete*/}
        </dix>

        <div>

          {/* <ListArticles articles = {articles}/> uncomment when ListArticles Component is complete*/}
        </div>
      </header>
    </div>
  );
}

export default App;
