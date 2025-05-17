import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenu, HiX, HiXCircle } from 'react-icons/hi';
import Logo from '../assets/logo2.webp';
import { MenuFoldOutlined, MenuOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-black  fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo and Branding */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <span className='font-semibold text-lg flex items-center gap-3 text-blue-100'>
            
    </span>
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink label="Home" to="/" />
            <NavLink label="Services" to="/services" />
            <NavLink label="Company" to="/company" />
            <NavLink label="Contact Us" to="/contact" />
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-white/80 text-base hover:text-white  bg-cyan-600 p-3"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <HiXCircle size={22} /> : <MenuOutlined  size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden  transition px-4 pt-2 pb-4 space-y-2 shadow-md font-mono">
          <MobileLink label="Home" to="/" onClick={toggleMenu} />
          <MobileLink label="Services" to="/services" onClick={toggleMenu} />
          <MobileLink label="Company" to="/company" onClick={toggleMenu} />
          <MobileLink label="Contact Us" to="/contact" onClick={toggleMenu} />
        </div>
      )}
    </nav>
  );
}

const NavLink = ({ label, to }) => (
  <Link
    to={to}
    className="block text-white/90 text-base font-medium  transition rounded-2xl p-2 hover:bg-cyan-600 duration-300"
  >
    {label}
  </Link>
);

const MobileLink = ({ label, to, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block text-white/80 text-base font-medium hover:text-white transition duration-300"
  >
    {label}
  </Link>
);

export default Navbar;
