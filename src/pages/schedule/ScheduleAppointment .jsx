import React, { useState, useEffect } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase'; // Adjust the import path based on your project structure
import { auth } from '../../firebase/firebase'; // Import Firebase Authentication
import {  useNavigate } from 'react-router-dom';

const ScheduleAppointment = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0], // Set current date in YYYY-MM-DD format
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    vehiclePlate: '',
    service: '',
    otherService: '',
    customVehicleMake: '',
    userId: ""
  });
  const navigate = useNavigate()

  const [isOtherService, setIsOtherService] = useState(false);
  const [isOtherVehicleMake, setIsOtherVehicleMake] = useState(false);
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        email: user.email || '', // Prefill email
        phone: user.phoneNumber || '', // Prefill phone if available
        userId:user.uid ,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'service' && value === 'Other') {
      setIsOtherService(true);
    } else if (name === 'service') {
      setIsOtherService(false);
    }

    if (name === 'vehicleMake' && value === 'Other') {
      setIsOtherVehicleMake(true);
    } else if (name === 'vehicleMake') {
      setIsOtherVehicleMake(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "appointments"), {
        ...formData,
        createdAt: new Date(),
      });
      console.log("Appointment scheduled with ID: ", docRef.id);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: new Date().toISOString().split('T')[0],
        vehicleMake: '',
        vehicleModel: '',
        vehicleYear: '',
        vehiclePlate: '',
        service: '',
        otherService: '',
        customVehicleMake: '',
      });
      setIsOtherService(false);
      setIsOtherVehicleMake(false);
      navigate("/dashboard")
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 md:py-12 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto bg-white md:rounded-lg shadow-md p-8">
        <h1 className="text-lg md:text-2xl font-bold mb-6">Schedule Your Appointment</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required={!formData.phone} // Phone is required if not already filled
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 mb-1">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          
          {/* Vehicle Make Selection */}
          <div className="mb-4">
            <label htmlFor="vehicleMake" className="block text-gray-700 mb-1">Vehicle Make</label>
            <select
              id="vehicleMake"
              name="vehicleMake"
              value={formData.vehicleMake}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select a vehicle make</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Ford">Ford</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Custom Vehicle Make Textarea */}
          {isOtherVehicleMake && (
            <div className="mb-4">
              <label htmlFor="customVehicleMake" className="block text-gray-700 mb-1">Please specify the vehicle make</label>
              <textarea
                id="customVehicleMake"
                name="customVehicleMake"
                value={formData.customVehicleMake}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="vehicleModel" className="block text-gray-700 mb-1">Vehicle Model</label>
            <input
              type="text"
              id="vehicleModel"
              name="vehicleModel"
              value={formData.vehicleModel}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="vehicleYear" className="block text-gray-700 mb-1">Vehicle Year</label>
            <input
              type="number"
              id="vehicleYear"
              name="vehicleYear"
              value={formData.vehicleYear}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="vehiclePlate" className="block text-gray-700 mb-1">Vehicle Plate Number</label>
            <input
              type="text"
              id="vehiclePlate"
              name="vehiclePlate"
              value={formData.vehiclePlate}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Service Selection */}
          <div className="mb-4">
            <label htmlFor="service" className="block text-gray-700 mb-1">Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select a service</option>
              <option value="Oil Change">Oil Change</option>
              <option value="Tire Rotation">Tire Rotation</option>
              <option value="Brake Repair">Brake Repair</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Other Service Textarea */}
          {isOtherService && (
            <div className="mb-4">
              <label htmlFor="otherService" className="block text-gray-700 mb-1">Please describe the service</label>
              <textarea
                id="otherService"
                name="otherService"
                value={formData.otherService}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-[#e63946] text-white py-2 px-4 rounded hover:bg-[#d62839]"
          >
            Schedule Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
