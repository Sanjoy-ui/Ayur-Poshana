import axios from 'axios';
import React from 'react';
import { FaTachometerAlt, FaCalculator, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { serverUrl } from '../App';
import { setUserData } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();
  const dispatch = useDispatch()

    const handleLogOut = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/auth/signout`, {
        withCredentials: true,
      });
      console.log(result);
      dispatch(setUserData(null));
    } catch (error) {
      console.log(error);
    }
  };

  const navLinks = [
    { name: 'Deshboard', icon: <FaTachometerAlt />, path: '/deshboard' },
    { name: 'Calculator', icon: <FaCalculator />, path: '/calculator' },
    { name: 'Food Search', icon: <FaSearch />, path: '/search' },
  ];

  return (
    <header className="bg-gradient-to-r from-green-500 to-teal-400 text-white fixed top-0 left-0 right-0 z-50 shadow-lg px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">AyurPoshana</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 items-center">
        {navLinks.map(({ name, icon, path }) => (
          <Link
            key={name}
            to={path}
            className={`flex items-center space-x-2 text-lg font-medium px-3 py-2 rounded-lg transition ${
              location.pathname === path
                ? 'bg-white text-green-700'
                : 'hover:bg-white hover:text-green-700 text-white'
            }`}
          >
            {icon}
            <span>{name}</span>
          </Link>
        ))}
        <button onClick={handleLogOut} className="bg-red-500 px-3 py-2 rounded-lg text-white font-semibold hover:bg-red-600 transition">
          Logout
        </button>
      </nav>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-b from-green-500 to-teal-400 shadow-lg flex flex-col space-y-2 p-4 md:hidden rounded-b-lg">
          {navLinks.map(({ name, icon, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center space-x-2 text-lg font-medium px-3 py-2 rounded-lg transition ${
                location.pathname === path
                  ? 'bg-white text-green-700'
                  : 'hover:bg-white hover:text-green-700 text-white'
              }`}
            >
              {icon}
              <span>{name}</span>
            </Link>
          ))}
          <button onClick={handleLogOut} className="bg-red-500 px-3 py-2 rounded-lg text-white font-semibold hover:bg-red-600 transition text-left">
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
