import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchRestaurant } from '../redux/restaurantSlice'
function Header() {
  const dispatch = useDispatch()
  return (
    
    <div>
         <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand>
          <Link to={'/'} className='fw-bolder fs-4' style={{textDecoration:'none'}}><i className='fa-solid fa-mug-hot me-2'></i>De Cafes</Link>
          </Navbar.Brand>
          <div className="d-flex ms-auto align-items-center">
            <input onChange={(e)=>dispatch(searchRestaurant(e.target.value))} type="text" className='form-control' placeholder='Search Restaurant' />
            <i className="fa-solid fa-search" style={{marginLeft:'-30px', color:'gray'}}></i>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header