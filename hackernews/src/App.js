import React, { useState, useEffect } from "react";
import SearchBar from './searchBar'
import "./App.css";

function App() {
  const [news, setNews] = useState();

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch("http://hn.algolia.com/api/v1/items/2");
      const data = await response.json();
      setNews(data);
    };
    getNews();
  }, []);

  console.log(news)

  return (
    <div>

<div classname='App'>
       <SearchBar/>
     </div>

  

    </div>
  );
}

export default App;