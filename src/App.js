import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import Add from './pages/addPage';
import Sub from './pages/subPage';
import Mul from './pages/mulPage';
import Div from './pages/divPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path='/add' element={<Add/>}/>
      <Route path='/sub' element={<Sub/>}/>
      <Route path='/mul' element={<Mul/>}/>
      <Route path='/div' element={<Div/>}/>
    </Routes>
  </Router>
);

export default App;