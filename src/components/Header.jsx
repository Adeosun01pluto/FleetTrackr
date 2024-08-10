import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaUserAlt, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative shadow-md md:p-0 px-4">
      <div className="container text-white py-4 md:py-6 bg-transparent mx-auto flex justify-between md:items-center">
        {/* Logo Section */}
        <Link to="/" className="text-black text-2xl md:text-3xl font-bold flex items-center">
          <FaCar className="mr-2" />
          FleetTrackr
        </Link>

        {/* Navigation Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#e63946] text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className="hidden md:flex md:space-x-8 items-center text-black font-semibold">
          <Link to="/" className="hover:text-[#e63946] transition-colors duration-300">Home</Link>
          <Link to="/vehicles" className="hover:text-[#e63946] transition-colors duration-300">Vehicles</Link>
          <Link to="/about" className="hover:text-[#e63946] transition-colors duration-300">About Us</Link>
          <Link to="/about" className="hover:text-[#e63946] transition-colors duration-300">Blogs</Link>
          <Link to="/schedule" className="hover:text-[#e63946] transition-colors duration-300">Schedule</Link>
          <Link to="/dashboard" className="hover:text-[#e63946] transition-colors duration-300 flex items-center">
            <FaUserAlt className="mr-1" /> Admin
          </Link>
        </nav>

        {/* Login/Sign Up Section */}
        <div className="hidden md:flex space-x-4 items-center text-[#e63946] font-semibold text-sm">
          <Link to="/login" className="hover:text-black transition-colors duration-300">Login</Link>
          <Link to="/signup" className="text-white rounded-full py-2 px-4 bg-[#e63946] hover:text-white transition-colors duration-300">Sign Up</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className={`md:hidden bg-[#e63946] z-10 transition-transform duration-500 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'
        } text-white absolute right-0 top-full w-full flex flex-col items-center space-y-4 py-4 shadow-lg`}>
          <Link to="/" onClick={toggleMenu} className="hover:text-[#e63946] transition-colors duration-300">Home</Link>
          <Link to="/vehicles" onClick={toggleMenu} className="hover:text-[#e63946] transition-colors duration-300">Vehicles</Link>
          <Link to="/about" onClick={toggleMenu} className="hover:text-[#e63946] transition-colors duration-300">About Us</Link>
          <Link to="/blog" onClick={toggleMenu} className="hover:text-[#e63946] transition-colors duration-300">Blogs</Link>
          <Link to="/schedule" onClick={toggleMenu} className="hover:text-[#e63946] transition-colors duration-300">Schedule</Link>
          <Link to="/dashboard" onClick={toggleMenu} className="hover:text-[#e63946] transition-colors duration-300 flex items-center">
            <FaUserAlt className="mr-1" /> Admin
          </Link>
          {/* Mobile Login/Sign Up */}
          <Link to="/login" onClick={toggleMenu} className="hover:text-[#e63946] text-[#fff] transition-colors duration-300">Login</Link>
          <Link to="/signup" onClick={toggleMenu} className="hover:text-[#e63946] text-[#fff] transition-colors duration-300">Sign Up</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
