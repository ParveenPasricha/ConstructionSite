import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">YourLogo</h2>
          <p className="text-sm text-gray-400">
            Your go-to platform for reliable services, innovative tech, and quality support.
          </p>
          <div className="flex gap-4 mt-4">
            <Link to="" className="hover:text-blue-500"><FaFacebookF /></Link>
            <Link to="#" className="hover:text-pink-500"><FaInstagram /></Link>
            <Link to="#" className="hover:text-blue-400"><FaTwitter /></Link>
            <Link to="#" className="hover:text-blue-600"><FaLinkedinIn /></Link>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/products/a" className="hover:text-white">Product A</Link></li>
            <li><Link to="/products/b" className="hover:text-white">Product B</Link></li>
            <li><Link to="/products/c" className="hover:text-white">Product C</Link></li>
            <li><Link to="/products/d" className="hover:text-white">Product D</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/status" className="hover:text-white">System Status</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
