import React, { useEffect, useState, useRef } from 'react';
import newsService from '../../API/newsService';
import NewList from '../../components/NewList/NewList'
import { useFetch } from '../../hooks/useFetch';

function News() {
  const observerElement = useRef(null)
  const [isObserve, setIsObserve] = useState(false);
  const [news, setNews] = useState([]);
  const [limitToFirst, setLimitToFirst] = useState(10);

  const [fetchNews, isNewsLoading, newsError] = useFetch(async (limitToFirst) => {
    const res = await newsService.getAll(limitToFirst);
    setNews(res)
  })

  const [updateNews, isUpdateLoading] = useFetch(async (limitToFirst) => {
    const res = await newsService.getAll(limitToFirst);
    setNews([...news, ...res])
  })

  useEffect(() => {
    fetchNews(limitToFirst)
  },[]);

  const observeOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }

  const loadNewItems = (e) => {
    if(e[0].isIntersecting){
      setIsObserve(true)
    }else{
      setIsObserve(false)
    }
  }

  useEffect(() => {
    if(isObserve){
      setLimitToFirst(limit => limit + 10)
      updateNews(limitToFirst)
    }
  }, [isObserve])


  useEffect(() => {
    const observer = new IntersectionObserver(loadNewItems, observeOptions)
      if(observerElement.current){
        observer.observe(observerElement.current)
      }

      return () => {
        if(observerElement.current){
          observer.unobserve(observerElement.current)
        }
      }
  },[observeOptions, observerElement]);

  return (
    <div>
        <NewList isNewsLoading={isNewsLoading} news={news}/>
        <div ref={observerElement}></div>
    </div>
  );
}

export default News;
