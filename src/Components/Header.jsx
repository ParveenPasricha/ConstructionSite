import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const handleForm=()=>{
        navigate('/feedbackform')
    }
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 mx-10 shadow-md">
      {/* Left Side - Logo */}
      <div onClick={()=>navigate('/')} className="flex items-center">
        <img src="/Logo.png" alt="Company logo" className="h-12 w-auto cursor-pointer" />
      </div>

      {/* Center Side - Navigation */}
      <div className="flex space-x-6 text-lg font-medium">
        <Link className="hover:text-orange-500 transition-colors duration-200" to="/">Home</Link>
        <Link className="hover:text-orange-500 transition-colors duration-200" to="/about">About</Link>
        <Link className="hover:text-orange-500 transition-colors duration-200" to="/services">Services</Link>
        <Link className="hover:text-orange-500 transition-colors duration-200" to="/career">Career</Link>
        <Link className="hover:text-orange-500 transition-colors duration-200" to="/contact">Contact</Link>
      </div>

      {/* Right Side - Button */}
      <div>
        <button onClick={handleForm} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition duration-200">
          Feedback Form
        </button>
      </div>
    </div>
  );
};

export default Header;
