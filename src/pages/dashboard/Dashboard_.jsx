import React, { useEffect, useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { TbUsers, TbShirt, TbClipboardList, TbPencil, TbBellRinging, TbCurrencyDollar } from "react-icons/tb";
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { FaPersonRifle } from 'react-icons/fa6';
import { auth, db } from '../../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import DashboardHome from './DashboardHome';
import Orders from './Orders';
import Customers from './Customers';
import BlogManager from './BlogManager';




const Sidebar = ({ isOpen, toggleSidebar, isAdmin }) => {
  const location = useLocation();

  return (
    <div className={`bg-gray-800 text-white h-full fixed left-0 top-[64px] md:top-[84px] ${isOpen ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden`}>
      <div className="p-4">
        <button onClick={toggleSidebar} className="float-right">
          <RxCross2 size={24} />
        </button>
      </div>
      <nav className="mt-8">
        <ul>
          <Link to="/dashboard" className={`mb-4 flex items-center px-4 py-2 hover:bg-gray-700 ${location.pathname === '/dashboard' ? 'bg-gray-700' : ''}`}>
            <TbClipboardList size={20} className="mr-2" />
            Dashboard
          </Link>
          <Link to="/dashboard/orders" className={`mb-4 flex items-center px-4 py-2 hover:bg-gray-700 ${location.pathname === '/dashboard/orders' ? 'bg-gray-700' : ''}`}>
            <TbShirt size={20} className="mr-2" />
            Orders
          </Link>
          <Link to="/dashboard/edit-profile" className={`mb-4 flex items-center px-4 py-2 hover:bg-gray-700 ${location.pathname === '/dashboard/edit-profile' ? 'bg-gray-700' : ''}`}>
            <FaPersonRifle size={20} className="mr-2" />
            Edit Profile
          </Link>
          {isAdmin && (
            <>
              <Link to="/dashboard/customers" className={`mb-4 flex items-center px-4 py-2 hover:bg-gray-700 ${location.pathname === '/dashboard/customers' ? 'bg-gray-700' : ''}`}>
                <TbUsers size={20} className="mr-2" />
                Customers
              </Link>
              <Link to="/dashboard/blog-manager" className={`mb-4 flex items-center px-4 py-2 hover:bg-gray-700 ${location.pathname === '/dashboard/blog-manager' ? 'bg-gray-700' : ''}`}>
                <TbPencil size={20} className="mr-2" />
                Blog Manager
              </Link>
              <Link to="/dashboard/notifications" className={`mb-4 flex items-center px-4 py-2 hover:bg-gray-700 ${location.pathname === '/dashboard/notifications' ? 'bg-gray-700' : ''}`}>
                <TbBellRinging size={20} className="mr-2" />
                Notifications
              </Link>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
const Dashboard_ = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    // Assuming you have a way to determine if the user is an admin
    const fetchUserRole = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setIsAdmin(userData.isAdmin || false);
        }
      }
    };
    fetchUserRole();
  }, []);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} isAdmin={isAdmin} toggleSidebar={toggleSidebar} />
      
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
{/* 
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
        </main> */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="blog-manager" element={<BlogManager />} />
            {/* <Route path="edit-profile" element={<EditProfile />} />
            {isAdmin && (
              <>
                <Route path="price-list" element={<PriceList />} />
                <Route path="notifications" element={<Notifications />} />
              </>
            )} */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard_;