import React from 'react';
import { FiMapPin } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


const ContactInfo = ({ icon, title, content }) => (
  <div className="flex items-start mb-6">
    <div className="mr-4">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <ContactInfo
                icon={<FiMapPin size={24} className="text-[#e63946]" />}
                title="Address"
                content="123 Vehicle St, Automotive City, AC 12345"
              />
              <ContactInfo
                icon={<FaPhoneAlt size={24} className="text-[#e63946]" />}
                title="Phone"
                content="+1 (555) 123-4567"
              />
              <ContactInfo
                icon={<CiMail size={24} className="text-[#e63946]" />}
                title="Email"
                content="info@yourcompany.com"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e63946]" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e63946]" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e63946]" required></textarea>
                </div>
                <button type="submit" className="bg-[#e63946] text-white py-2 px-4 rounded-md hover:bg-[#e63946]/90 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;