import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Album({album}) {
  return (
    <Card style={{ width: '18rem', marginBottom : '2rem' }}>
    <Card.Img variant="top" src={album.imageUrl}/>
    <Card.Body>
      <Card.Title>{album.title}</Card.Title>
      <Card.Text>
        ${album.price}
      </Card.Text>
      <Button variant="info">Add to Cart</Button>
    </Card.Body>
  </Card>
  )
}

export default Album