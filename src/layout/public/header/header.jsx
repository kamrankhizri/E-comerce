import React from "react";
import { NavLink } from "react-router-dom"; // ✅ fixed import

const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-300 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h2 className="text-2xl font-bold text-white">My-Landa-Store</h2>

        <nav className="flex items-center gap-6 text-lg">
          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition hover:text-amber-400 ${
                isActive ? "text-amber-400" : "text-gray-300"
              }`
            }
          >
            <i className="fa-solid fa-house"></i>
          </NavLink>

          {/* About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition hover:text-amber-400 ${
                isActive ? "text-amber-400" : "text-gray-300"
              }`
            }
          >
            <i className="fa-solid fa-circle-info"></i>
          </NavLink>

          {/* Login */}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `transition hover:text-amber-400 ${
                isActive ? "text-amber-400" : "text-gray-300"
              }`
            }
          >
            <i className="fa-solid fa-right-to-bracket"></i>
          </NavLink>

          {/* Team */}
          <NavLink
            to="/team"
            className={({ isActive }) =>
              `transition hover:text-amber-400 ${
                isActive ? "text-amber-400" : "text-gray-300"
              }`
            }
          >
            <i className="fa-solid fa-users"></i>
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition hover:text-amber-400 ${
                isActive ? "text-amber-400" : "text-gray-300"
              }`
            }
          >
            <i className="fa-solid fa-envelope"></i>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
