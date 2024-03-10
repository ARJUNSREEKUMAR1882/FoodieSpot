import React, { useEffect, useState } from 'react'
import { getAllFoodieSpotAPI} from '../services/allAPI'
import { Col, Row } from 'react-bootstrap'
import FoodCard from './FoodCard'

function View() {
    const [allFoodieSpot, setAllFoodieSpot] = useState()

    const getAllRecipes = async () => {
        const result = await getAllFoodieSpotAPI()
        if (result?.status == 200) {
            setAllFoodieSpot(result.data);
        }
    }
  
    useEffect(() => {
        getAllRecipes()
    },[allFoodieSpot])

    return (
        <>

             <h2 id='Combined' className='text-warning pt-2 ms-3'><u>Combo Spots</u></h2>
            <Row className='mt-3'>
                {allFoodieSpot?.length > 0 ?allFoodieSpot?.filter(foodieSpot => foodieSpot.type === "Combined").map((foodieSpot, index) => (

                            <Col key={index} className='border pt-2 mb-1 me- rounded' sm={12} md={6} lg={4}>
                                <FoodCard displayData={foodieSpot} />
                            </Col>
                        )) :
                    <div className="text-danger fw-bolder">No Data are upload yet !!!</div>
                }
                
            </Row>

            <hr />

            <h2 id='Non-Veg' className='text-warning pt-2 ms-3'><u> Non-Veg Spots</u></h2>
            <Row className='mt-3' >
                {allFoodieSpot?.length > 0 ?allFoodieSpot?.filter(foodieSpot => foodieSpot.type === "Non-Veg").map((foodieSpot, index) => (

                            <Col key={index} className='border pt-2 mb-1 me- rounded' sm={12} md={6} lg={4}>
                                <FoodCard displayData={foodieSpot} />
                            </Col>
                        )) :
                    <div className="text-danger fw-bolder">No Data are upload yet !!!</div>
                }
            </Row>

            <hr />

            <h2 id='Veg' className='text-warning pt-2 ms-3'><u> Veg Spots</u></h2>
            <Row className='mt-3'  >
                {allFoodieSpot?.length > 0 ?allFoodieSpot?.filter(foodieSpot => foodieSpot.type === "Veg").map((foodieSpot, index) => (

                            <Col key={index} className='border pt-2 mb-1 me- rounded' sm={12} md={6} lg={4}>
                                <FoodCard displayData={foodieSpot} />
                            </Col>
                        )) :
                    <div className="text-warning fw-bolder">No Data are upload yet !!!</div>
                }
            
            </Row>

            <hr />

            <h2 id='Drinks' className='text-warning pt-2 ms-3'><u>Drink Spots</u></h2>
            <Row className='mt-3'>
                {allFoodieSpot?.length > 0 ?allFoodieSpot?.filter(foodieSpot => foodieSpot.type === "Drinks").map((foodieSpot, index) => (
                            <Col key={index} className='border pt-2 mb-1 me- rounded' sm={12} md={6} lg={4}>
                                <FoodCard displayData={foodieSpot} />
                            </Col>
                        )) :
                    <div className="text-danger fw-bolder">No Data are upload yet !!!</div>
                }
            </Row>

        </>
    )
}

export default View
