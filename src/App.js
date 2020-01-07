import React from 'react';
import './App.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Login from './containers/pages/Login';
import Home from './containers/pages/Home';
import Wisata from './containers/pages/Wisata';
import TambahWisata from './containers/pages/TambahWisata';
import ShowWisata from './containers/pages/ShowWisata';
import NewsPage from './containers/pages/NewsPage';
import TambahNews from './containers/pages/TambahNews';
import ShowNews from './containers/pages/ShowNews';
import ReviewPage from './containers/pages/ReviewPage';
import PengaduanPage from './containers/pages/PengaduanPage';
import KomentarPage from './containers/pages/KomentarPage';
import KontakPage from './containers/pages/KontakPage';

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
        <Route path="/shownews/:id" component = {ShowNews}/>
        <Route path="/review" component={ReviewPage}/>
        <Route path="/pengaduan" component={PengaduanPage}/>
        <Route path="/komen" component={KomentarPage}/>
        <Route path="/kontak" component={KontakPage}/>

    </BrowserRouter>
  );
}

export default App;
