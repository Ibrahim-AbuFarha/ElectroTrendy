import React from 'react';

function Card({ product }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden h-100 p-[1em]">
      <a href="#">
        <img
          className="h-56 object- fill w-full"
          src={product.img}
          alt="Blog image"
        />
      </a>
      <div className="p-2 h-70">
        <a href="#">
          <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2 text-sm h-[40px]">
            {product.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-200 line-clamp-3 text-xs h-[100px]">
          {' '}
          {product.desc}
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center w-full px-3 py-2 font-medium text-center text-white  rounded-lg  hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600  dark:focus:ring-blue-800 text-xs bg-[#272525] hover:bg-[#b5b188]"
        >
          View all products
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Card;
