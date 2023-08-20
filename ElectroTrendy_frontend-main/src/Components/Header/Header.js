import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const [userActive, setUserActive] = useState({});
  const nav = useNavigate();
  const handelClick = () => {
    nav('/login');
    sessionStorage.clear();
  };

  const userId = sessionStorage.getItem('currentUserId');

  useEffect(() => {
    const fetchUser = async () => {
      if (userId !== null)
        try {
          const res = await axios.get(
            `http://127.0.0.1:7000/api/v1/customers/${userId}`
          );
          setUserActive(res.data.customer);
        } catch (e) {
          console.log(e);
        }
    };
    fetchUser();
  }, [userId]);
  console.log(userId);
  return (
    <>
      <nav className="bg-[#272525] border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img src="./assets/logo.png" className="h-8 mr-3" alt=" Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white md:hover:text-[#f2ee1b] ">
              ElectroTrendy
            </span>
          </Link>

          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              {/* <img
                className="w-8 h-8 rounded-full"
                src={userActive.img}
                alt="user photo"
              /> */}
            </button>
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              {/* <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  {userActive.name}
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  {userActive.email}
                </span>
              </div> */}
              <ul className="py-2 " aria-labelledby="user-menu-button">
                <li></li>
              </ul>
            </div>

            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {userId !== null ? (
            <li
              onClick={handelClick}
              className="flex items-center md:order-2 text-white md:hover:text-[#f2ee1b] "
              aria-current="page"
            >
              SignOut
            </li>
          ) : (
            <Link
              to="/login"
              className="flex items-center md:order-2 text-white md:hover:text-[#f2ee1b] "
              aria-current="page"
            >
              SignIn
            </Link>
          )}

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
            id="navbar-user"
          >
            <ul
              style={{ backgroundColor: '#272525' }}
              className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f2ee1b] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f2ee1b] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-white"
                >
                  Products
                </Link>
              </li>
              <li>
                {userId && (
                  <Link
                    to="/cart"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f2ee1b] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-white"
                  >
                    Cart
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
