import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap';
import { removeFoodSpotAPI } from '../services/allAPI';
import "../bootstrap.min3.css"

function FoodCard({ displayData }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = async () => {
        setShow(true);
    }
    const deleteFood = async (Id) => {
        await removeFoodSpotAPI(Id)
    }

    return (
        <>
            <Card  className='p-2 mb-2 shadow'>
                <div style={{textAlign:'center'}}> <h1>{displayData?.Name}</h1> </div>
                <Card.Img onClick={handleShow} variant="top" height={"300px"} src={displayData?.imageURL} />
                <Card.Body>
                    <Card.Title>
                        <div   className='d-flex justify-content-between text-center'>
                            <p  className='text-center'>Location: </p>
                            <a href="https://www.google.com/maps/dir//Sheba+Square,+21%2F62+E,+University+Road,+PKA+Nagar,+Alfiya+Nagar,+South+Kalamassery,+Kalamassery,+Kochi,+Kerala+682022/@10.0465148,76.2387181,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b080c3373c2cdb3:0x4c5d226e329de65c!2m2!1d76.32112!2d10.046525?hl=en&entry=ttu" target="_blank">
                               <p>{displayData?.Location}</p>
                            </a>
                            <button  className='btn fs-5' onClick={() => deleteFood(displayData?.id)} ><i className='fa-solid fa-trash text-danger'></i></button>
                        </div>
                    </Card.Title>

                </Card.Body >
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>{displayData?.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card.Img onClick={handleShow} variant="top" height={"300px"} src={displayData?.imageURL} />

                    <p className='mt-3'>{displayData?.RecipeDetail}</p>

                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>


        </>
    )
}

export default FoodCard
