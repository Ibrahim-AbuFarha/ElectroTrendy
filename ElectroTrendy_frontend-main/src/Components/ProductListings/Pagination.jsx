// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// export default function Pagination({ fetchData ,count }) {

//   const [itemsPerPage, setItemsperPage] = useState(5);
//   const [currentPage, setCurrentPage] = useState(1);
//   const lastIndex = currentPage * itemsPerPage;
//   const firstIndex = lastIndex - itemsPerPage;

//   const newProducts = products.slice(firstIndex, lastIndex);
//   const nPage = Math.ceil(products.length / itemsPerPage);
//   const numbers = [...Array(nPage + 1).keys()].slice(1);

//   function prePage() {
//     if (currentPage !== 1) {
//       setCurrentPage(currentPage - 1);
//       fetchData(currentPage - 1);
//     }
//   }
//   function nextPage() {
//     if (currentPage !== nPage) {
//       setCurrentPage(currentPage + 1);
//       fetchData(currentPage + 1);
//     }
//   }
//   function changeCPage(id) {
//     setCurrentPage(id);
//     fetchData(id);
//   }

//   return (
//     <div className="flex items-center justify-between  border-gray-200 bg-white px-4 py-3 sm:px-6">
//       <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
//         <div>
//           <nav
//             className="isolate inline-flex -space-x-px rounded-md shadow-sm"
//             aria-label="Pagination"
//           >
//             <Link
//               to="#"
//               onClick={prePage}
//               className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//             >
//               <span className="sr-only">Previous</span>
//               <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
//             </Link>
//             {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
//             {numbers.map((n, i) => {
//               return (
//                 <li
//                   key={i}
//                   className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
//                 >
//                   <a href="#" onClick={() => changeCPage(n)}>
//                     {n}
//                   </a>
//                 </li>
//               );
//             })}
//             <Link
//               to="#"
//               onClick={nextPage}
//               className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//             >
//               <span className="sr-only">Next</span>
//               <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// }
