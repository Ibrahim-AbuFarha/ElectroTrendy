import React from "react";
import "./Features.css";

function Features() {
  return (
    <section className="features">
      <div className="icon_info">
        <div className="out_cont">
          <div className="in_cont">
            <i class="fa-solid fa-truck" style={{ color: "#f2ee1b" }}></i>
          </div>
        </div>
        <h2>FREE AND FAST DELIVERY</h2>
        <p>Free delivery for all orders over $140</p>
      </div>
      {/* //// */}
      <div className="icon_info">
        <div className="out_cont">
          <div className="in_cont">
            <i class="fa-solid fa-headphones" style={{ color: "#f2ee1b" }}></i>
          </div>
        </div>
        <h2>FREE AND FAST DELIVERY</h2>
        <p>Free delivery for all orders over $140</p>
      </div>
      {/* //// */}
      <div className="icon_info">
        <div className="out_cont">
          <div className="in_cont">
            <i class="fa-solid fa-money-check" style={{ color: "#f2ee1b" }}></i>
          </div>
        </div>
        <h2>FREE AND FAST DELIVERY</h2>
        <p>Free delivery for all orders over $140</p>
      </div>
      {/* //// */}
    </section>
  );
}

export default Features;
