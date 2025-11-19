import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const Deshboard = () => {
  const [patientName, setPatientName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [constitution, setConstitution] = React.useState('Pitta');
  const [healthCondition, setHealthCondition] = React.useState('Acidity');
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [dietChart, setDietChart] = React.useState(null);
  const [formError, setFormError] = React.useState('');

  const recentCharts = [
    { id: 1, name: 'Rohan Sharma', condition: 'Acidity', date: '2025-09-12' },
    { id: 2, name: 'Priya Patel', condition: 'Weight Loss', date: '2025-09-11' },
    { id: 3, name: 'Anjali Mehta', condition: 'Diabetes', date: '2025-09-10' },
  ];

  const handleGenerateChart = (e) => {
    e.preventDefault();

    if (!patientName || !age) {
      setFormError('Please fill in patient name and age.');
      return;
    }

    setFormError('');
    setIsGenerating(true);
    setDietChart(null);

    setTimeout(() => {
      setDietChart({
        patient: patientName,
        chart: {
          breakfast: [{ item: 'Poha with vegetables', nutrition: 'Light carbs, vitamins' }],
          lunch: [{ item: 'Roti with Dal and Sabzi', nutrition: 'Balanced meal' }],
          dinner: [{ item: 'Khichdi', nutrition: 'Easy to digest' }],
        },
      });

      setIsGenerating(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10 py-8">

        {/* Generator Form and Diet Chart Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Form */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md transition hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-bold text-green-800 mb-4 border-b border-green-200 pb-2">
              Diet Chart Generator
            </h3>

            <form onSubmit={handleGenerateChart} className="space-y-4">
              <input
                type="text"
                placeholder="Patient Name"
                value={patientName}
                onChange={(e) => { setPatientName(e.target.value); setFormError(''); }}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
                required
              />

              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => { setAge(e.target.value); setFormError(''); }}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
                required
              />

              <select
                value={constitution}
                onChange={(e) => setConstitution(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
              >
                <option>Vata</option>
                <option>Pitta</option>
                <option>Kapha</option>
              </select>

              <select
                value={healthCondition}
                onChange={(e) => setHealthCondition(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
              >
                <option>General Wellness</option>
                <option>Acidity</option>
                <option>Diabetes</option>
              </select>

              <button
                type="submit"
                disabled={isGenerating}
                className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition"
              >
                {isGenerating ? 'Generating...' : 'Generate Diet Chart'}
              </button>

              {formError && <p className="text-red-500 text-center mt-2">{formError}</p>}
            </form>
          </div>

          {/* Generated Diet Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-200 shadow-md transition hover:shadow-lg hover:-translate-y-1 min-h-[400px] flex flex-col justify-center items-center">
            {isGenerating ? (
              <div className="text-center">
                <FaLeaf size={48} className="text-green-500 animate-spin" />
                <p className="mt-4 text-gray-600">Generating your diet chart...</p>
              </div>
            ) : dietChart ? (
              <div className="w-full text-left">
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  Diet Plan for: {dietChart.patient}
                </h3>

                {Object.entries(dietChart.chart).map(([meal, items]) => (
                  <div key={meal} className="mb-4">
                    <h4 className="capitalize font-semibold text-green-700">{meal}</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {items.map((item) => (
                        <li key={item.item}>
                          <strong>{item.item}:</strong> {item.nutrition}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Generated diet chart will appear here.</p>
            )}
          </div>

        </div>

        {/* Recent Diet Charts */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md transition hover:shadow-lg hover:-translate-y-1">
          <h3 className="text-xl font-bold text-green-800 mb-4 border-b border-green-200 pb-2">
            Recent Diet Charts
          </h3>

          <div className="space-y-3">
            {recentCharts.map((chart) => (
              <div key={chart.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                <div>
                  <p className="font-semibold text-gray-800">{chart.name}</p>
                  <p className="text-sm text-gray-500">{chart.condition}</p>
                </div>
                <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                  <p className="text-sm text-gray-400">{chart.date}</p>
                  <a href="#" className="text-sm font-medium text-green-700 hover:underline">
                    View Chart
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Deshboard;
