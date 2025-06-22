import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Activities2425Page from './components/Activities2425Page';
import Activities2526Page from './components/Activities2526Page';
import MembersPage from './components/MembersPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/activities-2024-2025" element={<Activities2425Page />} />
            <Route path="/activities-2025-2026" element={<Activities2526Page />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
