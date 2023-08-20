import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EditProduct() {
  const backNav = useNavigate();
  const vendorId = sessionStorage.getItem("vendorId");

  if (!vendorId) {
    backNav("/");
  }
  const { id } = useParams();
  const [products, setProducts] = useState({});
  //
  console.log(id);

  //   this for send request one time when open page
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:7000/api/v1/products/${id}`
        );
        setProducts(response.data.product);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };
  //
  const handelSubmit = async () => {
    try {
      const updatedProduct = await axios.patch(
        `http://127.0.0.1:7000/api/v1/products/${id}`,
        products
      );
      console.log("Product update successfully", updatedProduct);
      backNav("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="  mb-6 p-4 sm:ml-64 grid justify-center items-center h-screen">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name:
          </label>
          <input
            onChange={handleInputChange}
            value={products.name}
            name="name"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description:
          </label>
          <input
            value={products.desc}
            onChange={handleInputChange}
            name="desc"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="cat"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category:
          </label>
          <input
            onChange={handleInputChange}
            value={products.cat}
            name="cat"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="img"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Image
          </label>
          <input
            onChange={handleInputChange}
            value={products.img}
            name="img"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="qu"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Quantity:
          </label>
          <input
            onChange={handleInputChange}
            value={products.quantity}
            name="quantity"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price:
          </label>
          <input
            onChange={handleInputChange}
            value={products.price}
            name="price"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          onClick={handelSubmit}
          type="button"
          className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </>
  );
}
