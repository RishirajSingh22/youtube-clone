
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './App.css';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import VideoGrid from './components/VideoGride';

function App() {
  const [searchQuery, setSearchQuery] = useState(''); // State to handle search query

  return (
    <div className="app">
      <Header setSearchQuery={setSearchQuery} /> {/* Assuming Header updates the search query */}
      <div className="app__body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<VideoGrid searchQuery={searchQuery} />} /> {/* Pass searchQuery */}
          <Route path="/watch" element={<VideoPlayer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

