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
//
  export const Links = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [idCreate, setIdCreate] = useState(0);
    const [urlCreate, setUrlCreate] = useState("");
    const [typeCreate, setTypeCreate] = useState("");
    const [nameCreate, setNameCreate] = useState("");
    const [descriptionCreate, setDescriptionCreate] = useState("");
    const [imageCreate, setImageCreate] = useState("");
    // Api call
    useEffect(() => {
      fetch('http://localhost:3002/')
          .then(response => response.json())
          .then((data) => {
            setIdCreate(data.id);
            setUrlCreate(data.url);
            setTypeCreate(data.type);
            setNameCreate(data.name);
            setDescriptionCreate(data.description);
            setImageCreate(data.image);
            // console.log(data);
          })
        })
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
              <Form.Label>Id</Form.Label>
                <Form.Control required type="text" placeholder="Enter Unique Id"
                      onChange={(e) => {setIdCreate(e.target.value)}} />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Url</Form.Label>
                <Form.Control type="url" placeholder="Enter url"
                      onChange={(e) => {setUrlCreate(e.target.value)}} />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Type</Form.Label>
                <Form.Control type="text" placeholder="Enter Type"
                      onChange={(e) => {setTypeCreate(e.target.value)}} />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name"
                      onChange={(e) => {setNameCreate(e.target.value)}} />
            </Form.Group>
            <Form.Group controlId="formBasicTextArea">
              <Form.Label>Description</Form.Label>
                <Form.Control type="textarea" placeholder="Enter Description"
                      onChange={(e) => {setDescriptionCreate(e.target.value)}} />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Image_Url</Form.Label>
                <Form.Control type="url" placeholder="Enter image_url"
                      onChange={(e) => {setImageCreate(e.target.value)}} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={() => {
              let obj = {
                "id": Number(idCreate),
                "url": urlCreate,
                "type": typeCreate,
                "name": nameCreate,
                "description": descriptionCreate,
                "image": imageCreate
              };
            // createItem(obj)
            alert("Item created   "+JSON.stringify(obj));
            handleClose()}}>
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
