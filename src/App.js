import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import CandidateSearch from './Components/CadidateSearch';
import Testing from './Components/Testing';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route path='/testing' element={<Testing/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/candidate-search" element={<CandidateSearch/>} />
      </Routes>
    </Router>
  );
}

export default App;
