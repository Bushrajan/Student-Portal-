// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FiChevronDown } from "react-icons/fi";
// import { SearchIcon } from "lucide-react";

// const resultsData = [
//   { id: 1, term: "Spring 2023", gp: 63.34, cgp: 63.34, cr: 19, totalCr: 19, sgpa: 3.33 },
//   { id: 2, term: "Fall 2023", gp: 52.32, cgp: 115.6, cr: 17, totalCr: 36, sgpa: 3.08 },
//   { id: 3, term: "Spring 2024", gp: 59.3, cgp: 174.9, cr: 16, totalCr: 52, sgpa: 3.49 },
//   { id: 4, term: "Fall 2024", gp: 61.25, cgp: 236.15, cr: 18, totalCr: 70, sgpa: 3.06 },
//   { id: 5, term: "Spring 2025", gp: 70.35, cgp: 306.5, cr: 10, totalCr: 90, sgpa: 3.93 },
// ];

// motion
// const Results = () => {
//   const [search, setSearch] = useState("");
//   const [termFilter, setTermFilter] = useState("All Terms");
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const filteredResults = resultsData.filter((item) => {
//     const matchSearch =
//       item.term.toLowerCase().includes(search.toLowerCase()) ||
//       item.id.toString().includes(search) ||
//       item.sgpa.toString().includes(search) ||
//       item.cgp.toString().includes(search);

//     const matchTerm =
//       termFilter === "All Terms" || item.term.toLowerCase().includes(termFilter.toLowerCase());

//     return matchSearch && matchTerm;
//   });

//   return (
//     <div className="">
//       <h2 className="text-2xl font-bold text-black mb-4">Your Results</h2>

//       {/* Search + Filter */}
//       <div className="p-2 bg-white rounded-xl shadow-md  mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mb-6">

//         <div className="flex items-center gap-3 w-full  px-3 py-2 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-400 bg-white">
//           <SearchIcon size={24} className="text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search  by  Term,  ID,  SGPA,  CGPA . . ."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
//           />
//         </div>

//         {/* Dropdown Filter */}
//         <div className="relative w-full md:w-1/5">
//           <button
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//             className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
//           >
//             <span className="text-gray-700 font-medium">{termFilter}</span>
//             <motion.span
//               animate={{ rotate: dropdownOpen ? 180 : 0 }}
//               transition={{ duration: 0.3 }}
//               className={`text-xl ${dropdownOpen ? "text-blue-600" : "text-black"}`}
//             >
//               <FiChevronDown />
//             </motion.span>
//           </button>

//           {dropdownOpen && (
//             <motion.ul
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 10 }}
//               className="absolute z-10 w-full bg-white border border-gray-200 rounded-md mt-2 shadow-lg"
//             >
//               {["All Terms", "Spring", "Fall"].map((term) => (
//                 <li
//                   key={term}
//                   onClick={() => {
//                     setTermFilter(term);
//                     setDropdownOpen(false);
//                   }}
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
//                 >
//                   {term}
//                 </li>
//               ))}
//             </motion.ul>
//           )}
//         </div>
//       </div>

//       {/* Results Table */}
//       <div className="overflow-x-auto w-full rounded-xl  shadow-md">
//         <table className="w-full  table-auto  text-center border-gray-200  bg-white">
//           <thead className=" text-[#de8628]">
//             <tr className="rounded bg-[#EBC9A4] font-light uppercase">
//               <th className="px-4 py-4 text-[13px]">ID</th>
//               <th className="px-4 py-4 text-[13px]">Term</th>
//               <th className="px-4 py-4 text-[13px]">Grading Points</th>
//               <th className="px-4 py-4 text-[13px]">Cumulative GP</th>
//               <th className="px-4 py-4 text-[13px]">CR</th>
//               <th className="px-4 py-4 text-[13px]">Total CR</th>
//               <th className="px-4 py-4 text-[13px]">SGPA</th>
//             </tr>
//           </thead>
//           <tbody className="text-center">
//             {filteredResults.map((item) => (
//               <tr key={item.id} className="border-t text-gray-700 border-gray-200 hover:bg-gray-50">
//                 <td className="px-4  py-4">{item.id}</td>
//                 <td className="px-4  py-4 text-[#de8628] font-medium  text-[14px] cursor-pointer hover:underline">{item.term}</td>
//                 <td className="px-4  py-4">{item.gp}</td>
//                 <td className="px-4  py-4">{item.cgp}</td>
//                 <td className="px-4  py-4">{item.cr}</td>
//                 <td className="px-4  py-4">{item.totalCr}</td>
//                 <td className="px-4 text-[#18b580]  py-4">{item.sgpa}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Results;

