import React from 'react';
import { FaShieldAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";



const ReasonCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyChoose = () => {
  const reasons = [
    {
      icon: <FaShieldAlt size={48} className="text-[#e63946]" />,
      title: "Unmatched Quality",
      description: "We pride ourselves on providing top-notch vehicle management services that exceed industry standards."
    },
    {
      icon: <FaClock size={48} className="text-[#e63946]" />,
      title: "24/7 Support",
      description: "Our dedicated team is available round the clock to assist you with any queries or concerns."
    },
    {
      icon: <FaUserCheck size={48} className="text-[#e63946]" />,
      title: "Customer-Centric Approach",
      description: "We put our customers first, tailoring our services to meet your unique needs and preferences."
    },
    {
      icon: <FaTruck size={48} className="text-[#e63946]" />,
      title: "Comprehensive Solutions",
      description: "From maintenance to fleet management, we offer a wide range of services to keep your vehicles in top condition."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Why Choose Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} {...reason} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-8">
            Experience the difference with our premier vehicle management services.
          </p>
          <button className="bg-[#e63946] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#e63946]/90 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;