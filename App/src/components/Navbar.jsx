// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ searchText }) => {
  const handleSearch = (e) => {
    searchText(e.target.value); //getting search value
  };

  // html 
  return (
    <div className='flex nav justify align'>
      <div>
        <h2 className='h2'>Kalvium Books</h2>
      </div>
      <div className='flex align justify'>
        <div>
          <input type="text" placeholder='Search Books' onChange={handleSearch} />
        </div>
        <button id="searchBtn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
      <div>
        {/* linking button to form page  */}
        <Link to={"/form"}>
          <button id='formBtn'>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
