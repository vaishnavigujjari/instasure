import Carousel from "react-bootstrap/Carousel";
import React, { useState, useEffect } from "react";
import bg from "./bg.jpg";
function Slider() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg}
          height="300px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg}
          height="300px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg}
          height="300px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Slider;
