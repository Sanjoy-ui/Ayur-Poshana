import React from 'react';
import { FaAppleAlt, FaChild, FaMale, FaFemale, FaCalculator } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const Calculator = () => {
    const [nutrientCategory, setNutrientCategory] = React.useState('Grains');
    const [gender, setGender] = React.useState('Male');
    const [calcAge, setCalcAge] = React.useState('30');
    const [nutrientResult, setNutrientResult] = React.useState(null);

    const handleCalculateNutrients = (e) => {
        e.preventDefault();
        setNutrientResult(
            `Nutrient data for ${nutrientCategory} for a ${calcAge}-year-old ${gender.toLowerCase()} would be displayed here.`
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-10 py-8">

                <h2 className="text-3xl font-bold text-green-800 flex items-center space-x-3">
                    <FaCalculator size={32} /> <span>Nutrient Calculator</span>
                </h2>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md transition hover:shadow-lg hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-green-800 mb-4 border-b border-green-200 pb-2">
                        Scientifically Calculated Nutrients
                    </h3>

                    <form onSubmit={handleCalculateNutrients} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div className="md:col-span-1">
                            <label className="block text-sm font-medium text-gray-600 mb-1">Food Category</label>
                            <div className="flex items-center space-x-2">
                                <FaAppleAlt className="text-green-500" />
                                <select
                                    value={nutrientCategory}
                                    onChange={(e) => setNutrientCategory(e.target.value)}
                                    className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                                >
                                    <option>Grains</option>
                                    <option>Vegetables</option>
                                    <option>Fruits</option>
                                    <option>Dairy</option>
                                    <option>Lentils</option>
                                </select>
                            </div>
                        </div>

                        <div className="md:col-span-1">
                            <label className="block text-sm font-medium text-gray-600 mb-1">Gender</label>
                            <div className="flex items-center space-x-2">
                                {gender === 'Male' && <FaMale className="text-blue-500" />}
                                {gender === 'Female' && <FaFemale className="text-pink-500" />}
                                {gender === 'Child' && <FaChild className="text-yellow-500" />}
                                <select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Child</option>
                                </select>
                            </div>
                        </div>

                        <div className="md:col-span-1">
                            <label className="block text-sm font-medium text-gray-600 mb-1">Age</label>
                            <input
                                type="number"
                                value={calcAge}
                                onChange={(e) => setCalcAge(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                                required
                            />
                        </div>

                        <div className="md:col-span-1">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-green-500 to-teal-400 text-white font-bold py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                            >
                                <FaCalculator />
                                <span>Calculate</span>
                            </button>
                        </div>
                    </form>

                    {nutrientResult && (
                        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg">
                            {nutrientResult}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Calculator;
