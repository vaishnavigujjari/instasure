import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

class App extends React.Component {
    render() {
        const images = [
            { url: "src/Images/1.jpeg" },
            { url: "src/Images/2.jpg" },
            { url: "src/Images/3.jpg" },
            { url: "src/Images/4.jpeg" }
        ];

        return (
            <div>
                <SimpleImageSlider
                    width={1300}
                    height={400}
                    images={images}
                />
            </div>
        );
    }
}
export default App;



 
// import React, {Component} from 'react'
// import Carousel from 'react-bootstrap/Carousel'
 
// class App extends Component {
//     render() {
    
//         let data = [
//             {
//                 des: "1",
//                 imgSrc: "/src/components/Images/3.jpg",
//                 date : "today",
//                 location : "hyderabad"
//             },
//             {
//                 des: "2",
//                 imgSrc: "src/components/Images/4.jpeg",
//                 date : "today",
//                 location : "hyderabad"
//             }
//         ];
        
//         return (
//             <Carousel>
//                 {data.map((item) =>(
//                     <Carousel.Item>
//                         <img
//                             width = "300"  height ="300"
//                             className="d-block w-100"
//                             src={item.image}
//                             alt="First slide"
//                         />
//                         <Carousel.Caption>
//                             <h5> WHEN {item.date} </h5>
//                             <h5> WHERE {item.location} </h5>
//                             <p> {item.des} </p>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                 ))}
//             </Carousel>
//         )
//     }
// }
// export default App;

