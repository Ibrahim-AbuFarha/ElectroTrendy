import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function ProductList() {
  const id = sessionStorage.getItem("vendorId");
  const nav = useNavigate();

  if (!id) {
    nav("/");
  }
  // this for save product from Api
  const [products, setProducts] = useState([]);

  //   here i will fetch data from Api and store them in state
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:7000/api/v1/products/vendor/${id}`
      );
      console.log(response.data.vendorProducts);
      setProducts(response.data.vendorProducts);
    } catch (err) {
      console.log(err);
    }
  };
  //   this for send request one time when open page
  useEffect(() => {
    fetchData();
  }, []);

  // here  handel if vendor want to remove product
  const removeProduct = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:7000/api/v1/products/${id}`);

      setProducts(products.filter((el) => el._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // here i want extract all data from array
  const product = products.map((el) => {
    return (
      <tr
        key={el._id}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {el.name}
        </th>
        <td className="px-6 py-4">{el.quantity}</td>
        <td className="px-6 py-4">{el.cat}</td>
        <td className="px-6 py-4">{el.price}$</td>
        <td className="px-6 py-4 flex gap-2">
          <Link
            to={`${el._id}`}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </Link>
          <p
            onClick={() => removeProduct(el._id)}
            className="font-medium text-red-600 dark:text-red-500 hover:underline"
          >
            Remove
          </p>
        </td>
      </tr>
    );
  });
  return (
    <div className="p-4 sm:ml-64">
      <Link to="/add">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add New Product
        </button>
      </Link>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Quantity
                  <a href="#">
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Category
                  <a href="#" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Price
                  <a href="#">
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="flex items-center">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>{product}</tbody>
        </table>
      </div>
    </div>
  );
}
