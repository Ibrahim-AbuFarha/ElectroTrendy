import React from "react";
import { useState, useEffect } from "react";
import "./Slider.css";
function Slider() {
  {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
      const interval = setInterval(() => {
        document.getElementById("radio" + counter).checked = true;
        setCounter((prevCounter) => (prevCounter % 4) + 1);
      }, 2000);

      return () => clearInterval(interval);
    }, [counter]);
    return (
      <div className="body">
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />

            <div className="slide first">
              <img
                src="https://www.apple.com/mideast/iphone/home/bo/images/meta/iphone__btp62hy2cbea_og.jpg"
                alt="img"
              />
            </div>
            <div className="slide">
              <img
                src="https://m.economictimes.com/thumb/msid-99669954,width-7046,height-3963,resizemode-4,imgsize-1040534/best-gaming-headphones-in-india-under-rs-2500-for-crystal-clear-sound.jpg"
                alt="img"
              />
            </div>
            <div className="slide">
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/7fb8deac5d3c73e360bc687ed62be6cf/gaming-laptops-og-image.png"
                alt="img"
              />
            </div>
            <div className="slide">
              <img
                src="https://media.discordapp.net/attachments/1125737184180326440/1134790077185278063/tcl-6-series-tv-r6-2022-6396.png?width=1177&height=662"
                alt="img"
              />
            </div>
         
            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>
          </div>
          <div className="navigation-manual ">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
            <label htmlFor="radio4" className="manual-btn"></label>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
