

import React from 'react';
import './Header.css';

function Header({ setSearchQuery }) {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query
  };

  return (
    <div className="header">
      <div className="header__left">
        {/* YouTube SVG Icon */}
        <svg height="30" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
          {/* SVG Path */}
        </svg>
      </div>
      <div className="header__center">
        <input type="text" placeholder="Search" onChange={handleSearchChange} />
        <button>Search</button>
      </div>
      <div className="header__right">
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Header;
