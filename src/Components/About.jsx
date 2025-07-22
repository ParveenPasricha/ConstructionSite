import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-800">

      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Learn more about our journey, values, and mission to deliver exceptional digital experiences.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            We are committed to providing innovative, efficient, and scalable digital solutions that empower businesses
            and individuals. Our team of professionals is passionate about transforming ideas into reality with
            cutting-edge technologies.
          </p>
        </div>
        <img
          src="https://source.unsplash.com/500x300/?technology,team"
          alt="Team"
          className="rounded-lg shadow-md w-full"
        />
      </div>

      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and ideas to stay ahead in the tech industry.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We believe in being honest, transparent, and ethical in everything we do.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                We place our customers at the heart of our decisions and aim to exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-16 px-6">
        <h2 className="text-3xl font-semibold mb-4">Want to work with us?</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          We’re always looking for passionate people to join our team or partner with us for exciting projects.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
