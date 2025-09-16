import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">E-Comerce Website</h2>
          <p className="text-sm leading-relaxed">
            Quality products, smart prices, and the future of shopping delivered to your door.
          </p>
        </div>

        
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Shop", "Deals", "About Us", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-amber-400 hover:underline transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center mb-2">
            <i className="fas fa-envelope text-amber-400 mr-2"></i>
            <a href="mailto:E-Commerce@gmail.com" className="hover:text-amber-400">E-Commerce@gmail.com</a>
          </p>
          <p className="flex items-center mb-2">
            <i className="fas fa-phone text-amber-400 mr-2"></i>
            <span>+92 330-1234567</span>
          </p>
          <p className="flex items-center">
            <i className="fas fa-map-marker-alt text-amber-400 mr-2"></i>
            <span>Lahore, Pakistan</span>
          </p>
        </div>

        
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-5 text-xl">
            <a href="#" className="hover:text-amber-400 transition">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>


      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © 2025 Digital Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
