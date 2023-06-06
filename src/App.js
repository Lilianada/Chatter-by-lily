import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/authentication/Register';
import Login from './components/authentication/Login';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import StartWriting from './pages/StartWriting';
import Resources from './pages/Resources';

export default function App() {
  const [isAuth, setIsAuth] = React.useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuth');
    if (isAuth) {
      setIsAuth(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/write" element={<StartWriting />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}
