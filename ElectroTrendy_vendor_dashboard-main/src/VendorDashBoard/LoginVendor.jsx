import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function LoginVendor() {
  const loginNav = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handelInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handelSubmit = async () => {
    try {
      const res = await axios.post(
        `http://localhost:7000/api/v1/vendors/login`,
        user
      );
      console.log(res);

      sessionStorage.setItem("vendorId", res.data.vendorId);
      loginNav("/home");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-tl from-blue-600 to-black flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg  lg:w-1/2 md:w-1/3 w-11/12 p-8">
        <p className="text-3xl font-extrabold text-gray-800 mb-4">
          Login to your account
        </p>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-800">
            Email
          </label>
          <input
            onChange={handelInput}
            name="email"
            placeholder="Email"
            aria-label="enter email address"
            type="email"
            className="w-full mt-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-600"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-800">
            Password
          </label>
          <div className="relative mt-2">
            <input
              name="password"
              onChange={handelInput}
              placeholder="Password"
              aria-label="enter Password"
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-600"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="w-6 h-6 text-gray-400 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Eye Icon SVG */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.15 10.574a15.916 15.916 0 002.717 2.263m2.98 1.389a15.916 15.916 0 012.262 2.718m1.39 2.98a15.916 15.916 0 002.718 2.262m2.979 1.391a15.916 15.916 0 012.262 2.717m1.392 2.981c1.112.337 2.238.578 3.364.723m1.513.218a17.916 17.916 0 004.08-.623M4.065 4.065a17.916 17.916 0 00-.624 4.08M1 12a11 11 0 002.333 6.554m3.19 2.647A10.963 10.963 0 0112 22a10.963 10.963 0 016.478-2.353M9.377 9.377A3 3 0 109.37 9.37zm4.246 4.246a2 2 0 11-2.828-2.828"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={handelSubmit}
            aria-label="login button"
            className="w-full py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-tl from-blue-600 to-black hover:from-blue-700 hover:to-black focus:outline-none focus:ring focus:ring-blue-600"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
