import React from 'react';

const About_ = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl text-[#e63946] md:text-4xl mb-6 sm:mb-12 font-bold text-center">About Us</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-sm sm:text-lg text-gray-700 mb-6">
            At FleetFix, we've been at the forefront of vehicle management for over two decades. Our journey began with a simple mission: to revolutionize how businesses and individuals manage their vehicles.
          </p>
          <p className="text-sm sm:text-lg text-gray-700 mb-6">
            Today, we're proud to be a leading provider of comprehensive vehicle management solutions. Our team of experienced professionals is dedicated to delivering top-notch services that keep your fleet running smoothly and efficiently.
          </p>
          <p className="text-sm sm:text-lg text-gray-700 mb-6">
            We believe in innovation, sustainability, and customer satisfaction. Our cutting-edge technology and customer-centric approach set us apart in the industry, allowing us to provide tailored solutions that meet the unique needs of each client.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li className="mb-2">Excellence in service delivery</li>
              <li className="mb-2">Commitment to innovation</li>
              <li className="mb-2">Environmental responsibility</li>
              <li className="mb-2">Customer-first approach</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button className="bg-[#e63946] text-white py-3 px-8 rounded-full text-sm sm:text-lg font-semibold hover:bg-[#e63946]/90 transition-colors">
            Learn More About Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default About_;