import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/authentication/Register';
import Login from './components/authentication/Login';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import StartWriting from './pages/StartWriting';
import Resources from './pages/Resources';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/writing" element={<StartWriting />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}
