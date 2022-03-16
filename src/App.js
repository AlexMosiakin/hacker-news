import React, { useEffect, useState } from 'react';
import newsService from './API/newsService';
import NewList from './components/NewList/NewList';
import { useFetch } from './hooks/useFetch';

function App() {
  const [news, setNews] = useState([]);
  const [limitToFirst] = useState(100);

  const [fetchNews, isNewsLoading, newsError] = useFetch(async (limitToFirst) => {
    const response = await newsService.getAll(limitToFirst);
    setNews(response)
})

  useEffect(() => {
    fetchNews(limitToFirst);
  },[]);

  return (
    <div className="App">
        <h1>Hacker news</h1>
        <NewList isNewsLoading={isNewsLoading} news={news}/>
    </div>
  );
}

export default App;
