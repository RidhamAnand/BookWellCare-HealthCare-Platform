// src/components/LoginSelector.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSelector = () => {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  if(selectedOption=="user"){
    setSelectedOption("")
    navigate("/login");

  }else if(selectedOption=="doctor"){
    setSelectedOption("")
    navigate("/doctorLogin");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">BookWellCare</h1>
        <div className="flex space-x-4">
          <div
            className={`bg-white p-8 rounded shadow-md cursor-pointer text-blue-500 ${
              selectedOption === 'user' ? 'border-2 border-blue-500' : 'border border-gray-200'
            }`}
            onClick={() => handleOptionSelect('user')}
          >
            <h2 className="text-xl font-bold mb-4">User Login</h2>
            {/* Add any additional user-related information or icon here */}
          </div>
          <div
            className={`bg-white p-8 rounded shadow-md cursor-pointer text-blue-500 ${
              selectedOption === 'doctor' ? 'border-2 border-blue-500' : 'border border-gray-200'
            }`}
            onClick={() => handleOptionSelect('doctor')}
          >
            <h2 className="text-xl font-bold mb-4">Doctor Login</h2>
            {/* Add any additional doctor-related information or icon here */}
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default LoginSelector;
