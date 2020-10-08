import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import temp from './companyEvents.json';
import Carousel from 'react-bootstrap/Carousel';
import Moment from 'react-moment';

export const Slider = (props) => {

  const [arr, setFortnite] = useState([]);
  
  useEffect(() => {
    setFortnite(temp); 
}, []);


    
return (
    <Container>
    <Carousel>
            {arr.map((item) => (
                <Carousel.Item  onClick={()=> {window.open(item.locationURL);}}>
                    <img
                    width="300" height="300"
                    className="d-block w-100"
                    src={item.image}
                    alt="No image"
                    />
                    <Carousel.Caption>
                  <h3>
                      <Moment format="DD-MM-YYYY">
                                    {item.date}
                      </Moment>
                  </h3>
                        <h2> {item.location}</h2>
                        <p>{item.description}</p>                       
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel> 
</Container>
);
}
