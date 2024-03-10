import { Carousel } from 'react-bootstrap';
import './App.css'
import Header from './components/Header';
import View from './components/View';
import { useEffect, useState } from 'react';
import { getAllFoodieSpotAPI } from './services/allAPI';

function App() {

  const [allFoodieSpot, setAllFoodieSpot] = useState()

    const getAllFoodieSpot = async () => {
        const result = await getAllFoodieSpotAPI()
        if (result?.status == 200) {
            setAllFoodieSpot(result.data);
        }
    }
  
    useEffect(() => {
      getAllFoodieSpot()
    }, [allFoodieSpot])



  return (
    <>
      <Header />
      
      <Carousel id='home' style={{margin:'0% 0% 0% 0%'}} >
          {allFoodieSpot?.length > 0 ? allFoodieSpot?.map((foodieSpot, index) => (
            <Carousel.Item key={index} interval={1000} >
                <img style={{ height: '100vh' }}
                  className="d-block w-100"
                  src={foodieSpot?.imageURL}
                  alt="First slide"
                />
                <Carousel.Caption key={index}>
                </Carousel.Caption>
          </Carousel.Item>
          )) :
          <div></div>
        }
         
        </Carousel>
      <div className='container mt-2 text-center '>
        
        <p>"Indulge Your Palate: FoodieSpot - A Culinary Haven"</p></div>



      <div className='ms-4 me-4 p-3 rounded shadow' style={{ backgroundColor: "black" }}>
        <View />
      </div>
    </>
  )
}

export default App
