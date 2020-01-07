import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './containers/pages/Login';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
    </BrowserRouter>
  );
}

export default App;
