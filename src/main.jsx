import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Favorites from './pages/Favorites';
import Album from './pages/Album';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/album/:id' element={<Album/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
