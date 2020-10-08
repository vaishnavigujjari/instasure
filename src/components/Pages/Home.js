import React from "react";
import "../../App.css";
import Footer from "../../components/Footer/Footer";
import Links from "../../components/Links/index";
import {Slider} from "../../components/Slider/Slider";

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
