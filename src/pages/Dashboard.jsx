import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { TbUsers } from "react-icons/tb";
import { FaCarRear } from "react-icons/fa6";
import { Link } from 'react-router-dom';




const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div className={`bg-gray-800 text-white h-full fixed left-0 top-[64px] md:top-[84px] ${isOpen ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden`}>
    <div className="p-4">
      <button onClick={toggleSidebar} className="float-right">
        <RxCross2 size={24} />
      </button>
    </div>
    <nav className="mt-8">
      <ul>
        <Link to="/customers" className='mb-4 flex items-center px-4 py-2 hover:bg-gray-700'>
            <TbUsers size={20} className="mr-2" />
            Customers
        </Link>
        <Link to="/cars" className='mb-4 flex items-center px-4 py-2 hover:bg-gray-700'>
            <FaCarRear size={20} className="mr-2" />
            Cars
        </Link>
      </ul>
    </nav>
  </div>
);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            {
                !sidebarOpen ? 
            <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700">
              <IoMdMenu size={24} />
            </button> : <div></div>
            }
            <h1 className="text-lg md:text-2xl font-bold text-gray-900">Vehicle Management</h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Total Customers</h2>
              <p className="text-3xl font-bold text-gray-900">1,234</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Total Cars</h2>
              <p className="text-3xl font-bold text-gray-900">5,678</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activities</h2>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">New customer added: John Doe</li>
                <li className="text-sm text-gray-600">Car maintenance scheduled: Toyota Camry</li>
                <li className="text-sm text-gray-600">Invoice generated: #INV-001</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="bg-[#e63946] text-white py-2 px-4 rounded-md hover:bg-[#e63946]/90 transition-colors">
                Add New Customer
              </button>
              <button className="bg-[#e63946] text-white py-2 px-4 rounded-md hover:bg-[#e63946]/90 transition-colors">
                Register New Car
              </button>
              <button className="bg-[#e63946] text-white py-2 px-4 rounded-md hover:bg-[#e63946]/90 transition-colors">
                Schedule Maintenance
              </button>
              <button className="bg-[#e63946] text-white py-2 px-4 rounded-md hover:bg-[#e63946]/90 transition-colors">
                Generate Report
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;