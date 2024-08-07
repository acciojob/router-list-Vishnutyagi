import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './ItemList';
import Item1 from './ItemDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/item/:itemId" element={<Item1/>}/>
      </Routes>
    </Router>
  );
};

export default App;
