import React from 'react';
// import Header from "../Components/Header/Header";
import Slider from '../Components/Home/Slider';
import Cards from '../Components/Home/Cards';
// import Card from '../Components/Cards/Card'
import Category from "../Components/Home/Category";
// import Footer from "../Components/Footer/Footer";
import Features from "../Components/Home/Features";
import AboutUs from "../Components/Home/AboutUs";
// import Login from "../Components/Login/Login";
// import Register from "../Components/Register/Register";
import OurTeam from "../Components/Home/OurTeam";

function LandingPage() {
  return (
    <>
      <Slider />
      <AboutUs /> 
      <Cards />
      <Category />
      <OurTeam/>
      <Features />
    </>
  );
}

export default LandingPage;
