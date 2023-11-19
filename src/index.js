import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './style.scss'
import Header from './components/sections/Header';
import OurServices from './components/sections/OurServices';
import Home from './views/Home';
import News from './views/News'
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import Footer from './components/sections/Footer';
import news from './views/News';
import NewsDeets from './components/sections/NewsDeets';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/news' element={<News />} />
        <Route path='*' element={<NotFound />} />
        <Route path="/news/:id" element={<NewsDeets />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);