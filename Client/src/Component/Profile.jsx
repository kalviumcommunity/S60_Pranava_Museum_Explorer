import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCode, FaUserCircle, FaEdit, } from 'react-icons/fa';


const Profile = () => {
  const [location,setLocation] = useState("San Francisco, CA")
  const [editLocation, setEditLocation] = useState(false)



  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full transition-all duration-300 ease-in-out transform hover:scale-105">
        <div className="absolute top-0 right-0 pt-4 pr-4">
          <button className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4">
              <img
                className="w-full h-full rounded-full object-cover border-4 border-blue-500 shadow-lg"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile Avatar"
              />
              <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1 border-2 border-white">
                <FaUserCircle className="text-white" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">Jane Doe</h2>

            {/* location part */}
            <div className="mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-red-500" />
              {editLocation ? (
                <input
                  type="text"
                  className="border px-2 py-1 rounded w-48"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onBlur={() => setEditLocation(false)}
                  autoFocus
                />
              ) : (
                <span className="text-gray-600 cursor-pointer">
                  {location}
                </span>
              )}
              <FaEdit className="ml-2 text-gray-500 cursor-pointer" onClick={() => setEditLocation(true)} />
            </div>
          </div>


          {/* hobby part */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
              <FaCode className="mr-2 text-blue-500" /> Hobby
              
             
            </h3>
            <div className="flex flex-wrap gap-2">
            
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Bio</h3>
            <p className="text-gray-600 leading-relaxed">
              
            </p>
          </div>
          <div className="mt-8">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
