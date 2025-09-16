import React, { useState } from "react";

const Header = ({ category, setCategory }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-amber-400">MyStore</h1>

        {/* Nav */}
        <nav className="relative">
          <button
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="px-4 py-2 hover:text-amber-400 font-medium"
          >
            Categories ▾
          </button>

          {/* Dropdown */}
          {open && (
            <ul
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              className="absolute bg-gray-800 shadow-lg rounded-lg mt-2 w-48"
            >
              {["all", "electronics", "jewelery", "men's clothing", "women's clothing"].map(
                (cat) => (
                  <li
                    key={cat}
                    className={`px-4 py-2 cursor-pointer hover:bg-amber-400 hover:text-black ${
                      category === cat ? "bg-amber-500 text-black" : ""
                    }`}
                    onClick={() => {
                      setCategory(cat);
                      setOpen(false);
                    }}
                  >
                    {cat === "all"
                      ? "All Products"
                      : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </li>
                )
              )}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
