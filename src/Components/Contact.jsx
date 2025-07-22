import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>

        <div className="space-y-6 text-gray-700 text-lg">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-600" />
            <span>+91 9876543210</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-600" />
            <span>contact@yourcompany.com</span>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-600" />
            <span>123, Your Street, Your City, India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
