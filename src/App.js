import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import CandidateSearch from './pages/CadidateSearch';
// import Testing from './Components/Testing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CompanyProvider } from './Components/CompanyContext';
// import SpinnerLoader from './Components/Testing';

function App() {
  return (
    <Router>
      <CompanyProvider>
        <ToastContainer pauseOnHover={false} theme="dark" />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          {/* <Route path='/testing' element={<SpinnerLoader/>} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/candidate-search" element={<CandidateSearch />} />
        </Routes>
      </CompanyProvider>
    </Router>
  );
}

export default App;
