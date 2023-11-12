import React, { useEffect } from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurants } from '../redux/restaurantSlice'

function Home() {
    const {allRestaurants,loading,error,allRestaurantsContainer} = useSelector((state)=>state.restaurantSlice)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchRestaurants())
    },[])
  return (
    <>
    <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
        {
            loading && <div><Spinner animation='border' variant='info'/><span>Loading...</span></div>
        }
    </div>
    <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
        {
            !loading && error? <div><span className='fw-bolder text-danger'>{error}</span></div>:null
        }
    </div>
 
     <Row className='mt-2'>
        {
          !loading && allRestaurants?.length>0?allRestaurants?.map(restaurant=>(
                <Col className="px-5 py-3" sm={12} md={6} lg={4} xl={3}>
                <RestCard restaurant={restaurant} />
                </Col>   
            ))
            : <div className='d-flex justify-content-center align-items-center mt-5 w-100 fw-bolder text-danger mx-auto'>No Restaurants available</div>
            }
        </Row>   
    </>
  )
}

export default Home