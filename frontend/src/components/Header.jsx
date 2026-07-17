// Header.jsx

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/styles.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = (e) => {
    // Only close the menu when clicking the 'X' icon
    if (e.target.classList.contains('close-menu')) {
      setIsNavOpen(false);
    }
  };

  return (
    <header className="bg-07060e bg-dust text-white p-4 fixed w-full top-0 z-[1500]">
    <div className="container mx-auto pr-1 lg:pr-8  flex justify-between items-center top-70 left-509">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/cetalks-logo.png" alt="CETalks Logo" className="w-12 h-12 top-32 left-71" />
        </Link>

        {/* Hamburger Menu for smaller screens */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={handleNavToggle}
        >
          {isNavOpen ? (
            <svg
              className="w-8 h-8 close-menu"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>

        {/* Full-width Dropdown Menu for smaller screens */}
        {isNavOpen && (
          <div className="lg:hidden w-full absolute top-20 left-0 bg-07060e text-white text-center outfit-font text-[1.2rem]">
            <Link
              to="/"
              className={`block py-3 hover:text-yellow-100 font-medium ${location.pathname === '/' ? 'text-yellow-200' : ''}`}
              onClick={closeNav}
            >
              Home
            </Link>
            <Link
              to="/events"
              className={`block py-3 hover:text-yellow-100 font-medium ${location.pathname === '/events' ? 'text-yellow-200' : ''}`}
              onClick={closeNav}
            >
              Events
            </Link>
            <Link
              to="/events-list"
              className={`block py-3 hover:text-yellow-100 font-medium ${location.pathname === '/events-list' ? 'text-yellow-200' : ''}`}
              onClick={closeNav}
            >
              Events List
            </Link>
            <Link
              to="/media"
              className={`block py-3 hover:text-yellow-100 font-medium ${location.pathname === '/media' ? 'text-yellow-200' : ''}`}
              onClick={closeNav}
            >
              Media
            </Link>
            <Link
              to="/spotlight"
              className={`block py-3 hover:text-yellow-1000 font-medium ${location.pathname === '/spotlight' ? 'text-yellow-200' : ''}`}
              onClick={closeNav}
            >
              Spotlight
            </Link>
            <Link
              to="/contact"
              className={`block py-3 hover:text-yellow-100 font-medium ${location.pathname === '/contact' ? 'text-yellow-200' : ''}`}
              onClick={closeNav}
            >
              Contact
            </Link>
            <Link
              to="/our-team"
              className={`block py-3 hover:text-yellow-100 font-medium ${location.pathname === '/our-team' ? 'text-yellow-200' : ''}`}
              onClick={closeNav}
            >
              Our Team
            </Link>
          </div>
        )}

        {/* Navigation Menu for larger screens */}
<nav className="hidden lg:flex lg:space-x-16 outfit-font">
<Link
  to="/events"
  className={`hover:text-yellow-100 font-[380] outfit-font text-base ${location.pathname === '/events' ? 'text-yellow-200' : ''}`}
>
  Events
</Link>
<Link
  to="/events-list"
  className={`hover:text-yellow-100 font-[380] outfit-font text-base ${location.pathname === '/events-list' ? 'text-yellow-200' : ''}`}
>
  Events List
</Link>          
<Link
  to="/media"
  className={`hover:text-yellow-100 font-[380] outfit-font text-base ${location.pathname === '/media' ? 'text-yellow-200' : ''}`}
>
  Media
</Link>
<Link
  to="/spotlight"
  className={`hover:text-yellow-100 font-[380] outfit-font text-base ${location.pathname === '/spotlight' ? 'text-yellow-200' : ''}`}
>
  Spotlight
</Link>
<Link
  to="/contact"
  className={`hover:text-yellow-100 font-[380] outfit-font text-base ${location.pathname === '/contact' ? 'text-yellow-200' : ''}`}
>
  Contact
</Link>
<Link
  to="/our-team"
  className={`hover:text-yellow-100 font-[380] outfit-font text-base ${location.pathname === '/our-team' ? 'text-yellow-200' : ''}`}
>
  Our team
</Link>
</nav>

      </div>
    </header>
  );
};

export default Header;
