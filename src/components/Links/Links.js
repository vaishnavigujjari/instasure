import React, { useState,useEffect } from "react";
// import { button } from "../Button";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Container, Row, Col, Modal, Form, Button, Nav, NavDropdown } from 'react-bootstrap';
// import { Container } from './Container';
import {
  LinksSection,
  LinksWrapper,
  LinksHeading,
  LinksContainer,
  LinksCard,
  LinksCardInfo,
  LinksCardIcon,
  LinksCardPlan,
  LinksCardCost,
  LinksCardLength,
  LinksCardFeatures,
  LinksCardFeature,
} from "./Links.elements";

import links from './links.json';

  export const Links = (props) => {
    const [show, setShow] = useState(false);
    const [fetchData, isFetchingData] = useState(false);
    const links  = [];
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [dateCreate, setDateCreate] = useState("");
    const [locationCreate, setLocationCreate] = useState("");
    const [locationURLCreate, setlocationURLCreate] = useState("");
    const [descriptionCreate, setDescriptionCreate] = useState("");
    const [imageCreate, setImageCreate] = useState("");


    const componentDidMount = () =>{
      
    }


    const addCompanyEvent = () =>{
      let obj = {
        "date": dateCreate,
        "Location" : locationCreate,
        "locationURL" : locationURLCreate,
        "description": descriptionCreate,
        "image": imageCreate
      };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)

    };
      fetch('http://localhost:8080/companyEvents',requestOptions)
          .then(response => response.json())
          .then((data) => {
            // setDateCreate(data.date);
            // setLocationCreate(data.type);
            // setlocationURLCreate(data.name);
            // setDescriptionCreate(data.description);
            // setImageCreate(data.image);
            console.log(data);
          })
    
    handleClose()

    }





  return (
    <React.Fragment>
      <br/>
      <br/>
      {/* button for add item */}
      <center><Button variant="success" onClick={() => {handleShow()}}>Add Item</Button></center>
      {/* Code for form data using modal pop-up */}
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicText">
              <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Enter Date"
                      onChange={(e) => {setDateCreate(e.target.value)}} />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter Type"
                      onChange={(e) => {setLocationCreate(e.target.value)}} />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Location URL</Form.Label>
                <Form.Control type="text" placeholder="Enter Loaction URL"
                      onChange={(e) => {setlocationURLCreate(e.target.value)}} />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Image</Form.Label>
                <Form.Control type="url" placeholder="Enter image_url"
                      onChange={(e) => {setImageCreate(e.target.value)}} />
            </Form.Group>
            
            <Form.Group controlId="formBasicTextArea">
              <Form.Label>Description</Form.Label>
                <Form.Control type="textarea" placeholder="Enter Description"
                      onChange={(e) => {setDescriptionCreate(e.target.value)}} />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick= {addCompanyEvent}>
            Add Data
          </Button>
        </Modal.Footer>
      </Modal>



      <IconContext.Provider value={{ color: "#A9B3C1", size: 64 }}>
      <LinksSection>
        <LinksWrapper>
          <LinksHeading>Links</LinksHeading>
          <LinksContainer>
            {
              links.map(link => (
                <LinksCard onClick={() => {window.open(link.url, '_blank');}}>
                  <LinksCardInfo>
                    <LinksCardIcon>
                      <GiRock />
                    </LinksCardIcon>
                    <LinksCardFeatures>
                      <LinksCardFeature>{link.name}</LinksCardFeature>
                    </LinksCardFeatures>
                  </LinksCardInfo>
                </LinksCard>
              ))
            }
          </LinksContainer>
        </LinksWrapper>
      </LinksSection>
    </IconContext.Provider>
  </React.Fragment>
  );
}
export default Links;
