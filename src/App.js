import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './containers/pages/Login';
import Home from './containers/pages/Home';
import Wisata from './containers/pages/Wisata';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home}/>
        <Route path="/wisata" component={Wisata}/>

    </BrowserRouter>
  );
}

export default App;
