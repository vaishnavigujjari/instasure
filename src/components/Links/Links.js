
import { AiFillThunderbolt } from "react-icons/ai";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";

import React, {useState,useEffect}from 'react';
import { connect } from 'react-redux';
import { fetchLinks,addLink } from '../../redux';


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
import { Container, Row, Col, Modal, Form, Button, Nav, NavDropdown } from 'react-bootstrap';

// import links from './links.json';
import Image from 'react-bootstrap/Image'

function Links({linkData, fetchLinks,addLink}) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  const [idCreate, setIdCreate] = useState(0);
  const [urlCreate, setUrlCreate] = useState("");
  const [typeCreate, setTypeCreate] = useState("");
  const [imageCreate, setImageCreate] = useState("");
  const [DescriptionCreate, setDescriptionCreate] = useState("");
  useEffect(() => {
    fetchLinks()
}, [])
console.log(linkData)

return linkData.loading ? (
  <h2>Loading</h2>
) : linkData.error ? (
  <h2>{linkData.error}</h2>
) : (
  <>
  

  <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <LinksSection>
        <LinksWrapper>
          <LinksHeading>Links</LinksHeading>
          <center><Button variant="success" onClick={() => {handleShow()}}>Add Item</Button></center>
          <br />
          <LinksContainer>

            {
              linkData && linkData.links && linkData.links.map(link => (
                <LinksCard onClick={() => {window.open(link.url, '_blank');}}>
                  <LinksCardInfo>
                    <LinksCardIcon>
                      <GiRock />
                    </LinksCardIcon>
                    <LinksCardFeatures>
                      <LinksCardFeature>{link.url}</LinksCardFeature>
                    </LinksCardFeatures>
                  </LinksCardInfo>
                </LinksCard>
              ))
            }

          </LinksContainer>
        </LinksWrapper>
      </LinksSection>
    </IconContext.Provider>
    <Modal show={show} onHide={handleClose} animation={false}>
    <Modal.Header closeButton>
      <Modal.Title>Add Item</Modal.Title>
    </Modal.Header>
    <Modal.Body>

      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Label>URL</Form.Label>
          <Form.Control required type="url" placeholder="Enter URL"
          onChange={(e) => {setUrlCreate(e.target.value)}} />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" placeholder="Enter type"
          onChange={(e) => {setTypeCreate(e.target.value)}} />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Image</Form.Label>
          <Form.Control type="url" placeholder="Enter image url"
          onChange={(e) => {setImageCreate(e.target.value)}} />
        </Form.Group>

    
        <Form.Group controlId="formBasicTextArea">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter Name"
          onChange={(e) => {setDescriptionCreate(e.target.value)}} />
        </Form.Group>

    
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={() => {
        let obj = {
          "id": Number(idCreate),
          "url": urlCreate,
          "type": typeCreate,
          "description": DescriptionCreate,
          "image": imageCreate,
        };

        addLink(obj);
        handleClose()}}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>

  </>

)

}


const mapStateToProps = state => {
  return {
      linkData: state.link
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchLinks: () => dispatch(fetchLinks()),
      addLink : (obj) => dispatch(addLink(obj)) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Links)
