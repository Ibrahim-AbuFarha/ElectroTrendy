import React from 'react';
import './Category.css';

function Category() {
  return (
    <section className="category_container">
      <div className="title">
        <div className="redBox"></div>
        <p>Categories</p>
      </div>
      <h1 className="text-4xl browse-by">Browse by category</h1>
      <section className="cate_Cards">
        <div className="cate_datail">
          <i className="fa-solid fa-mobile-screen"></i>

          <p>Phones</p>
        </div>
        <div className="cate_datail">
          <i className="fa-solid fa-desktop"></i>

          <p>Computers</p>
        </div>
        <div className="cate_datail">
          <i className="fa-regular fa-clock"></i>

          <p>Watches</p>
        </div>
        <div className="cate_datail">
          <i className="fa-solid fa-camera"></i>
          <p>Camera</p>
        </div>
        <div className="cate_datail">
          <i className="fa-solid fa-headphones"></i>
          <p>HeadPhones</p>
        </div>
        <div className="cate_datail">
          <i className="fa-solid fa-gamepad"></i>
          <p>Gaming</p>
        </div>
      </section>
    </section>
  );
}

export default Category;
