import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const FoodSearch = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const mockFoodDatabase = [
    'Apple',
    'Moong Dal',
    'Spinach',
    'Paneer',
    'Quinoa',
    'Brown Rice',
    'Almonds',
    'Ghee',
    'Turmeric'
  ];

  React.useEffect(() => {
    if (searchQuery.length > 1) {
      setSearchResults(
        mockFoodDatabase.filter((item) =>
          item.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-10 py-8">

        <h2 className="text-3xl font-bold text-green-800 flex items-center space-x-3">
          <FaSearch size={32} />
          <span>Food Database Search</span>
        </h2>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md transition hover:shadow-lg">
          <h3 className="text-xl font-bold text-green-800 mb-4 border-b border-green-200 pb-2">
            Search Food Database (8,000+ Items)
          </h3>

          <div className="relative">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g., Moong Dal, Spinach..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 text-lg outline-none"
            />
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {searchResults.length > 0 && (
            <div className="mt-4 border rounded-lg max-h-60 overflow-y-auto bg-white shadow-sm">
              {searchResults.map((item) => (
                <div
                  key={item}
                  className="p-3 border-b last:border-b-0 hover:bg-green-50 cursor-pointer transition"
                >
                  {item}
                </div>
              ))}
            </div>
          )}

          {searchQuery.length > 1 && searchResults.length === 0 && (
            <p className="mt-4 text-center text-gray-500">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodSearch;
