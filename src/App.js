import React, { useEffect, useState } from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import { applyMiddleware } from 'redux';
import Navbar from './components/Navbar/Navbar';
import NewItem from './pages/NewItem/NewItem';
import News from './pages/News/News';
import './styles/App.css';
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/news' element={<News />}/>
        <Route exact path='/news/:id' element={<NewItem />}/>
        <Route path="*" element={<Navigate to="/news" />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
