// import Carousel from "react-bootstrap/Carousel";
// import React, { useState, useEffect } from "react";
// import bg from "./bg.jpg";
// function Slider() {
//   const [index, setIndex] = useState(0);
//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };
//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={bg}
//           height="300px"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={bg}
//           height="300px"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={bg}
//           height="300px"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }
// export default Slider;




import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import temp from './companyEvents.json';
import Carousel from 'react-bootstrap/Carousel';
import Moment from 'react-moment';

import { connect } from 'react-redux';
import { fetchEvents} from '../../redux/company_events/eventActions';


// const Slider = (props) => {
  function Slider({eventData, fetchEvents}) {
  // const [companyEvents, setCompanyEvents] = useState([]);
  
  useEffect(() => {
    // setCompanyEvents(temp); 
    fetchEvents()
  }, []);
  console.log(eventData)


return eventData.loading ? (
  <h2>Loading</h2>
) : eventData.error ? (
  <h2>{eventData.error}</h2>
) : (
    
// return (
    <Container>
    <Carousel>
            {eventData.events.map((item) => (
                <Carousel.Item  onClick={()=> {window.open(item.locationURL);}}>
                    <img
                    height="300"
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


const mapStateToProps = state => {
  return {
      eventData: state.event
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchEvents: () => dispatch(fetchEvents())
      // addLink : (obj) => dispatch(addLink(obj)) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Slider)


// export default Slider