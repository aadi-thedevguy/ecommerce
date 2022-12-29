import { useContext } from 'react'
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/CartContext';

function Album({ album }) {

  const { addItem } = useContext(CartContext)

  const onAdd = () => {
    addItem(album, album.quantity)
  }

  return (
    <Card style={{ maxWidth: '18rem', marginBottom: '2rem' }}>
      <Link to={`/product/${album.id}`}>
        <Card.Img variant="top" src={album.imageUrl} />
      </Link>
      <Card.Body>
        <Card.Title>{album.title}</Card.Title>
        <Card.Text>
          ${album.price}
        </Card.Text>
        <Button variant="info" onClick={onAdd}>Add to Cart</Button>
      </Card.Body>

    </Card>

  )
}

export default Album