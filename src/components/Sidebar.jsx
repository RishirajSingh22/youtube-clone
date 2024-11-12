import React from 'react';
import './slidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>Home</li>
        <li>Trending</li>
        <li>Subscriptions</li>
        <li>Library</li>
      </ul>
    </div>
  );
}

export default Sidebar;
