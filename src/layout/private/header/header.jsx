import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-300 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 py-3">
        {/* Logo */}
        <h2 className="text-xl md:text-2xl font-bold text-white">
          My-Landa-Store
        </h2>

        {/* Navigation */}
        <nav className="flex items-center gap-4 md:gap-6 text-base md:text-lg">
          <NavLink to="/" className="hover:text-amber-400">
            <i className="fa-solid fa-house"></i> 
          </NavLink>
          <NavLink to="/sale" className="hover:text-amber-400">
            <i className="fa-solid fa-tags"></i>
          </NavLink>
          <NavLink to="/cart" className="hover:text-amber-400">
            <i className="fa-solid fa-shopping-cart"></i>
          </NavLink>
          <NavLink to="/team" className="hover:text-amber-400">
            <i className="fa-solid fa-users"></i>
          </NavLink>
          <NavLink to="/contact" className="hover:text-amber-400">
            <i className="fa-solid fa-envelope"></i>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
