import React from "react";
import "../../App.css";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import Links from "../../components/Links/Links";

function Home() {
  return (
    <>
      <Slider />
      <Links />
      <Footer />
    </>
  );
}

export default Home;