import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { SearchIcon } from "lucide-react";

const resultsData = [
  { id: 1, term: "Spring 2023", gp: 63.34, cgp: 63.34, cr: 19, totalCr: 19, sgpa: 3.33 },
  { id: 2, term: "Fall 2023", gp: 52.32, cgp: 115.6, cr: 17, totalCr: 36, sgpa: 3.08 },
  { id: 3, term: "Spring 2024", gp: 59.3, cgp: 174.9, cr: 16, totalCr: 52, sgpa: 3.49 },
  { id: 4, term: "Fall 2024", gp: 61.25, cgp: 236.15, cr: 18, totalCr: 70, sgpa: 3.06 },
  { id: 5, term: "Spring 2025", gp: 70.35, cgp: 306.5, cr: 10, totalCr: 90, sgpa: 3.93 },
];

const Results = () => {
  const [search, setSearch] = useState("");
  const [termFilter, setTermFilter] = useState("All Terms");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredResults = resultsData.filter((item) => {
    const matchSearch =
      item.term.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toString().includes(search) ||
      item.sgpa.toString().includes(search) ||
      item.cgp.toString().includes(search);

    const matchTerm =
      termFilter === "All Terms" || item.term.toLowerCase().includes(termFilter.toLowerCase());

    return matchSearch && matchTerm;
  });

  motion
  return (
    <div className="lg:px-4 md:px-4 py-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-black mb-4">Your Results</h2>

      {/* Search + Filter */}
      <div className="p-4 bg-white rounded-xl shadow-md flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
        {/* Search Input */}
        <div className="flex items-center gap-3 w-full px-3 py-2 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-[#de8628] bg-white">
          <SearchIcon size={24} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by Term, ID, SGPA, CGPA..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-sm text-gray-500 placeholder-gray-400"
          />
        </div>

        {/* Dropdown Filter */}
        <div className="relative w-full md:w-1/4">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
          >
            <span className="text-gray-700 font-medium">{termFilter}</span>
            <motion.span
              animate={{ rotate: dropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`text-xl ${dropdownOpen ? "text-[#de8628]" : "text-black"}`}
            >
              <FiChevronDown />
            </motion.span>
          </button>

          {dropdownOpen && (
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute z-10 w-full bg-white border border-gray-200 rounded-md mt-2 shadow-lg"
            >
              {["All Terms", "Spring", "Fall"].map((term) => (
                <li
                  key={term}
                  onClick={() => {
                    setTermFilter(term);
                    setDropdownOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                >
                  {term}
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>

      {/* Results Table */}
      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="min-w-[600px] w-full table-auto text-center border-gray-200 bg-white">
          <thead className="text-[#de8628]">
            <tr className="bg-[#ebc9a484] font-light uppercase">
              <th className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-2 text-[13px]">ID</th>
              <th className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-2 text-[13px]">Term</th>
              <th className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-2 text-[13px]">Grading Points</th>
              <th className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-2 text-[13px]">Cumulative GP</th>
              <th className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-2 text-[13px]">CR</th>
              <th className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-2 text-[13px]">Total CR</th>
              <th className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-2 text-[13px]">SGPA</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredResults.map((item) => (
              <tr key={item.id} className="border-t text-gray-700 border-gray-200 hover:bg-gray-50">
                <td className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-4 lg:text-[14px] font-medium md:text-[14px] text-[11px]">{item.id}</td>
                <td className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-4 text-[#de8628] font-semibold  lg:text-[14px] md:text-[14px] text-[11px] cursor-pointer hover:underline">{item.term} </td>
                <td className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-4 lg:text-[14px] font-medium md:text-[14px] text-[11px]">{item.gp}</td>
                <td className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-4 lg:text-[14px] font-medium md:text-[14px] text-[11px]">{item.cgp}</td>
                <td className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-4 lg:text-[14px] font-medium md:text-[14px] text-[11px]">{item.cr}</td>
                <td className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-4 lg:text-[14px] font-medium md:text-[14px] text-[11px]">{item.totalCr}</td>
                <td className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-4 lg:text-[14px] font-medium md:text-[14px] text-[11px] text-[#18b580]">{item.sgpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;