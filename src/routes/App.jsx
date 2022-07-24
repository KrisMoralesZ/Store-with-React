import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from '../containers/checkout';
import Home from '../containers/Home';
const App = () => {
  return(
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
  </BrowserRouter>
  );
  
};
export default App;
