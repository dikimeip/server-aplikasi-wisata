import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './containers/pages/Login';
import Home from './containers/pages/Home';
import Wisata from './containers/pages/Wisata';
import TambahWisata from './containers/pages/TambahWisata';
import ShowWisata from './containers/pages/ShowWisata';
import NewsPage from './containers/pages/NewsPage';
import TambahNews from './containers/pages/TambahNews';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home}/>
        <Route path="/wisata" component={Wisata}/>
        <Route path="/tambahwisata" component={TambahWisata}/>
        <Route path="/showWis/:id" component={ShowWisata}/>
        <Route path="/news" component={NewsPage}/>
        <Route path="/tambahberita" component = {TambahNews}/>
    </BrowserRouter>
  );
}

export default App;
