import { useContext } from 'react'
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/CartContext';

function Album({ album }) {

  const { addItem } = useContext(CartContext)

  const onAdd = (e) => {
    addItem(album, album.quantity)
  }

  return (
    <Link to={`/product/${album.id}`}>
      <Card style={{ width: '18rem', marginBottom: '2rem' }}>
        <Card.Img variant="top" src={album.imageUrl} />
        <Card.Body>
          <Card.Title>{album.title}</Card.Title>
          <Card.Text>
            ${album.price}
          </Card.Text>
          <Button variant="info" onClick={onAdd}>Add to Cart</Button>
        </Card.Body>

      </Card>
    </Link>
  )
}

export default Album