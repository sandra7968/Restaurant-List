import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
         <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand>
          <Link to={'/'} className='fw-bolder fs-4' style={{textDecoration:'none'}}><i className='fa-solid fa-mug-hot me-2'></i>De Cafes</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header