import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function RestCard({restaurant}) {
  return (
    <Link to={`/view/${restaurant?.id}`}style={{textDecoration:'none'}}>
         <Card>
          <Card.Img style={{height:'250px'}} className='rounded p-2' variant="top" src={restaurant?.photograph} />
          <Card.Body>
            <Card.Title>{restaurant?.name}</Card.Title>
            <Card.Text>
              <p>
                  Cuisine: {restaurant?.cuisine_type}
              </p>
              <p>{restaurant?.neighborhood}</p>
            </Card.Text>
          </Card.Body>
        </Card>
    </Link>
  )
}

export default RestCard