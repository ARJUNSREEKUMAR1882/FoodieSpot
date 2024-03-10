import React, { useEffect } from 'react'
import { Button, ButtonGroup, Col, FloatingLabel, Form, Modal, Navbar, Row, ToggleButton } from 'react-bootstrap'
import { useState } from 'react';
import { getAllFoodieSpotAPI, uploadFoodieSpotAPI } from '../services/allAPI';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
    const [uploadFoodieSpot, setUploadFoodieSpot] = useState({
        Name: "", imageURL: "", Location: ""

    })
    const [show, setShow] = useState(false);
    const [scrolling, setScrolling] = useState(false);


    const handleClose = () => {
        setShow(false);
        setUploadFoodieSpot("")
    };
    const handleShow = () => setShow(true);

    const handleUpload = async () => {
        const { Name, imageURL, Location } = uploadFoodieSpot
        if (Name && imageURL && Location && radioValue) {
            const foodieSpotData = {
                ...uploadFoodieSpot,
                type: radioValue // Add the selected radio value to the recipe data
            };
            const result = await uploadFoodieSpotAPI(foodieSpotData);
            if (result.status >= 200 && result.status < 300) {
                alert(`API Call Success.. ${result.data.Name} Data uploaded Successfully`)

            } else {
                alert("API Call Failed... Please try after some time!!!")
            }
            alert("Your Data is Success Created")
            await getAllFoodieSpotAPI()
        } else {
            alert("Please fill the form Completely !!!")
        }
        console.log(Name, imageURL, Location);

        handleClose()
    }

    const [radioValue, setRadioValue] = useState('Combined');

    const radios = [
        { name: 'Combined', value: 'Combined' },
        { name: 'Non-Veg', value: 'Non-Veg' },
        { name: 'Veg', value: 'Veg' },
        { name: 'Drinks', value: 'Drinks' },
    ];

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        console.log("Scrolling...", window.scrollY);
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };



    return (
        <>
            <Navbar className={`bg-body-Primary justify-content-between shadow`} style={{ position: scrolling ? 'fixed' : 'relative', top:0, left: 0, width: '100%',height:'10vh', zIndex: 1000 }}>

                <Navbar.Brand  className='text-primary ms-2' href="#home"><h3 style={{ color: "black",fontSize:'40px'}}><b>Foodie-Spot</b> <i style={{ color: "black" }} className="fa-solid fa-utensils ms-2" ></i> </h3> </Navbar.Brand>

                <Row>



                    <Col xs="auto" className='mt-1 p-4'><h4><a className='text-info bg-body-dark' href='#home'><strong>HOME</strong></a></h4></Col>
                    <Col xs="auto" className='mt-1 p-4'><h4><a className='text-info' href='#Combined'><strong>
                        <NavDropdown title="CATEGORY" id="basic-nav-dropdown">
                            <NavDropdown.Item className='text-primary' href='#Combined'> COMBO </NavDropdown.Item>
                            <NavDropdown.Item className='text-primary' href='#Non-Veg'> NON-VEG </NavDropdown.Item>
                            <NavDropdown.Item className='text-primary' href='#Veg'> VEG </NavDropdown.Item>
                            <NavDropdown.Item className='text-primary' href='#Drinks'> DRINKS </NavDropdown.Item>
                        </NavDropdown>
                    </strong></a></h4></Col>

                    <Col xs="auto">
                        <Button onClick={handleShow} className='me-5 ms-1 mt-4 p-2 text-dark bg-body-primary w-400 h-80' type="submit"><strong>Add Your FoodieSpot</strong></Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title style={{ color: "black", fontFamily: "sans-serif" }}> Add Your Data</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <ButtonGroup>
                                        {radios.map((radio, idx) => (
                                            <ToggleButton
                                                key={idx}
                                                id={`radio-${idx}`}
                                                type="radio"
                                                name="radio"
                                                value={radio.value}
                                                checked={radioValue === radio.value}
                                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                                            >
                                                {radio.name}
                                            </ToggleButton>
                                        ))}
                                    </ButtonGroup>

                                    <FloatingLabel controlId="floatingInput" label="Name" className="mb-3 mt-3">
                                        <Form.Control value={uploadFoodieSpot.Name} onChange={e => setUploadFoodieSpot({ ...uploadFoodieSpot, Name: e.target.value })} type="text" placeholder="Name" />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingInput" label="Image URL" className="mb-3">
                                        <Form.Control value={uploadFoodieSpot.imageURL} onChange={e => setUploadFoodieSpot({ ...uploadFoodieSpot, imageURL: e.target.value })} type="text" placeholder="Name IMG" />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingInput" label="Location" className="mb-3">
                                        <Form.Control value={uploadFoodieSpot.Location} onChange={e => setUploadFoodieSpot({ ...uploadFoodieSpot, Location: e.target.value })} type="text" placeholder=" location" />
                                    </FloatingLabel>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className='text-info' variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button className='text-info' variant="primary" onClick={handleUpload}>
                                    Save
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Navbar>
        </>
    )
}

export default Header
