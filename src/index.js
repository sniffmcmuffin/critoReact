import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import ServicesSection from './components/ServicesSection/ServicesSection';
import './style.css';
import Home from './views/Home';
import Contacts from './views/Contacts';
import News from './views/News';
import NewsDetails from './views/NewDetails';
import NotFound from './views/NotFound';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
         <div className="wrapper">
      <Header />   
      <ServicesSection />
        </div>



<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/contacts' element={<Contacts />} />
  <Route path='/News' element={<News />} />
  <Route path='/NewsDetails' element={<NewsDetails />} />
  <Route path='*' element={<NotFound />} />
</Routes>
</BrowserRouter>

<Footer />



  </React.StrictMode>
);