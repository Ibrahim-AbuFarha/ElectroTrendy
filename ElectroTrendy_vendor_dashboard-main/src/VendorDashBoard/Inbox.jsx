import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Inbox() {
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    try {
      const response = await axios.get();
      setOrders(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  const order = orders.map((el) => {
    return (
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span>Order Number :</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
              <li>Customer Name : </li>
              <li>Product List : </li>
              <li>Time Of place Order </li>
            </ul>
          </div>
        </div>
      </div>
    );
  });
  return <div className=" mb-6 p-4 sm:ml-64">{order}</div>;
}
