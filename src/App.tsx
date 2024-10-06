import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Discover from './components/Discover';
import Search from './components/Search';
import Player from './components/Player';
import Login from './components/Login';
import { getTokenFromUrl } from './utils/spotify';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-900 text-white">
        {!token ? (
          <Login />
        ) : (
          <>
            <div className="flex flex-1 overflow-hidden">
              <Sidebar />
              <main className="flex-1 overflow-y-auto">
                <Routes>
                  <Route path="/" element={<Discover token={token} />} />
                  <Route path="/search" element={<Search token={token} />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
            </div>
            <Player token={token} />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;