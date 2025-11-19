import React from 'react';

const CapabilityCard = ({ title, description }) => (
  <div className="bg-gradient-to-br from-white to-green-100 p-6 rounded-xl shadow-md h-72 flex flex-col justify-center">
    <h3 className="text-2xl font-semibold text-green-700 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default CapabilityCard;
