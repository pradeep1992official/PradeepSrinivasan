import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import pradeep_img from "../assets/name1.png";
import '../App.css'; 

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="sticky top-0 flex justify-between items-center px-20 py-4 bg-black z-50">
      {/* Pradeep Image on the left */}
      <img src={pradeep_img} className="w-50 h-10" alt="Pradeep" />

      {/* Navigation Links on the right */}
      <nav className="hidden md:block ml-auto">
        <ul className="flex space-x-6 text-white font-bold">
          <li><a className="hover:text-green-400" href="/">Home</a></li>
          <li><a className="hover:text-green-400" href="#about">About</a></li>
          <li><a className="hover:text-green-400" href="#projects">Projects</a></li>
          <li><a className="hover:text-green-400" href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {toggleMenu && (
        <nav className="block md:hidden fixed top-0 left-0 w-full bg-black bg-opacity-90 z-40">
          <ul
            onClick={() => setToggleMenu(false)}
            className="flex flex-col items-center justify-center text-white h-full mobile-nav"
          >
            <li><a className="hover:text-green-400" href="/">Home</a></li>
            <li><a className="hover:text-green-400" href="#about">About</a></li>
            <li><a className="hover:text-green-400" href="#projects">Projects</a></li>
            <li><a className="hover:text-green-400" href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}

      {/* Mobile Menu Button */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden ml-auto"
      >
        <Bars3Icon className="text-white h-5" />
      </button>
    </header>
  );
}

export default Header;
