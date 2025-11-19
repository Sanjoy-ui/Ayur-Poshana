import React from 'react';
import Sidebar from '../components/Navbar';
import Header from '../components/Header';
import DietChartGenerator from '../components/DietChartGenerator';
// import NutrientCalculator from '../components/NutrientCalculator';
import FoodSearch from '../components/FoodSearch';
import Calculator from './Calculator';

const PractitionerDashboard = () => {
  return (
    <div className="bg-cream-100 min-h-screen flex font-sans text-gray-800" style={{ backgroundColor: '#faf8f0' }}>
      {/* <Sidebar /> */}
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <DietChartGenerator />
          <Calculator/>
          <FoodSearch />
        </main>
      </div>
    </div>
  );
};

export default PractitionerDashboard;
