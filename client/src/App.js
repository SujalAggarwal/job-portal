import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DigitalClock from './components/DigitalClock';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DigitalClock />} />
      </Routes>
    </Router>
  );
}

export default App;
