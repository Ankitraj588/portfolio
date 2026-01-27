import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container ">
        {/* Logo (Left) */}
        <Link to="/" className="navbar-logo-link">
          <img src="./messi-logo.svg" alt="Logo" className="navbar-logo" />
        </Link>



        {/* Navigation Links () */}
        {/* <div className="navbar-links">
          <Link to="/" className="nav-link">HOME</Link>
          <div className="nav-separator">/</div>
          <Link to="/projects" className="nav-link">PROJECTS</Link>
          <div className="nav-separator">/</div>
          <Link to="/contact" className="nav-link">CONTACT</Link>
          <div className="nav-separator">/</div>
          <Link to="/about" className="nav-link">ABOUT</Link>
        </div> */}
        

            
<div className="navbar-links">

  <NavLink
    to="/"
    end
    className={({ isActive }) =>
      isActive ? "nav-link nav-active" : "nav-link"
    }
  >
    HOME
  </NavLink>

  <div className="nav-separator">/</div>

  <NavLink
    to="/projects"
    className={({ isActive }) =>
      isActive ? "nav-link nav-active" : "nav-link"
    }
  >
    PROJECTS
  </NavLink>

  <div className="nav-separator">/</div>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      isActive ? "nav-link nav-active" : "nav-link"
    }
  >
    CONTACT
  </NavLink>

  <div className="nav-separator">/</div>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive ? "nav-link nav-active" : "nav-link"
    }
  >
    ABOUT
  </NavLink>

</div>




        {/* Theme Toggle (Right) */}
        <button 
          onClick={toggleTheme} 
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>


                {/* Time Display */}
        <div className="navbar-time">
          {new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
          })}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;