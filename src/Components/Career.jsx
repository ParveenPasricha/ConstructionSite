import React from 'react';

const Career = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Join Our Team</h1>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          At Your Company, we believe in building strong foundations — for both projects and careers.
        </p>
      </div>


      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Why Work With Us?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-blue-600 mb-2">Growth Opportunities</h3>
            <p className="text-gray-600 text-sm">
              We support your career with ongoing training, development, and leadership paths.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-green-600 mb-2">Team Culture</h3>
            <p className="text-gray-600 text-sm">
              Work with a team that values collaboration, safety, and respect.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-yellow-600 mb-2">Real-World Impact</h3>
            <p className="text-gray-600 text-sm">
              Be part of large-scale infrastructure and construction that changes lives.
            </p>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Open Positions</h2>
        <div className="space-y-6">
          {/* Job 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-700">Site Engineer</h3>
            <p className="text-gray-600 mt-1 mb-3">Location: Delhi NCR | Full-time</p>
            <p className="text-sm text-gray-500">
              We’re looking for experienced site engineers with knowledge of construction processes, safety, and supervision.
            </p>
          </div>

          {/* Job 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-700">Project Manager</h3>
            <p className="text-gray-600 mt-1 mb-3">Location: Mumbai | Full-time</p>
            <p className="text-sm text-gray-500">
              Lead construction projects from start to finish, ensuring timely delivery, budget control, and client satisfaction.
            </p>
          </div>

          {/* Job 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-700">Civil CAD Designer</h3>
            <p className="text-gray-600 mt-1 mb-3">Location: Remote | Contract</p>
            <p className="text-sm text-gray-500">
              Design site plans and construction layouts using AutoCAD and Civil 3D software.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
