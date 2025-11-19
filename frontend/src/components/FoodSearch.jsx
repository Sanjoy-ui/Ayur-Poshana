// import React from 'react';
// import { SearchIcon } from './Icons';

// const FoodSearch = () => {
//     const [searchQuery, setSearchQuery] = React.useState('');
//     const [searchResults, setSearchResults] = React.useState([]);
//     const mockFoodDatabase = ['Apple', 'Moong Dal', 'Spinach', 'Paneer', 'Quinoa', 'Brown Rice', 'Almonds', 'Ghee', 'Turmeric'];

//     React.useEffect(() => {
//         if (searchQuery.length > 1) {
//             setSearchResults(mockFoodDatabase.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase())));
//         } else {
//             setSearchResults([]);
//         }
//     }, [searchQuery]);

//     return (
//         <section id="search" className="mt-8 scroll-mt-24">
//             <div className="bg-gradient-to-br from-white to-green-50 p-6 md:p-8 rounded-2xl shadow-md">
//                 <h3 className="text-xl font-bold text-green-800 mb-4 border-b border-green-200 pb-2">Search Food Database (8,000+ Items)</h3>
//                 <div className="relative">
//                     <input type="search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="e.g., Moong Dal, Spinach..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none text-lg" />
//                     <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
//                 </div>
//                 {searchResults.length > 0 && (
//                     <div className="mt-4 border rounded-lg max-h-60 overflow-y-auto">
//                         {searchResults.map(item => (
//                             <div key={item} className="p-3 border-b last:border-b-0 hover:bg-green-50">{item}</div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default FoodSearch;
