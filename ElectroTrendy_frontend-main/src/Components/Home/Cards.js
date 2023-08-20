import React, { useEffect } from 'react';
import Card from './Card';
import './Cards.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cards() {
  const [products, setProducts] = useState([]);

  const fetchDate = async () => {
    const res = await axios.get(
      'http://127.0.0.1:7000/api/v1/products/?page=1&limit=4'
    );
    console.log(res.data);
    setProducts(res.data.products);
  };
  useEffect(() => {
    fetchDate();
  }, []);

  return (
    <section className="explore_Products">
  
      <div className="title">
        <div className="redBox"></div>
        <p className='text-white'>Our Products</p>
      </div>
      <h2 className="text-4xl text-white">Explore Our Products</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8  ">
        {products.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
      <div class="flex justify-center mt-6">
        <Link to="/product">
          <button class="bg-white  hover:bg-[#f2ee1b] font-bold py-3 px-4 rounded w-60">
            View All Products
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Cards;
