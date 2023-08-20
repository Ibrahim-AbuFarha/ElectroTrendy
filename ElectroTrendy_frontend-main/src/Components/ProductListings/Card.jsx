import { useContext } from 'react';
import CartContext from '../../store/cartContext';
import { useNavigate } from 'react-router-dom';

function Card({ product }) {
  const nav = useNavigate();
  const { addItem } = useContext(CartContext);
  const handelClick = () => {
    if (sessionStorage.getItem('currentUserId')) {
      addItem(product._id);
    } else {
      nav('/login');
    }
  };
  return (
    <div
      key={product._id}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden h-100 p-[1em]"
    >
      <img
        className="h-56 object- fill w-full"
        src={product.img}
        alt={product.id}
      />

      <div className="p-2 h-70">
        <p>
          <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2 text-sm h-[40px]">
            {product.name}
          </h5>
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-200 line-clamp-3 text-xs h-[100px]">
          {' '}
          {product.desc}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-200 line-clamp-3 ">
          {' '}
          ${product.price}
        </p>
        <p
          onClick={handelClick}
          className="inline-flex items-center cursor-pointer justify-center w-full px-3 py-2 font-medium text-center text-white  rounded-lg  hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600  dark:focus:ring-blue-800 text-xs bg-[#272525] hover:bg-[#b5b188]"
        >
          Add
        </p>
      </div>
    </div>
  );
}

export default Card;
