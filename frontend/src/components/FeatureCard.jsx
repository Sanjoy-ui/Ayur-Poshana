import React from 'react';

const FeatureCard = ({ title, subtitle, description }) => (
  <div className="group relative p-8 h-60 flex flex-col items-center justify-center text-center bg-gradient-to-br from-white to-green-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden">
    <div className="transition-all duration-500 ease-in-out transform group-hover:-translate-y-8 group-hover:opacity-0">
      <h3 className="text-2xl font-bold text-green-800 mt-4">{title}</h3>
      <p className="text-gray-500">{subtitle}</p>
    </div>
    <div className="absolute inset-0 p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

export default FeatureCard;
