import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // You can use Heroicons or any SVG as well

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleForm = () => {
    navigate("/feedbackform");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-100 shadow-md">
      <div className="flex justify-between items-center p-4 mx-4 md:mx-10">
        {/* Logo */}
        <div onClick={() => navigate("/")} className="flex items-center cursor-pointer">
          <img src="/Logo.png" alt="Company logo" className="h-12 w-auto" />
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <Link className="hover:text-orange-500 transition-colors duration-200" to="/">Home</Link>
          <Link className="hover:text-orange-500 transition-colors duration-200" to="/about">About</Link>
          <Link className="hover:text-orange-500 transition-colors duration-200" to="/services">Services</Link>
          <Link className="hover:text-orange-500 transition-colors duration-200" to="/career">Career</Link>
          <Link className="hover:text-orange-500 transition-colors duration-200" to="/contact">Contact</Link>
        </div>

        {/* Feedback Button - Desktop */}
        <div className="hidden md:block">
          <button onClick={handleForm} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition duration-200">
            Feedback Form
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 pb-4">
          <Link onClick={toggleMenu} className="hover:text-orange-500" to="/">Home</Link>
          <Link onClick={toggleMenu} className="hover:text-orange-500" to="/about">About</Link>
          <Link onClick={toggleMenu} className="hover:text-orange-500" to="/services">Services</Link>
          <Link onClick={toggleMenu} className="hover:text-orange-500" to="/career">Career</Link>
          <Link onClick={toggleMenu} className="hover:text-orange-500" to="/contact">Contact</Link>
          <button onClick={() => { toggleMenu(); handleForm(); }} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition duration-200">
            Feedback Form
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
