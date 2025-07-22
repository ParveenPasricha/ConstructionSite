import React from 'react';
import { FaHardHat, FaTruckMoving, FaDraftingCompass, FaBuilding } from 'react-icons/fa';

const Service = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Our Construction Services</h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          We deliver quality construction and infrastructure solutions with safety, innovation, and reliability.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Civil Construction */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaBuilding className="text-4xl text-yellow-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Civil Construction</h3>
          <p className="text-gray-600 text-sm">
            From roads to buildings, we handle complete infrastructure development with expert project management.
          </p>
        </div>

        {/* Architecture & Planning */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaDraftingCompass className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Architecture & Planning</h3>
          <p className="text-gray-600 text-sm">
            Creative and structural design services ensuring optimal use of space and materials.
          </p>
        </div>

        {/* Equipment & Transport */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaTruckMoving className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Transport & Equipment</h3>
          <p className="text-gray-600 text-sm">
            Heavy equipment rental, logistics, and material supply for your projects — on time and safe.
          </p>
        </div>

        {/* Safety & Supervision */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaHardHat className="text-4xl text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Safety & Supervision</h3>
          <p className="text-gray-600 text-sm">
            We follow the highest safety standards with trained professionals overseeing every step of the job.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
