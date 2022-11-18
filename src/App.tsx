import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';
import LandingPage from './components/LandingPage/LandingPage';
import Process from './components/Process/ProjectDetails';
import MyNavbar from './Navbar/MyNavbar';

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/details" element={<Process />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
