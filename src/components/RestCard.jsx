import React from 'react'
import { Card } from 'react-bootstrap'
function RestCard({restaurant}) {
  return (
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
  )
}

export default RestCard