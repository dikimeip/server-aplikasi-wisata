import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './containers/pages/Login';
import Home from './containers/pages/Home';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home}/>
    </BrowserRouter>
  );
}

export default App;
